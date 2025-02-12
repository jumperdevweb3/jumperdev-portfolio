import { motion } from "framer-motion"
import { ActionButtons } from './ActionButtons'
import { Quote } from './Quote'

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 text-center relative z-10"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 my-10">
        Full-stack Web3 Developer
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        With over <span className="font-bold">4 years</span> of experience in web and blockchain technologies.
        Specialized in architecting scalable backend & frontend infrastructures.
        Proven track record of implementing innovative decentralized applications.
      </p>
      
      <ActionButtons />
      <Quote />
    </motion.div>
  )
} 