import { motion } from "framer-motion"

const floatingShapes = Array(3).fill(null).map((_, i) => ({
  width: 200 + (i * 100),
  height: 200 + (i * 100),
  left: `${(i + 1) * 25}%`,
  top: `${(i + 1) * 20}%`,
  duration: 15 + (i * 5)
}))

export function FloatingShapes() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 backdrop-blur-3xl"
          style={{
            width: shape.width,
            height: shape.height,
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  )
} 