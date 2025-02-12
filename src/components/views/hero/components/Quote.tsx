import { motion } from "framer-motion"

export function Quote() {
  return (
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
  )
} 