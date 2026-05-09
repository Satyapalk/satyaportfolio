export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto text-center text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Satya. All rights reserved.</p>
      </div>
    </footer>
  );
}
