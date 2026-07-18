import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Project {
  title: string
  category: string
  description: string
  image: string
  alt: string
  className: string
}

const PROJECTS: Project[] = [
  {
    title: 'Titanium Turbine Housing',
    category: 'Aerospace',
    description: '5-axis machined Ti-6Al-4V housing held to ±0.0005" true position.',
    image: '/images/project-aerospace.png',
    alt: 'Precision-machined titanium aerospace turbine component',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Performance Engine Set',
    category: 'Automotive',
    description: 'Billet aluminum components for a low-volume motorsport program.',
    image: '/images/project-auto.png',
    alt: 'Machined aluminum automotive engine components',
    className: '',
  },
  {
    title: 'Stainless Prototype Kit',
    category: 'Prototype',
    description: 'Rapid first-article parts delivered in five business days.',
    image: '/images/project-prototype.png',
    alt: 'Custom machined stainless steel prototype parts',
    className: '',
  },
  {
    title: 'Welded Frame Assembly',
    category: 'Fabrication',
    description: 'TIG-welded stainless assembly for industrial process equipment.',
    image: '/images/project-fabrication.png',
    alt: 'Fabricated stainless steel welded industrial assembly',
    className: 'lg:col-span-2',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Featured projects
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Work that speaks in microns
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(220px,1fr)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 4) * 80} className={project.className}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
                    {project.category}
                  </span>
                  <h3 className="mt-3 flex items-center gap-1.5 text-lg font-semibold text-foreground">
                    {project.title}
                    <ArrowUpRight className="size-4 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
