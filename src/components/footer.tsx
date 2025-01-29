"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Bot, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/jumperdevweb3" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/filipnamysl/" },
    { icon: Bot, href: "https://discord.gg/jheUCreBEj" },
    { icon: Mail, href: "mailto:namysl.filip00@gmail.com" },
  ]

  return (
    <footer className="bg-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="mb-8"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
            >
              ↑
            </Button>
          </motion.div>

          <p className="text-center text-muted-foreground text-lg md:text-xl xl:text-2xl mb-8">
            Feel free to <span className="font-bold">contact</span> me for any questions or collaborations.
          </p>
          <div className="flex space-x-12 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="lg:h-[4rem] lg:w-[4rem] h-[2rem] w-[2rem] xl:h-[5rem] xl:w-[5rem]" />
              </motion.a>
            ))}
          </div>

          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Filip Namysł. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}