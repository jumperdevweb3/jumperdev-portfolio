import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from "framer-motion";
import { ProjectFeatures } from "./ProjectFeatures";
import { ProjectImage } from "./ProjectImage";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectTechnologies } from "./ProjectTechnologies";

interface IProjectCardProps {
  project: IProject;
  index: number;
  inView: boolean
}
export const ProjectCard = ({ project, index, inView }: IProjectCardProps) => (
  <motion.div
    key={project.title}
    initial={{ y: 50, opacity: 0 }}
    animate={inView ? { y: 0, opacity: 1 } : {}}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
  >
    <Card className="overflow-hidden h-full hover:shadow-custom flex flex-col">
      <ProjectImage project={project} />
      <CardHeader>
        <CardTitle className="text-xl">{project.subtitle}</CardTitle>
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-6 flex-1">
          <ProjectFeatures features={project.features} />
          <ProjectTechnologies technologies={project.tech} />
        </div>
        <ProjectLinks links={project.links} />
      </CardContent>
    </Card>
  </motion.div>
);