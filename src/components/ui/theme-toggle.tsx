"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const STAR_COUNT = 6
const starPositions = Array.from({ length: STAR_COUNT }).map((_, i) => ({
  x: Math.round(Math.cos(i * Math.PI / 3) * 15 * 100) / 100,
  y: Math.round(Math.sin(i * Math.PI / 3) * 15 * 100) / 100
}))

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-10 h-10" />
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="theme-toggle-container relative w-10 h-10"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-5 w-5" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : -180,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-5 w-5" />
      </motion.div>

      <div className="theme-toggle-stars absolute inset-0">
        {starPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="theme-toggle-star absolute"
            initial={false}
            animate={{
              scale: isDark ? 1 : 0,
              x: isDark ? pos.x : 0,
              y: isDark ? pos.y : 0,
              opacity: isDark ? 1 : 0,
            }}
            style={{
              width: "2px",
              height: "2px",
              left: "calc(50% - 1px)",
              top: "calc(50% - 1px)",
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
    </Button>
  )
}