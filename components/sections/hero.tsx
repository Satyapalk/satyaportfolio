import { Spotlight } from "@/components/ui/spotlight-new";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6 text-center">
      <Spotlight />
      <div className="relative z-10 max-w-4xl mx-auto">
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
  );
}
