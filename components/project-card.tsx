import { projects } from "@/constant";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <CardContainer key={project.title} className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt={project.title}
          />
        </CardItem>
        <CardItem translateZ="50" className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent hover:text-black"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
