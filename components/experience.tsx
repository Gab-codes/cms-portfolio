"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { GenericHoverEffect } from "./ui/card-hover-effect";

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

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey in software development
          </p>
        </motion.div>

        <GenericHoverEffect
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          uniqueId="experience"
        >
          {experiences.map((exp) => (
            <div key={exp.title} className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {exp.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <p className="text-lg font-medium text-primary">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
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
          ))}
        </GenericHoverEffect>
      </div>
    </section>
  );
}
