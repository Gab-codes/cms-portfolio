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
import { buttonVariants } from "./ui/button";
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
    <div id="home" className="sticky top-0 z-50">
      {/* Desktop */}
      <div
        className={cn(
          "hidden md:flex justify-between items-center w-full max-w-[110rem] p-4 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-md shadow-sm bg-background/80"
            : "bg-transparent"
        )}
      >
        <span className="text-2xl text-muted-foreground hover:text-foreground/90 cursor-context-menu font-semibold tracking-tighter">
          Gabriel
        </span>
        <div className="flex items-center gap-4">
          <a
            href="/cv.pdf"
            target="_blank"
            className={cn(
              buttonVariants({ size: "default" }),
              "cursor-pointer bg-gradient-to-r from-primary/90 via-primary/70 to-primary/80 text-white"
            )}
          >
            Download my Resume
          </a>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "flex md:hidden justify-between items-center py-2 px-6 md:px-8 w-full transition-all duration-300",
          isScrolled
            ? "backdrop-blur-md shadow-sm dark:shadow-white/15 bg-background/80"
            : "bg-transparent"
        )}
      >
        <span className="text-xl">Gabriel</span>

        <div className="flex gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="size-8" />
            </SheetTrigger>
            <SheetContent className="dark:bg-card dark:border-white/20 dark:border-1 w-1/2 h-70 rounded-lg mt-4 mr-4">
              <SheetHeader>
                <SheetTitle className="sr-only">Nav sidebar</SheetTitle>
              </SheetHeader>
              <div className="flex w-full flex-col px-4 gap-4 text-base font-medium">
                <Link href="/#" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/#about" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link href="/#projects" onClick={() => setOpen(false)}>
                  Projects
                </Link>
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "cursor-pointer w-full mt-4 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/80 text-white"
                  )}
                >
                  Download my Resume
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
