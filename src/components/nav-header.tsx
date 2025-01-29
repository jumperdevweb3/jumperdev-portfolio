"use client"

import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function NavHeader() {
  const handleScroll = useSmoothScroll()
  const [activeSection, setActiveSection] = useState("")

  const logoVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    hover: { scale: 1.1, rotate: 360, transition: { duration: 0.5 } }
  }

  const navItems = [
    { label: "About", id: "about-content" },
    { label: "Projects", id: "projects", offsetPercentage: 15 },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if(entry.target.id === "hero") {
              setActiveSection("")
            } else {
              setActiveSection(entry.target.id)
            }
          }
        })
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0
      }
    )
    const navItemsWithHero = [...navItems, { label: "Hero", id: "hero" }]
    navItemsWithHero.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            handleScroll(e, "hero")
            setActiveSection("")
          }}
        >
          <motion.div
            whileHover="hover"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="text-primary"
          >
            <Code2 size={32} />
          </motion.div>
          <span className="font-bold text-xl">Filip Namysł</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id, item.offsetPercentage)}
              className={`
                relative text-muted-foreground hover:text-primary transition-colors
                ${activeSection === item.id ? "text-primary font-medium" : ""}
              `}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </motion.header>
  )
}