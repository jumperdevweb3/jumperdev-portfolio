"use client"

import { Card, CardContent } from "@/components/ui/card"
import { testimonialsContent } from '@/content/testimonials'
import { AnimatePresence, motion, PanInfo } from "framer-motion"
import { Quote } from "lucide-react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export function TestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0])
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + testimonialsContent.length) % testimonialsContent.length
    setPage([newPage, newDirection])
  }

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      zIndex: 0,
    }),
  }

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
          
          <div className="relative h-[450px] sm:h-[400px] max-w-2xl mx-auto perspective">
            <div className="testimonials-container">
              {/* Background Cards */}
              <div className="absolute inset-0 pointer-events-none">
                <Card className="absolute inset-0 transform translate-y-4 -translate-x-4 rotate-[-6deg] bg-primary/5" />
                <Card className="absolute inset-0 transform translate-y-2 translate-x-2 rotate-[3deg] bg-primary/5" />
              </div>

              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <Card className="h-full bg-background/50 backdrop-blur-sm hover:shadow-custom transition-shadow overflow-auto">
                    <CardContent className="h-full flex flex-col justify-between pt-12 pb-8 px-4 sm:px-8">
                      <div className="relative pt-8">
                        <Quote className="absolute -top-2 left-0 h-12 w-12 text-primary/20 z-0" />
                        <p className="text-base sm:text-lg text-muted-foreground relative z-10 pl-14">
                          {testimonialsContent[page].text}
                        </p>
                      </div>
                      <div className="text-right mt-8">
                        <p className="font-semibold text-lg">{testimonialsContent[page].author}</p>
                        <p className="text-sm text-muted-foreground">{testimonialsContent[page].position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
              {testimonialsContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage([index, index > page ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-all ${
                    page === index
                      ? "bg-primary w-4"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Swipe Instruction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-muted-foreground mt-16"
          >
            Swipe or drag to see more testimonials
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}