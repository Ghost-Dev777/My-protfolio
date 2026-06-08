// import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon,gmailLink } from './brand-icons'

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-border px-6 py-16 md:px-16 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-bold tracking-tight">
            Ashkan Firouzeh
          </span>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Front-End / Full-Stack Developer. Open to new projects and
            collaborations.
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Footer">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Pages
          </span>
          <a
            href="/"
            className="text-sm text-foreground transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="/contact"
            className="text-sm text-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
          <a
            href="/#works"
            className="text-sm text-foreground transition-colors hover:text-primary"
          >
            Works
          </a>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Connect
          </span>
          <a
            href='https://linkedin.com/in/ashkan-firouzeh'
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="size-4" /> LinkedIn
          </a>
          <a
            href='https://github.com/Ghost-Dev777'
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="size-4" /> GitHub
          </a>
          <a
            href={gmailLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" /> Email
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-5xl border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ashkan Firouzeh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
