import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function ScrollIndicator() {
  const handleScroll = useSmoothScroll()

  return (
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
          onClick={(e) => handleScroll(e, 'about')}
        />
      </motion.div>
    </motion.div>
  )
} 