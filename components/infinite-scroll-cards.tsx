"use client";

import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Next.js", color: "from-blue-500 to-cyan-500" },
  { id: 2, title: "React", color: "from-cyan-500 to-blue-500" },
  { id: 3, title: "TypeScript", color: "from-blue-600 to-blue-400" },
  { id: 4, title: "Tailwind", color: "from-teal-500 to-cyan-500" },
  { id: 5, title: "Node.js", color: "from-green-500 to-emerald-500" },
  { id: 6, title: "PostgreSQL", color: "from-blue-700 to-indigo-500" },
  { id: 7, title: "MongoDB", color: "from-green-600 to-green-400" },
  { id: 8, title: "Docker", color: "from-blue-500 to-sky-500" },
];

export function InfiniteScrollCards() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-4 animate-scroll">
        {[...cards, ...cards].map((card, i) => (
          <motion.div
            key={`${card.id}-${i}`}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r ${card.color} text-white font-semibold shadow-lg`}
          >
            {card.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
}