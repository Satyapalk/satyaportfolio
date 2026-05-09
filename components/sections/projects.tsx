"use client";

import { motion } from "motion/react";
import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, checkout, and payment integration using Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task manager with drag-and-drop, built with Socket.io for live updates.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered tool with multiple templates and export formats using OpenAI's API.",
    tags: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 shadow-sm transition-shadow hover:shadow-lg overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 dark:bg-zinc-700 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live
                </a>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
