"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code2, Home, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20">
      <div className="container px-4 py-16 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Code2 className="w-32 h-32 text-primary" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-2 -right-2"
            >
              <Search className="w-8 h-8 text-foreground" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Oops! Looks like you're lost in the blockchain...
          </p>
          <p className="text-lg md:text-xl text-primary font-medium mb-8">
            But hey, you found a Web3 Developer instead! 🚀
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-lg">
              <Link href="/" aria-label="Back to Homepage">
                <Home className="mr-2 h-5 w-5" />
                Back to Homepage
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}