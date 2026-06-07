'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'experience', label: 'Experience' },
  { id: 'footer', label: 'End' },
]

export function ProgressIndicator() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0)

      let current = 'hero'
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          current = section.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            <a
              href={`#${section.id}`}
              aria-label={`Go to ${section.label} section`}
              className="group flex items-center gap-2"
            >
              <motion.span
                animate={{ scale: active === section.id ? 1.4 : 1 }}
                className={`block size-2 rounded-full transition-colors ${
                  active === section.id ? 'bg-primary' : 'bg-muted-foreground/40'
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
