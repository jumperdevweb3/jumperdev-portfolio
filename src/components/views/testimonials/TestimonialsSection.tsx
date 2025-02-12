"use client"

import { Card } from "@/components/ui/card"
import { useTestimonialCarousel } from "@/components/views/testimonials/hooks/useTestimonialCarousel"
import { testimonialsContent } from '@/content/testimonials'
import { AnimatePresence, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TestimonialCard } from "./TestimonialCard"

export function TestimonialsSection() {
  const { page, direction, setPage, handleDragEnd } = useTestimonialCarousel(testimonialsContent.length)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
                <TestimonialCard
                  {...testimonialsContent[page]}
                  page={page}
                  direction={direction}
                  handleDragEnd={handleDragEnd}
                />
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