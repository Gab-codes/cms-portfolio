import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { NavHero } from "@/components/NavHero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main>
      <NavHero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
