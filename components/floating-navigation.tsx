"use client";
import Url from "@/lib/url";
import { FloatingDock } from "./ui/floating-dock";
import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";

const navItems = [
  {
    title: "Home",
    icon: (
      <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: `${Url}/#`,
  },
  {
    title: "About",
    icon: (
      <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: `${Url}/#about`,
  },
  {
    title: "Experience",
    icon: (
      <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: `${Url}/#experience`,
  },
  {
    title: "Projects",
    icon: (
      <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: `${Url}/#projects`,
  },
  {
    title: "Contact",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: `${Url}/#contact`,
  },
];

export function FloatingNavigation() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={navItems}
        desktopClassName="bg-card backdrop-blur-sm border border-foreground/10 dark:border-foreground/15"
      />
    </div>
  );
}
