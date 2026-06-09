import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useScrollToSection } from "../useScrolltoSection.ts";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "footer", label: "End" },
];

export function ProgressIndicator() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);
  const scrollTo = useScrollToSection();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0);

      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          current = section.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:flex md:flex-col md:items-center md:gap-4">
      <div className="relative h-48 w-px bg-border">
        <div
          className="absolute left-0 top-0 w-px bg-primary transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <ul className="pointer-events-auto flex flex-col items-center gap-3">
        {sections.map((section) => (
          <li key={section.id}>
            <motion.span
              aria-label={`Go to ${section.label} section`}
              className="group relative flex items-center gap-2 cursor-pointer"
              onHoverStart={() => setHovered(section.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={()=>scrollTo(section.id)}
            >
              <motion.span
                animate={{
                  opacity: hovered === section.id ? 1 : 0,
                  x: hovered === section.id ? 0 : 8,
                }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow"
              >
                {section.label}
              </motion.span>
              <motion.span
                animate={{ scale: active === section.id ? 1.4 : 1 }}
                className={`block size-2 rounded-full transition-colors ${
                  active === section.id
                    ? "bg-primary"
                    : "bg-muted-foreground/40"
                }`}
              />
            </motion.span>
          </li>
        ))}
      </ul>
    </div>
  );
}
