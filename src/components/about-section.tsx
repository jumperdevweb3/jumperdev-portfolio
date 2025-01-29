"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { technologiesContent } from '@/content/technologies'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about-content" className="py-20 bg-secondary/20">
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
            {technologiesContent.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all backdrop-blur-sm bg-background/50">
                  <div className="flex items-center gap-3 mb-4">
                    <tech.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}