import { Button } from "@/components/ui/button"
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { motion } from "framer-motion"
import Link from 'next/link'

export function ActionButtons() {
  const handleScroll = useSmoothScroll()

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto">
        <Button size="lg" className="text-base bg-primary/90 hover:bg-primary/80 dark:bg-primary/50 dark:hover:bg-primary/70 md:text-lg w-full sm:w-auto px-6 md:px-8" asChild>
          <Link href="#projects" onClick={(e) => handleScroll(e, 'projects', 25)} aria-label="View Projects">
            View Projects
          </Link>
        </Button>
      </motion.div>
    </div>
  )
} 