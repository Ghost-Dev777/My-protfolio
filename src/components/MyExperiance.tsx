import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { experiences } from '../data/portfolio-data'

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rowRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [maxTranslate, setMaxTranslate] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setProgress(total > 0 ? scrolled / total : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const calcMax = () => {
      const row = rowRef.current
      if (!row) return
      const overflow = row.scrollWidth - (row.parentElement?.clientWidth ?? 0)
      setMaxTranslate(Math.max(overflow, 0))
    }
    calcMax()
    window.addEventListener('resize', calcMax)
    return () => window.removeEventListener('resize', calcMax)
  }, [])

  return (
    <section
      id="experience"
      ref={containerRef}
      style={{ height: `${experiences.length * 80}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-12 font-mono text-sm uppercase tracking-widest text-primary">
            My Experience
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 right-0 top-6 h-px bg-border" />
            <div
              className="absolute left-0 top-6 h-px bg-primary transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />

            <motion.div
              ref={rowRef}
              className="flex gap-6 md:gap-10"
              animate={{ x: -(progress * maxTranslate) }}
              transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
            >
              {experiences.map((exp, i) => {
                const visible = progress >= (i / experiences.length) * 0.6
                return (
                  <motion.div
                    key={exp.company}
                    animate={{ opacity: visible ? 1 : 0.3, x: visible ? 0 : 30 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-64 shrink-0 pt-12 sm:w-72 md:w-80"
                  >
                    <span className="absolute left-0 top-[18px] size-3 rounded-full border-2 border-primary bg-background" />
                    <span className="font-mono text-sm text-primary">{exp.duration}</span>
                    <h3 className="mt-2 text-xl font-bold tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <p className="pt-4 text-xs text-muted-foreground">Scroll to move through the timeline</p>
        </div>
      </div>
    </section>
  )
}
