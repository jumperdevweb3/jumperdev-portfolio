import { Badge } from '@/components/ui/badge';
import { User, Users } from 'lucide-react';
import Image from "next/image";

export const ProjectImage = ({ project }: { project: IProject }) => {
  const ProjectIcon = project.icon;
  const UserIcon = project.teamType === "Team" ? <Users className="h-6 w-6" /> : <User className="h-6 w-6" />

  return (
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
        <Badge className='flex gap-2 font-bold'>
          <ProjectIcon className="h-6 w-6" />
          {project.title}
        </Badge>
      </div>
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <Badge className='flex gap-2 font-bold bg-foreground/50 hover:bg-foreground/70 text-secondary'>
          {UserIcon}
          {project.teamType}
        </Badge>
      </div>
    </div>
  );
};