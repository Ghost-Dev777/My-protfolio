import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "motion/react";

type Skill = { title: string; imgURL: string };

function useCardWidth() {
  const [w, setW] = useState(170);
  useEffect(() => {
    const update = () =>
      setW(
        window.innerWidth < 640 ? 140 : window.innerWidth < 1024 ? 150 : 170,
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return w;
}

export function Skills({ skills }: { skills: Skill[] }) {
  const cardWidth = useCardWidth();
  const GAP = 10;
  const STEP = cardWidth + GAP;
  const total = skills.length;
  const looped = [...skills, ...skills, ...skills];
  const loopWidth = total * STEP;

  const x = useMotionValue(0);
  const speed = useRef(0);
  const autoPlay = useRef(true);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    x.set(0);
    speed.current = -(loopWidth / (total * 2.2 * 40));
  }, [loopWidth, total, cardWidth]);

  useAnimationFrame(() => {
    if (!autoPlay.current) return;
    let next = x.get() + speed.current;
    if (next <= -loopWidth) next += loopWidth;
    if (next > 0) next -= loopWidth;
    x.set(next);
  });

  const pauseAndResume = useCallback(() => {
    autoPlay.current = false;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      autoPlay.current = true;
    }, 1000);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden m-auto w-[90%] px-6 lg:w-3/5 lg:px-0 py-10"
    >
      <p className="pb-6 text-center font-mono text-2xl uppercase tracking-widest text-primary">
        My Skills
      </p>
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        style={{ perspective: "900px" }}
      >
        <motion.div
          style={{
            x,
            display: "flex",
            gap: GAP,
            willChange: "transform",
            cursor: "grab",
          }}
          drag="x"
          dragConstraints={{ left: -loopWidth * 2, right: loopWidth }}
          dragElastic={0}
          onDragStart={pauseAndResume}
          onDrag={pauseAndResume}
        >
          {looped.map((skill, i) => (
            <SkillCard
              key={i}
              skill={skill}
              cardIndex={i}
              x={x}
              cardWidth={cardWidth}
              step={STEP}
              containerRef={containerRef}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  cardIndex,
  x,
  containerRef,
  cardWidth,
  step,
}: {
  skill: Skill;
  cardIndex: number;
  x: ReturnType<typeof useMotionValue<number>>;
  containerRef: React.RefObject<HTMLDivElement>;
  cardWidth: number;
  step: number;
}) {
  const cardCenter = cardIndex * step + cardWidth / 2;

  const offset = useTransform(x, (xVal) => {
    const containerWidth = containerRef.current?.offsetWidth ?? 800;
    return (cardCenter + xVal - containerWidth / 2) / step;
  });

  const translateX = useTransform(
    offset,
    [-4, -2, 0, 2, 4],
    [220, 120, 0, -120, -220],
  );
  const scale = useTransform(
    offset,
    [-2, -0.7, 0, 0.7, 2],
    [0.75, 0.85, 1, 0.85, 0.75],
  );
  const opacity = useTransform(
    offset,
    [-3, -1, 0, 1, 3],
    [0.2, 0.7, 1,0.7, 0.2],
  );
  const zIndex = useTransform(offset, (o) => Math.round(10 - Math.abs(o) * 2));

  return (
    <motion.div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-2xl border bg-card"
      style={{
        width: cardWidth,
        height: cardWidth,
        scale,
        translateX,
        opacity,
        zIndex
      }}
    >
      <img
        src={skill.imgURL}
        alt={skill.title}
        className="h-15 w-15 object-contain"
        loading="lazy"
      />
      <span className="text-center text-sm font-medium text-white/80">
        {skill.title}
      </span>
    </motion.div>
  );
}
