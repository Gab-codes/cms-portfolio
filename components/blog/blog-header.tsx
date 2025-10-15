"use client";

import { motion } from "framer-motion";

export function BlogHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-foreground md:text-5xl mb-4"
      >
        Blog & Insights
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground"
      >
        Thoughts, tutorials, and insights about web development, software
        engineering, and the latest in tech.
      </motion.p>
    </div>
  );
}
