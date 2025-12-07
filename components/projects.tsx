"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constant";
import Link from "next/link";
import ProjectCard from "./project-card";

export function Projects() {
  // Display only the first 3 projects
  const displayedProjects = projects.slice(0, 3);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="group">
              <Link href="/all-projects" className="text-white font-semibold">
                <span>View All Projects</span>
                <ArrowUpRight className="size-4.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition 300 ease-in-out" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
