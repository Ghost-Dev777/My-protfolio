import {Link} from 'react-router-dom'
import { ArrowLeft, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="relative">
      <section className="min-h-screen px-6 pb-24 pt-32 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            to="/"
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
                <Link
                  to='https://mail.google.com/mail/?view=cm&fs=1&to=ahknfirouzeh8024m@gmail.com'
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4" /> ahknfirouzeh8024m@gmail.com
                </Link>
                <Link
                  to='https://linkedin.com/in/ashkan-firouzeh'
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <LinkedinIcon className="size-4" /> LinkedIn
                </Link>
                <Link
                  to='https://github.com/Ghost-Dev777'
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon className="size-4" /> GitHub
                </Link>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
