"use client";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { Timeline } from "./ui/timeline";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "Lagos, Nigeria",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects from concept to deployment. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "Lagos, Nigeria",
    period: "2019 - 2020",
    description:
      "Developed responsive web applications and landing pages for various clients. Optimized performance and implemented modern web standards.",
    technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"],
  },
];

const timelineData = experiences.map((exp) => ({
  title: exp.period,
  content: (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium text-primary">{exp.company}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {exp.period}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {exp.location}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {exp.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  ),
}));

export function Experience() {
  return (
    <section id="experience" className="bg-muted/30 max-sm:mx-2">
      <Timeline data={timelineData} />
    </section>
  );
}
