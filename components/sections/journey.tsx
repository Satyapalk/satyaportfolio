import { AnimatedTimeline } from "@/components/animata/progress/animatedtimeline";

export function Journey() {
  return (
    <section id="journey" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">My Journey</h2>
        <AnimatedTimeline
          events={[
            { id: "1", title: "Started Coding", description: "Began my programming journey with Python and web fundamentals", date: "2020" },
            { id: "2", title: "First Freelance Project", description: "Built my first paid web application for a local business", date: "2021" },
            { id: "3", title: "Full-Stack Developer", description: "Mastered React, Node.js, and modern web frameworks", date: "2022" },
            { id: "4", title: "Open Source Contributor", description: "Started contributing to open source projects and communities", date: "2023" },
            { id: "5", title: "Building Products", description: "Developing scalable web applications and exploring AI integration", date: "2024" },
          ]}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
