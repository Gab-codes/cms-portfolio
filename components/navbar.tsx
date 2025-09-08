"use client";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home">
      {/* Desktop */}
      <div
        className={cn(
          "hidden lg:flex justify-between items-center w-full z-50 p-4 transition-colors duration-300",
          isScrolled
            ? "fixed w-full top-0 backdrop-blur-md shadow-sm"
            : "relative"
        )}
      >
        <span className="text-xl">Gabriel</span>
        <div className="flex items-center gap-4">
          <span>Download my Resume</span>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "flex lg:hidden justify-between items-center fixed top-0  backdrop-blur-md md:-mx-2 py-2 px-6 md:px-8 w-full z-50 transition-colors duration-300",
          isScrolled
            ? "shadow-sm dark:shadow-white/15 mt-0"
            : "shadow-none pt-6"
        )}
      >
        <span className="text-xl">Gabriel</span>

        <div className="flex gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="size-8" />
            </SheetTrigger>
            <SheetContent className="dark:bg-card dark:border-white/20 dark:border-1 w-1/2 h-55 sm:h-[35dvh] rounded-lg mt-4 mr-4">
              <SheetHeader>
                <SheetTitle className="sr-only">Nav sidebar</SheetTitle>
              </SheetHeader>
              <div className="flex w-1/2 flex-col px-4 gap-4 text-base font-medium">
                <Link href="#home" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="#about" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link href="#projects" onClick={() => setOpen(false)}>
                  Projects
                </Link>
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
