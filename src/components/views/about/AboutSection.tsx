"use client"

import { technologiesContent } from '@/content/technologies'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TechnologyCard } from './cards/TechnologyCard'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a Full-stack Web3 Developer passionate about transforming blockchain technologies into user-friendly solutions. My expertise spans from architecting scalable backend infrastructures to optimizing frontend performance, with a proven track record of implementing innovative decentralized applications.
              </p>
              <p>
                By bridging complex blockchain concepts with intuitive interfaces, I deliver high-performance Web2 & Web3 solutions that significantly improve system efficiency and user experience.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-12">Technologies & Skills</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologiesContent.map((tech) => (<TechnologyCard key={tech.name} tech={tech} />))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}