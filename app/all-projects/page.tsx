"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { projects } from "@/constant";
import Link from "next/link";
import { useState, useMemo } from "react";
import ProjectCard from "@/components/project-card";

export default function AllProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string>("all");

  // Get all unique technologies for filter
  //   const allTechnologies = useMemo(() => {
  //     const techs = new Set<string>();
  //     projects.forEach((project) => {
  //       project.technologies.forEach((tech) => techs.add(tech));
  //     });
  //     return ["all", ...Array.from(techs)].sort();
  //   }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedTech === "all") return projects;
    return projects.filter((project) =>
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  return (
    <div className="min-h-screen bg-background pt-10 pb-10 md:pb-25 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" asChild className="gap-2 hidden md:flex">
              <Link href="/" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              All Projects
            </h1>
            <div className="w-20"></div> {/* Spacer for alignment */}
          </div>
          <p className="text-lg text-muted-foreground md:max-w-2xl mx-2 md:mx-auto">
            Explore my complete portfolio of projects, experiments, and creative
            work
          </p>
        </motion.div>

        {/* Technology Filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground">
              Filter by Technology
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                className="cursor-pointer px-3 py-1 text-sm capitalize hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div> */}

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No projects found with the selected technology.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSelectedTech("all")}
            >
              Show All Projects
            </Button>
          </motion.div>
        )}

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 hidden"
        >
          <p className="text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </motion.div>
      </div>
    </div>
  );
}
