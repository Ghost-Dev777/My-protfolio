import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const text =
  "I’m a Front-End Developer focused on building modern, scalable, and product-oriented web interfaces with React.js and its ecosystem. Across different projects, I’ve worked on interfaces where visual quality, usability, maintainability, and product logic all matter.Alongside this specialization, my professional path is actively expanding toward Full-Stack Development — a direction that has already moved into practical execution through projects built with MongoDB and Express.js,I’m interested in growing at the intersection of software engineering, AI/ML, and large language models, and contributing to products that are both technically strong and genuinely useful.";

function Char({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = Math.min(start + 1.5 / total, 1);

  const opacity = useTransform(progress, [start, end], [0.01, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block whitespace-pre-wrap"
    >
      {char}
    </motion.span>
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const chars = text.split("");

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-10 lg:px-24"
    >
      <div className="mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-5 font-mono text-sm uppercase tracking-widest text-primary"
        >
          About Me
        </motion.p>

        <p className="text-xl font-medium leading-relaxed tracking-tight sm:text-2xl lg:text-4xl">
          {chars.map((char, i) => (
            <Char
              key={i}
              char={char}
              progress={progress}
              index={i}
              total={chars.length}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
