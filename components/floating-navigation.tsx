"use client";
import { FloatingDock } from "./ui/floating-dock";
import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";

const navItems = [
  {
    title: "Home",
    icon: (
      <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "About",
    icon: (
      <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Experience",
    icon: (
      <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  {
    title: "Projects",
    icon: (
      <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Contact",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];

export function FloatingNavigation() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={navItems}
        desktopClassName="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800"
      />
    </div>
  );
}
