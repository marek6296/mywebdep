"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "/", label: "Domov" },
  { href: "/obchod", label: "Obchod" },
  { href: "/services", label: "Služby" },
  { href: "/about", label: "O mne" },
  { href: "/contact", label: "Kontakt" },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border/40" 
      style={{ 
        backdropFilter: "blur(8px)", 
        WebkitBackdropFilter: "blur(8px)",
        height: "64px",
        minHeight: "64px",
        maxHeight: "64px",
        paddingTop: "0",
        paddingBottom: "0",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - bez animácií ktoré menia layout */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              style={{
                fontWeight: "700",
                lineHeight: "1.2",
                letterSpacing: "0",
              }}
            >
              WebDep
            </span>
          </Link>

          {/* Desktop Navigation - fixné rozmery */}
          <div className="hidden md:flex items-center space-x-1 h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  style={{
                    fontWeight: "500",
                    lineHeight: "1.5",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.label}
                  {/* Underline pomocou absolute - nemení layout */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 bg-primary"
                      style={{
                        height: "2px",
                        transform: "translateY(0)",
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-2 h-full">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                style={{
                  width: "40px",
                  height: "40px",
                  minWidth: "40px",
                  minHeight: "40px",
                }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" style={{ width: "20px", height: "20px" }} />
                ) : (
                  <Moon className="h-5 w-5" style={{ width: "20px", height: "20px" }} />
                )}
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                width: "40px",
                height: "40px",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" style={{ width: "20px", height: "20px" }} />
              ) : (
                <Menu className="h-5 w-5" style={{ width: "20px", height: "20px" }} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95"
            style={{ 
              backdropFilter: "blur(8px)", 
              WebkitBackdropFilter: "blur(8px)",
              height: "auto",
            }}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-base transition-colors ${
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  style={{
                    fontWeight: "500",
                    lineHeight: "1.5",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
