"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { GenericHoverEffect } from "./ui/card-hover-effect";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
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
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Passionate about creating digital experiences that matter
          </p>
        </motion.div>

        <GenericHoverEffect
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          uniqueId="about"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I&apos;m a full-stack software engineer based in Lagos, Nigeria,
              with a passion for building scalable web applications. I
              specialize in the React/Next.js ecosystem and enjoy creating
              seamless user experiences backed by robust server-side solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h3>
            <p className="text-muted-foreground mb-4">
              My technical expertise spans across modern web development
              technologies and frameworks.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </GenericHoverEffect>
      </div>
    </section>
  );
}
