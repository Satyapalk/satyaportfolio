export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-zinc-900 dark:text-white">Satya</a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">About</a>
          <a href="#journey" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Journey</a>
          <a href="#projects" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Projects</a>
          <a href="#skills" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Skills</a>
          <a href="#contact" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
