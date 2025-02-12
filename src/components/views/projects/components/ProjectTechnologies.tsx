import { Badge } from '@/components/ui/badge';

export const ProjectTechnologies = ({ technologies }: { technologies: IProject["tech"] }) => (
  <div>
    <h4 className="font-semibold mb-2">Technologies</h4>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge key={tech} variant="secondary">{tech}</Badge>
      ))}
    </div>
  </div>
);