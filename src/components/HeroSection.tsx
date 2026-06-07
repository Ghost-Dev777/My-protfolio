import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { gmailLink, social } from '@/lib/portfolio-data'

const name = "I'm Ashkan Firouzeh"
const subtitle =
  'A Front-End / Full-Stack Developer crafting fast, accessible web experiences.'

function TypingText({ text }: { text: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= text.length) return
    const timeout = setTimeout(() => setCount((c) => c + 1), 50)
    return () => clearTimeout(timeout)
  }, [count, text.length])

  return (
    <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
      {text.slice(0, count)}
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-primary align-middle" />
    </p>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="animated-gradient relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <h1 className="flex flex-wrap text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.04,
                type: 'spring',
                stiffness: 300,
                damping: 14,
              }}
              className={char === ' ' ? 'w-3 sm:w-5' : 'inline-block'}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: name.length * 0.04 + 0.2 }}
        >
          <TypingText text={subtitle} />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto flex w-full max-w-5xl items-end justify-between px-6 md:px-16 lg:px-24">
        <div className="pointer-events-auto flex items-center gap-5">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
            <span className="transition-transform group-hover:scale-105">
              LinkedIn
            </span>
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="size-4" />
            <span className="transition-transform group-hover:scale-105">
              GitHub
            </span>
          </a>
        </div>
        <a
          href={gmailLink}
          target="_blank"
          rel="noreferrer"
          className="group pointer-events-auto flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="size-4" />
          <span className="transition-transform group-hover:scale-105">
            Email me
          </span>
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary md:bottom-8"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="block"
        >
          <ArrowDown className="size-6" />
        </motion.span>
      </a>
    </section>
  )
}
