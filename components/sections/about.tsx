import Image from "next/image";

export function About() {
  return (
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
  );
}
