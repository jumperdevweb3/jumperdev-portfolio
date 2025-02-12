import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { useInView } from "react-intersection-observer";
import { Badge } from '../../../ui/badge';

interface ExperienceCardProps {
  experience: IExperience;
  isLeft: boolean;
}

export function ExperienceCard({
  experience,
  isLeft,
}: ExperienceCardProps) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  return (
    <motion.div
      ref={cardRef}
      key={experience.title + experience.period}
      initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
      animate={cardInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative md:w-1/2 ${isLeft ? "md:pr-12 md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"}`}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className={`${isLeft ? "text-left" : "text-left"}`}>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <Badge variant="outline">{experience.period}</Badge>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-4 w-4 text-primary" />
            <div>
              <CardTitle className="text-xl">{experience.title}</CardTitle>
              <CardDescription className="text-base">{experience.company}</CardDescription>
            </div>
          </div>
          <p className="text-muted-foreground mb-3">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.tech.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <ul className="space-y-1.5 text-sm text-muted-foreground ml-6 list-disc">
            {experience.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </CardHeader>
      </Card>
    </motion.div>
  );
};