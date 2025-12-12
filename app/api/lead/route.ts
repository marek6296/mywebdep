import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { resend } from "@/lib/resend"

// Simple rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 5) {
    // Max 5 requests per minute
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot check
    if (body.website) {
      // Spam detected, but return success to avoid revealing the honeypot
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message || !body.gdpr) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: body.name,
          email: body.email,
          phone: body.phone || null,
          company: body.company || null,
          project_type: body.projectType || null,
          budget: body.budget || null,
          deadline: body.deadline || null,
          has_texts: body.hasTexts || null,
          has_brand: body.hasBrand || null,
          page_count: body.pageCount || null,
          seo: body.seo || false,
          blog: body.blog || false,
          integrations: body.integrations || false,
          booking: body.booking || false,
          payments: body.payments || false,
          message: body.message,
          gdpr: body.gdpr,
          utm_source: body.utm_source || null,
          utm_medium: body.utm_medium || null,
          utm_campaign: body.utm_campaign || null,
          referer: body.referer || null,
          ip_address: ip,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      )
    }

    // Send email notification
    try {
      if (!resend) {
        console.warn("Resend not configured, skipping email notification")
      } else {
        await resend.emails.send({
        from: "WebDep <noreply@webdep.sk>",
        to: process.env.ADMIN_EMAIL || "admin@webdep.sk",
        subject: `Nový lead: ${body.name}`,
        html: `
          <h2>Nový lead z webdep.sk</h2>
          <p><strong>Meno:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.phone ? `<p><strong>Telefón:</strong> ${body.phone}</p>` : ""}
          ${body.company ? `<p><strong>Firma:</strong> ${body.company}</p>` : ""}
          <p><strong>Typ projektu:</strong> ${body.projectType || "Nezadané"}</p>
          <p><strong>Rozpočet:</strong> ${body.budget || "Nezadané"}</p>
          <p><strong>Správa:</strong></p>
          <p>${body.message}</p>
          <hr>
          <p><small>Lead ID: ${data.id}</small></p>
        `,
        })
      }
    } catch (emailError) {
      console.error("Email error:", emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

