import {
  Car,
  Plane,
  Factory,
  Building2,
  Anchor,
  Sprout,
  Container,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Industry {
  icon: LucideIcon
  name: string
}

const INDUSTRIES: Industry[] = [
  { icon: Car, name: 'Automotive' },
  { icon: Plane, name: 'Aerospace' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Building2, name: 'Construction' },
  { icon: Anchor, name: 'Marine' },
  { icon: Sprout, name: 'Agricultural' },
  { icon: Container, name: 'Industrial Equipment' },
]

export function Industries() {
  return (
    <section id="industries" className="bg-grid relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Industries served
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted across demanding sectors
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We meet the specifications and certifications required by the industries that depend
              on precision the most.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 4) * 70}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card/60 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                <span className="flex size-14 items-center justify-center rounded-full border border-border bg-secondary text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <industry.icon className="size-7" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold">{industry.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
