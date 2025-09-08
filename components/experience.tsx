"use client";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { Timeline } from "./ui/timeline";
import { experiences } from "@/constant";

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
      <p className="text-muted-foreground mb-4 lg:pr-40 text-sm leading-relaxed">
        {exp.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
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
