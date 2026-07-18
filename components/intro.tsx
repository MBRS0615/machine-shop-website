import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const POINTS = [
  'In-house engineering and DFM review on every project',
  'Full material traceability and inspection reporting',
  'Prototype to production under one roof',
  'Domestic sourcing with rapid lead times',
]

export function Intro() {
  return (
    <section id="about" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="glow-primary overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/shop-floor.png"
                alt="Interior of the Axis Precision Machining production floor with rows of CNC machines"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card p-5 shadow-2xl sm:block">
              <p className="font-mono text-3xl font-bold text-primary">1998</p>
              <p className="mt-1 text-xs text-muted-foreground">Founded &amp; family operated</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Who we are
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Craftsmanship and modern manufacturing, working in perfect tolerance.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              For more than two decades, Axis Precision Machining has partnered with engineers and
              OEMs to turn demanding drawings into flawless parts. We combine seasoned machinists
              with automated 5-axis cells and rigorous quality control to deliver components that
              perform exactly as designed, run after run.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
