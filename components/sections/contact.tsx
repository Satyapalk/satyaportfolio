export function Contact() {
  return (
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
  );
}
