"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { experiencesContent } from '@/content/experience'
import { motion, useScroll, useSpring } from "framer-motion"
import { Building2, Calendar } from "lucide-react"
import { useRef } from 'react'
import { useInView } from "react-intersection-observer"

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

          {/* Achievement Section */}
          <div className="mb-16 max-w-screen-lg mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
                <CardHeader>
                  <Badge className="w-fit mb-2">Achievement</Badge>
                  <CardTitle className="text-2xl">First Place Winner - Infinite Space Bazaar Hackathon by Celestia</CardTitle>
                  <CardDescription className="space-y-2 text-base">
                    <p>
                      Won first place among 1400+ participants and 70+ submissions in a global online hackathon,
                      demonstrating exceptional abilities in Web3 development and team collaboration.
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                      <li>Development of entire backend & frontend infrastructure</li>
                      <li>Demonstrated innovative solution development in Web3 space</li>
                      <li>Showcased effective team collaboration under time pressure</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="relative" ref={containerRef}>
            <motion.div
              className="absolute left-1/2 transform -translate-x-px w-0.5 bg-border/50"
              style={{ height: "100%" }}
            />
            <motion.div
              className="absolute left-1/2 transform -translate-x-px w-0.5 bg-primary origin-top"
              style={{
                height: "100%",
                scaleY,
              }}
            />
            <div className="space-y-12">
              <div className="animated-grid" />
              {experiencesContent.map((exp, index) => {
                const [cardRef, cardInView] = useInView({
                  triggerOnce: true,
                  threshold: 0.2,
                })

                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={exp.title + exp.period}
                    ref={cardRef}
                    initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
                    animate={cardInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`relative md:w-1/2 ${isLeft ? "md:pr-12 md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader className={`${isLeft ? "text-left" : "text-left"}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <Badge variant="outline">{exp.period}</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-4 w-4 text-primary" />
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <CardDescription className="text-base">{exp.company}</CardDescription>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                        <ul className="space-y-1.5 text-sm text-muted-foreground ml-6 list-disc">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}