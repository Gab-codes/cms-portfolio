"use client";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BackgroundRippleEffect />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block rounded-full bg-primary/20 px-6 py-3 text-sm font-semibold text-primary shadow-lg ring-1 ring-primary/30 backdrop-blur-sm dark:bg-primary/10 dark:ring-primary/50 dark:shadow-primary/20">
            ✨ Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:via-primary/90 dark:to-primary/60">
            Toru Gabriel
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-xl font-medium text-muted-foreground md:text-2xl"
        >
          Full-Stack Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Based in Lagos, Nigeria. Specializing in the React/Next.js ecosystem
          and powerful backend solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 dark:shadow-primary/20 dark:hover:shadow-primary/40"
            )}
          >
            <span className="relative z-10">View My Work</span>
            <ArrowDown className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="mailto:toru@example.com"
              className="rounded-full p-3 text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20 dark:hover:bg-primary/20"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/torugabriel"
              className="rounded-full p-3 text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20 dark:hover:bg-primary/20"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/torugabriel"
              className="rounded-full p-3 text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20 dark:hover:bg-primary/20"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
