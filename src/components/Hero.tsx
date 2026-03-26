import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/da5fa67a-5413-4b47-9421-835a645c4d31/files/2520a19c-75f9-4ba4-a97c-959a34f86cf8.jpg"
          alt="Поле мини-футбол"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Самара · с 2015 года</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          САМАРСКАЯ<br/>ФУТБОЛЬНАЯ<br/>ЛИГА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Любительский футбол нового уровня. Команды, турниры, статистика — всё в одном месте.
        </p>
        <a
          href="https://vk.com/club237048823"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Вступить в лигу
        </a>
      </div>
    </div>
  );
}