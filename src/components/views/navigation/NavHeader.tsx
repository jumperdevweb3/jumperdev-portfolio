"use client"

import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Logo } from './components/Logo'
import { NavLinks } from './components/NavLinks'
import { INTERSECTION_OBSERVER_OPTIONS, NAV_ITEMS } from './constants'

export function NavHeader() {
  const handleScroll = useSmoothScroll()
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === "hero" ? "" : entry.target.id)
          }
        })
      },
      INTERSECTION_OBSERVER_OPTIONS
    )

    const navItemsWithHero = [...NAV_ITEMS, { label: "Hero", id: "hero" }]
    navItemsWithHero.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    handleScroll(e, "hero")
    setActiveSection("")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo onLogoClick={handleLogoClick} />
        <NavLinks 
          activeSection={activeSection} 
          onNavItemClick={handleScroll} 
        />
        <ThemeToggle />
      </div>
    </motion.header>
  )
}