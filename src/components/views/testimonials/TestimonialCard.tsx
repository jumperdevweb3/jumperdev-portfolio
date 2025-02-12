import { Card, CardContent } from "@/components/ui/card"
import { motion, PanInfo } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonialVariants } from "./testimonialAnimations"

interface TestimonialCardProps {
  text: string
  author: string
  position: string
  page: number
  direction: number
  handleDragEnd: (e: any, info: PanInfo) => void
}

export function TestimonialCard({ text, author, position, page, direction, handleDragEnd }: TestimonialCardProps) {
  return (
    <motion.div
      key={page}
      custom={direction}
      variants={testimonialVariants}
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
              {text}
            </p>
          </div>
          <div className="text-right mt-8">
            <p className="font-semibold text-lg">{author}</p>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 