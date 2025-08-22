"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BackgroundRippleEffect />
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        {/* Creative Headline */}
        <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-7xl dark:text-neutral-100">
          I Code. I Create.
          <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            I Craft the Web.
          </span>
        </h1>

        {/* Specific Role */}
        <p className="mt-8 text-lg font-medium text-neutral-700 md:text-xl dark:text-neutral-300">
          Full-Stack Developer & Problem Solver
        </p>

        {/* Tech Stack Teaser */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 md:text-lg dark:text-neutral-400">
          Specializing in the React/Next.js ecosystem and powerful backend
          solutions.
        </p>

        {/* Strong, single CTA */}
        <div className="mt-10">
          <a
            href="#projects"
            className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
          >
            See My Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
