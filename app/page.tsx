import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { FloatingNavigation } from "@/components/floating-navigation";
import { Footer } from "@/components/footer";
import { NavHero } from "@/components/NavHero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <NavHero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <FloatingNavigation />
    </main>
  );
}
