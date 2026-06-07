import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SiteNav } from '@/components/site-nav'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { gmailLink, social } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Contact — Ashkan Firouzeh',
  description: 'Get in touch with Ashkan Firouzeh for projects and collaborations.',
}

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteNav />
      <section className="min-h-screen px-6 pb-24 pt-32 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Back home
          </Link>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="font-mono text-sm uppercase tracking-widest text-primary">
                Contact
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build something together.
              </h1>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Have a project in mind or just want to say hi? Fill out the form
                and I&apos;ll respond as soon as I can.
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4" /> {social.email}
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <LinkedinIcon className="size-4" /> LinkedIn
                </a>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
