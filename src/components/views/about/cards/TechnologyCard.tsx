import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export function TechnologyCard({ tech }: { tech: ITechnology }) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return <motion.div
    key={tech.name}
    variants={itemVariants}
    whileHover={{ y: -5 }}
  >
    <Card className="p-6 h-full hover:shadow-lg transition-all backdrop-blur-sm bg-background/50">
      <div className="flex items-center gap-3 mb-4">
        <tech.icon className="h-6 w-6 text-primary" />
        <h3 className="font-semibold text-lg">{tech.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-sm"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  </motion.div>
}