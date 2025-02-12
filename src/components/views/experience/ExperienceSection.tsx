"use client"

import { achievementsContent } from '@/content/achievements'
import { experiencesContent } from '@/content/experience'
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from 'react'
import { useInView } from "react-intersection-observer"
import { AchievementCard } from './cards/AchievementCard'
import { ExperienceCard } from './cards/ExperienceCard'

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

          <div className="mb-16 max-w-screen-lg flex flex-col gap-4 mx-auto">
            {achievementsContent.map((achievement) => (
              <AchievementCard key={achievement.title} achievement={achievement} inView={inView} />
            ))}
          </div>

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
                
                const isLeft = index % 2 === 0
                return (
                  <ExperienceCard
                    key={exp.title + exp.period}
                    experience={exp}
                    isLeft={isLeft}
                  />
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}