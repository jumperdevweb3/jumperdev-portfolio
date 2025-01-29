"use client"

import { Button } from "@/components/ui/button"
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { motion } from "framer-motion"
import {
  ArrowDown,
  Download
} from "lucide-react"
import Link from 'next/link'
import { use } from "react"

const floatingShapes = Array(3).fill(null).map((_, i) => ({
  width: 200 + (i * 100),
  height: 200 + (i * 100),
  left: `${(i + 1) * 25}%`,
  top: `${(i + 1) * 20}%`,
  duration: 15 + (i * 5)
}))

async function loadInitialState() {
  await new Promise(resolve => setTimeout(resolve, 0))
  return true
}
const initialStatePromise = loadInitialState()

export function HeroSection() {
  const isMounted = use(initialStatePromise)
  const handleScroll = useSmoothScroll()

  return (
    <section className="min-h-screen" id="hero">
      <div className="h-screen flex flex-col items-center justify-center relative dark:hero-gradient-dark hero-gradient-light overflow-hidden">

        <div className="animated-grid" />
        {isMounted && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {floatingShapes.map((shape, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/10 backdrop-blur-3xl"
                style={{
                  width: shape.width,
                  height: shape.height,
                  left: shape.left,
                  top: shape.top,
                }}
                animate={{
                  x: [0, 30, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6  my-10">
            Full-stack Web3 Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            With over <span className="font-bold">4 years</span> of experience in web and blockchain technologies.
            Specialized in architecting scalable backend & frontend infrastructures.
            Proven track record of implementing innovative decentralized applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto">
              <Button size="lg" className="text-base md:text-lg w-full sm:w-auto px-6 md:px-8" asChild>
                <Link href="#projects" onClick={(e) => handleScroll(e, 'projects', 25)}>
                  View Projects
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-pulse w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg w-full sm:w-auto px-6 md:px-8 download-button group"
                asChild
              >
                <a href="/resume.pdf" download="Filip_Namysł_CV.pdf">
                  <Download className="mr-2 h-4 w-4 md:h-5 md:w-5 download-icon" />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-base md:text-lg text-muted-foreground italic">
              &ldquo;With the power of knowledge, experience, and AI tools, the impossible becomes achievable-faster than ever before.&rdquo;
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-2 md:bottom-8 w-full text-center z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown
              className="h-8 w-8 mx-auto text-primary cursor-pointer"
              onClick={(e) => handleScroll(e, 'about-content')}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}