import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GithubIcon } from "./brand-icons";
import { projects } from '../data/portfolio-data';


export function MyWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const ratio = total > 0 ? scrolled / total : 0;
      const index = Math.min(
        projects.length - 1,
        Math.floor(ratio * projects.length),
      );
      setActive(index);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const project = projects[active];

  return (
    <section
      id="works"
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-5xl">
          <p className="pb-5 font-mono text-sm uppercase tracking-widest text-primary">
            My Works — {active + 1} / {projects.length}
          </p>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <a
              href={`/work/${project.slug}`}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card"
              aria-label={`View ${project.title} case study`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
            </a>

            <AnimatePresence mode="wait">
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {project.year}
                </span>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-5">
                  <a
                    href={`/work/${project.slug}`}
                    className="text-sm font-medium text-primary transition-transform hover:scale-105"
                  >
                    View case study →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <GithubIcon className="size-5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex gap-2">
            {projects.map((p, i) => (
              <span
                key={p.slug}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-primary" : "w-4 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
