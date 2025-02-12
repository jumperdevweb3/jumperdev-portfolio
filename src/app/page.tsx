"use client"

import { AboutSection } from '@/components/views/about/AboutSection'
import { ExperienceSection } from "@/components/views/experience/ExperienceSection"
import { Footer } from "@/components/views/footer/Footer"
import { HeroSection } from "@/components/views/hero/HeroSection"
import { NavHeader } from "@/components/views/navigation/NavHeader"
import { ProjectsSection } from "@/components/views/projects/ProjectsSection"
import { TestimonialsSection } from "@/components/views/testimonials/TestimonialsSection"
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