import { cn } from "@/lib/utils";
import {
  Code2,
  Database,
  Globe,
  MonitorSmartphone,
  Plus,
  Smartphone,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";

const frontendImages = [
  { name: "React", image: "/images/react.svg" },
  { name: "Next.js", image: "/images/nextjs.svg" },
  { name: "Expo", image: "/images/expo.svg" },
];

const backendImages = [
  { name: "Node.js", image: "/images/nodejs.svg" },
  { name: "Express.js", image: "/images/express.svg" },
];

export const bentoItems = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React Native, React, Next.js, and modern CSS frameworks.",
    header: (
      <div className="flex gap-8 items-center justify-center flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/10 to-primary/20">
        {frontendImages.map((item, i, arr) => (
          <div key={item.name} className="flex items-center gap-4">
            <div className="rounded-full p-2 bg-white/80 dark:bg-white/90">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="object-contain size-10 md:size-12"
              />
            </div>
            <span
              className={cn(
                "size-4",
                arr.length - 1 === i ? "hidden" : "block"
              )}
            >
              <Plus />
            </span>
          </div>
        ))}
      </div>
    ),
    icon: <Code2 className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Backend Architecture",
    description:
      "Designing scalable server-side solutions with Node.js and Express.js.",
    header: (
      <div className="flex gap-8 items-center justify-center flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/15  to-primary/5">
        {backendImages.map((item, i, arr) => (
          <div key={item.name} className="flex items-center gap-4">
            <div className="rounded-full p-2 bg-white/80 dark:bg-white/90">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="object-contain size-10 md:size-12"
              />
            </div>
            <span
              className={cn(
                "size-4",
                arr.length - 1 === i ? "hidden" : "block"
              )}
            >
              <Plus />
            </span>
          </div>
        ))}
      </div>
    ),
    icon: <Database className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Web Applications",
    description:
      "Creating full-stack web applications with modern frameworks and best practices.",
    header: (
      <div className="flex flex-1 max-sm:py-5 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-tr from-primary/30  to-primary/10">
        <Image
          src="/images/web.svg"
          alt="Web Application"
          width={300}
          height={300}
          className="object-contain w-full h-30 md:h-4/5"
        />
      </div>
    ),
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mobile Application",
    description: "Creating beautiful mobile applications with React Native",
    header: (
      <div className="flex flex-1 max-sm:py-5 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-tl from-primary/9  to-primary/28">
        <Image
          src="/images/phone-reels.svg"
          alt="React Native"
          width={300}
          height={300}
          className="object-contain w-full h-30 md:h-4/5"
        />
      </div>
    ),
    icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mobile-First Design",
    description:
      "Ensuring seamless experiences across all devices with responsive design principles.",
    header: (
      <div className="flex flex-1 max-sm:py-5 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-bl from-primary/30  to-primary/10">
        <Image
          src="/images/responsive.svg"
          alt="responsive website"
          width={300}
          height={300}
          className="object-contain w-full h-30 md:h-4/5"
        />
      </div>
    ),
    icon: <MonitorSmartphone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, scalability, and exceptional user experience.",
    header: (
      <div className="flex flex-1 max-md:py-5 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-t from-primary/20  to-transparent">
        <Image
          src="/images/optimize.svg"
          alt="optimized mobile phone"
          width={300}
          height={300}
          className="object-contain w-full h-30 md:h-4/5"
        />
      </div>
    ),
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "About Me",
    description:
      "Hi there 👋, I'm Gabriel, a Full-stack software engineer passionate about creating digital experiences that matter. I am always striving to learn more, constantly improving my skills to build efficient and impactful applications. Open to working remotely across different time zones.",

    header: (
      <div className="flex flex-1 max-sm:py-5 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-t from-primary-foreground to-transparent">
        <Image
          src="/images/avatar.svg"
          alt="about me"
          width={400}
          height={400}
          className="object-contain w-full h-30 md:h-4/5"
        />
      </div>
    ),
    icon: <User className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];
