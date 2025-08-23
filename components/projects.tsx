"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { GenericHoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/torugabriel/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image: "/task-management-interface.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/torugabriel/taskmanager",
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "Real-time weather data visualization with interactive charts, forecasting, and location-based insights.",
    image: "/weather-dashboard-analytics.png",
    technologies: ["React", "D3.js", "Express.js", "Weather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/torugabriel/weather-dashboard",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Some of my recent work that I&apos;m proud of
          </p>
        </motion.div>

        <GenericHoverEffect
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          uniqueId="projects"
        >
          {projects.map((project) => (
            <div key={project.title} className="p-6">
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  width={500}
                  height={500}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
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
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
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
              </div>
            </div>
          ))}
        </GenericHoverEffect>
      </div>
    </section>
  );
}
