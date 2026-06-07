import { motion } from 'motion/react'
import { skills } from '@/lib/portfolio-data'

const lines = [
  'I build end-to-end web applications,',
  'from polished, accessible interfaces',
  'to robust APIs and data layers.',
  'I care about performance, detail,',
  'and shipping experiences people enjoy.',
]

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 font-mono text-sm uppercase tracking-widest text-primary"
        >
          About Me
        </motion.p>

        <div className="space-y-2">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0.12, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-30% 0px -30% 0px' }}
              transition={{ duration: 0.5 }}
              className="text-pretty text-2xl font-medium leading-snug tracking-tight sm:text-4xl lg:text-5xl"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
