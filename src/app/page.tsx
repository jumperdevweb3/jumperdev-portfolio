"use client"

import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { NavHeader } from "@/components/nav-header"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='overflow-x-hidden'
    >
      <NavHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </motion.div>
  )
}