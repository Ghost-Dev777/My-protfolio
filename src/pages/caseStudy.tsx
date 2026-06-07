import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SiteNav } from '@/components/site-nav'
import { Footer } from '@/components/footer'
import { projects } from '@/lib/portfolio-data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Case Study — Ashkan Firouzeh' }
  return {
    title: `${project.title} — Ashkan Firouzeh`,
    description: project.description,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main className="relative">
      <SiteNav />
      <article className="px-6 pb-24 pt-32 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-4xl">
          <Link
            href="/#works"
            className="mb-10 inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Back to works
          </Link>

          <span className="block font-mono text-sm text-primary">
            {project.year}
          </span>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium transition-all hover:scale-105 hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" /> View source
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-border">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={`${project.title} main screenshot`}
              width={1200}
              height={800}
              className="w-full object-cover"
              priority
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
              {project.longDescription}
            </p>
          </div>

          {project.screenshots.length > 0 && (
            <div className="mt-12 grid gap-6">
              {project.screenshots.map((shot, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-border"
                >
                  <Image
                    src={shot || '/placeholder.svg'}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={1200}
                    height={800}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* other projects */}
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="mb-6 text-xl font-bold tracking-tight">
              More work
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/work/${other.slug}`}
                  className="group flex flex-col gap-3"
                >
                  <div className="overflow-hidden rounded-xl border border-border">
                    <Image
                      src={other.image || '/placeholder.svg'}
                      alt={`${other.title} preview`}
                      width={600}
                      height={450}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-medium transition-colors group-hover:text-primary">
                    {other.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
