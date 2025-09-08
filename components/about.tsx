"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Zap,
  User,
} from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
  "Docker",
  "Express.js",
  "Tanstack Query",
  "Figma",
  "Zod",
  "Javascript",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "Prisma",
  "React Hook Form",
  "Shadcn UI",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "CI/CD Pipeline",
  "Vercel",
  "RESTful API",
  "Auth.js",
  "Firebase",
];

const bentoItems = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    ),
    icon: <Code2 className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Backend Architecture",
    description:
      "Designing scalable server-side solutions with Node.js, Python, and cloud technologies.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    ),
    icon: <Database className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "About Me",
    description:
      "Full-stack software engineer based in Lagos, Nigeria, passionate about creating digital experiences that matter.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    ),
    icon: <User className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Web Applications",
    description:
      "Creating full-stack web applications with modern frameworks and best practices.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    ),
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mobile-First Design",
    description:
      "Ensuring seamless experiences across all devices with responsive design principles.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    ),
    icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications with AWS, Docker, and modern DevOps practices.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    ),
    icon: <Cloud className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, scalability, and exceptional user experience.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    ),
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Skills & Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            What I bring to the table as a full-stack developer
          </p>
        </motion.div>

        <BentoGrid className="max-w-4xl mx-auto">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
