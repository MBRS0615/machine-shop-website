import {
  Cog,
  RotateCw,
  Wrench,
  Flame,
  Scissors,
  Boxes,
  Component,
  Hammer,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: Cog,
    title: 'CNC Milling',
    description: '3, 4, and 5-axis milling for complex geometries and tight-tolerance features.',
  },
  {
    icon: RotateCw,
    title: 'CNC Turning',
    description: 'Live-tooling lathes for precision round parts, shafts, and threaded components.',
  },
  {
    icon: Wrench,
    title: 'Manual Machining',
    description: 'Skilled hands for one-offs, rework, and fast-turn secondary operations.',
  },
  {
    icon: Flame,
    title: 'Welding & Fabrication',
    description: 'TIG, MIG, and structural fabrication of assemblies, frames, and enclosures.',
  },
  {
    icon: Scissors,
    title: 'Metal Cutting',
    description: 'Waterjet, laser, and saw cutting across steel, aluminum, and exotic alloys.',
  },
  {
    icon: Boxes,
    title: 'Prototype Manufacturing',
    description: 'Rapid iteration from CAD to first article with engineering feedback.',
  },
  {
    icon: Component,
    title: 'Custom Parts',
    description: 'Made-to-print components produced to spec in prototype and volume runs.',
  },
  {
    icon: Hammer,
    title: 'Machine Repair',
    description: 'Reverse engineering and remanufacture of legacy and obsolete parts.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-grid relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Capabilities
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              A complete machining &amp; fabrication shop
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Everything you need to move from concept to finished component, delivered with
              precision and accountability at every step.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 80}>
              <article className="group h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
