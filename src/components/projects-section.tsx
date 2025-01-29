"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projectsContent } from '@/content/projects'
import { motion } from "framer-motion"
import { ExternalLink, Github, User, Users } from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projectsContent.map((project, index) => {
              const ProjectIcon = project.icon

              return (
                <motion.div
                  key={project.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-custom flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
                      <Image
                        width={700}
                        height={192}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                        <Badge className='flex gap-2 font-bold'><ProjectIcon className="h-6 w-6" />{project.title}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                        <Badge className='flex gap-2 font-bold bg-foreground/50 hover:bg-foreground/70 text-secondary'>{project.teamType === "Team" ? <Users className="h-6 w-6" /> : <User className="h-6 w-6" />}{project.teamType}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.subtitle}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-6 flex-1">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features</h4>
                          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                            {project.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-6">
                        {project.links.live && (
                          <Button variant="default" size="sm" className="flex-1" asChild>
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Visit Project
                            </a>
                          </Button>
                        )}
                        {project.links.github && (
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}