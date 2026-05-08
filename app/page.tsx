import TechGlobe  from "@/components/TechGlobe";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-zinc-900 dark:text-white">Satya</a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">About</a>
            <a href="#projects" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Projects</a>
            <a href="#skills" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Skills</a>
            <a href="#contact" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600">Satya</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-8">
            Full-Stack Developer & Graphic design
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg hover:border-zinc-900 dark:hover:border-white transition font-medium">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                I'm a passionate full-stack developer with experience in building modern web applications.
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                With a strong foundation in both frontend and backend technologies, I create seamless
                user experiences backed by robust server-side architecture.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                or sharing knowledge with the developer community.
              </p>
            </div>
<div className="bg-zinc-200 dark:bg-zinc-700 rounded-2xl flex items-center justify-center overflow-hidden">
  <Image
    src="https://cdn.discordapp.com/attachments/1036966714694438954/1502196598959116379/Gemini_Generated_Image_.png?ex=69fed51a&is=69fd839a&hm=7f3c47da2dfef37dbab17f7a62b752d30ea40f70853b98334ca9095fd4cafed8&"
    alt="Discord Image"
    width={800}
    height={800}
    loading="eager"
    className="object-cover w-full h-full"
  />
</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with cart, checkout, and payment integration.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"]
              },
              {
                title: "Task Management App",
                description: "Real-time collaborative task manager with drag-and-drop functionality.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"]
              },
              {
                title: "AI Content Generator",
                description: "AI-powered content generation tool with multiple templates and exports.",
                tech: ["Next.js", "OpenAI API", "Tailwind", "Prisma"]
              }
            ].map((project, i) => (
              <div key={i} className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition border border-zinc-200 dark:border-zinc-700">
                <div className="bg-zinc-200 dark:bg-zinc-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-zinc-500 dark:text-zinc-400">Project Preview</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Skills & Technologies</h2>
        <TechGlobe/>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">Let's Work Together</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:satya@example.com" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              satya@example.com
            </a>
            <a href="https://github.com/Satyapalk" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg hover:border-zinc-900 dark:hover:border-white transition font-medium">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-700">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Satya. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
