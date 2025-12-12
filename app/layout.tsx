import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WebDep - Profesionálne webové riešenia",
    template: "%s | WebDep",
  },
  description: "Vytvárame moderné, rýchle a konverzne webové stránky pre vaše podnikanie. Špecializujeme sa na Next.js, e-shopy a automatizácie.",
  keywords: ["web development", "freelancer", "Next.js", "e-shop", "web design", "Slovensko"],
  authors: [{ name: "WebDep" }],
  creator: "WebDep",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://webdep.sk",
    siteName: "WebDep",
    title: "WebDep - Profesionálne webové riešenia",
    description: "Vytvárame moderné, rýchle a konverzne webové stránky pre vaše podnikanie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebDep - Profesionálne webové riešenia",
    description: "Vytvárame moderné, rýchle a konverzne webové stránky pre vaše podnikanie.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "WebDep",
              jobTitle: "Web Developer",
              url: "https://webdep.sk",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col relative">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
