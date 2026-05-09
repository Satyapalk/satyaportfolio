import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <Nav />
      <Hero />
      <About />
        <Journey />
        <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
