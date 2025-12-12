"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectPreviewProps {
  title: string
  category: string
  tags: string[]
  className?: string
}

const categoryStyles: Record<string, { gradient: string; pattern: string }> = {
  "e-shop": {
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    pattern: "grid",
  },
  "web": {
    gradient: "from-green-500/20 via-teal-500/20 to-cyan-500/20",
    pattern: "lines",
  },
  "landing": {
    gradient: "from-orange-500/20 via-red-500/20 to-yellow-500/20",
    pattern: "dots",
  },
  "app": {
    gradient: "from-indigo-500/20 via-blue-500/20 to-purple-500/20",
    pattern: "circular",
  },
  "portfolio": {
    gradient: "from-pink-500/20 via-rose-500/20 to-fuchsia-500/20",
    pattern: "grid",
  },
  "automation": {
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    pattern: "lines",
  },
}

export function ProjectPreview({ title, category, tags, className = "" }: ProjectPreviewProps) {
  const style = categoryStyles[category] || categoryStyles["web"]

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient}`} />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        {style.pattern === "grid" && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
        )}
        {style.pattern === "lines" && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
            }}
          />
        )}
        {style.pattern === "dots" && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        )}
        {style.pattern === "circular" && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 2px, transparent 2px)",
              backgroundSize: "40px 40px",
            }}
          />
        )}
      </div>

      {/* Mock Browser Window */}
      <div className="absolute inset-4 rounded-lg bg-background/90 backdrop-blur-sm border border-border/50 shadow-2xl overflow-hidden">
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-card/80">
          <div className="flex gap-1.5">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500/60"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500/60"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500/60"
              whileHover={{ scale: 1.2 }}
            />
          </div>
          <div className="flex-1 mx-4 h-7 rounded-md bg-muted/60 flex items-center px-3">
            <div className="text-xs text-muted-foreground truncate">
              {title.toLowerCase().replace(/\s+/g, '-')}.sk
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 h-[calc(100%-3.5rem)] overflow-hidden bg-gradient-to-b from-background to-background/95">
          {/* Title/Header */}
          <div className="mb-4">
            <motion.div 
              className="h-8 w-3/4 bg-gradient-to-r from-primary/30 to-primary/10 rounded mb-2"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="h-4 w-1/2 bg-muted/50 rounded" />
          </div>

          {/* Content Blocks */}
          <div className="space-y-3">
            {category === "e-shop" && (
              <>
                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded border border-border/30" />
                  ))}
                </div>
                <div className="h-4 w-2/3 bg-muted/30 rounded" />
              </>
            )}
            
            {category === "web" && (
              <>
                <div className="h-32 bg-gradient-to-r from-primary/10 to-primary/5 rounded border border-border/30 mb-3" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-muted/30 rounded" />
                  <div className="h-3 w-5/6 bg-muted/30 rounded" />
                  <div className="h-3 w-4/6 bg-muted/30 rounded" />
                </div>
              </>
            )}

            {category === "landing" && (
              <>
                <div className="h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded mb-3" />
                <div className="h-10 w-32 bg-primary/30 rounded mx-auto" />
                <div className="space-y-2 mt-4">
                  <div className="h-2 w-full bg-muted/20 rounded" />
                  <div className="h-2 w-3/4 bg-muted/20 rounded mx-auto" />
                </div>
              </>
            )}

            {category === "app" && (
              <>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="h-16 bg-gradient-to-br from-primary/15 to-primary/5 rounded border border-border/30" />
                  <div className="h-16 bg-gradient-to-br from-primary/15 to-primary/5 rounded border border-border/30" />
                </div>
                <div className="h-20 bg-muted/20 rounded" />
              </>
            )}

            {category === "portfolio" && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded border border-border/30" />
                  ))}
                </div>
              </>
            )}

            {category === "automation" && (
              <>
                <div className="flex gap-2 mb-3">
                  <div className="flex-1 h-12 bg-gradient-to-r from-primary/15 to-primary/5 rounded border border-border/30" />
                  <div className="w-12 h-12 bg-primary/20 rounded border border-border/30" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-muted/20 rounded" />
                  <div className="h-2 w-4/5 bg-muted/20 rounded" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Title Overlay with Tags */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {tags.slice(0, 3).map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

