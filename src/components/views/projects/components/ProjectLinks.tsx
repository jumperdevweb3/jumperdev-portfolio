import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectLinks = ({ links }: { links: IProjectLinks }) => (
  <div className="flex gap-4 mt-6">
    {links.live && (
      <Button variant="default" size="sm" className="flex-1" asChild>
        <a href={links.live} target="_blank" rel="noopener noreferrer" aria-label="Visit Project">
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Project
        </a>
      </Button>
    )}
    {links.github && (
      <Button variant="outline" size="sm" className="flex-1" asChild>
        <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="View Code">
          <Github className="mr-2 h-4 w-4" />
          View Code
        </a>
      </Button>
    )}
  </div>
);