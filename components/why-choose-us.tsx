import { AnimatedCounter } from '@/components/animated-counter'
import { Reveal } from '@/components/reveal'

interface Stat {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  sub: string
}

const STATS: Stat[] = [
  { value: 25, suffix: '+', label: 'Years of Experience', sub: 'Precision since 1998' },
  { value: 48000, suffix: '+', label: 'Projects Completed', sub: 'Prototype to production' },
  {
    value: 0.0002,
    decimals: 4,
    prefix: '±',
    suffix: '"',
    label: 'Precision Tolerance',
    sub: 'Repeatable, verified',
  },
  { value: 99.6, decimals: 1, suffix: '%', label: 'Customer Satisfaction', sub: 'Would reorder' },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Why choose us
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Numbers that measure our commitment
            </h2>
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/70 p-8 text-center backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <dd className="font-mono text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dd>
                <dt className="mt-4 text-sm font-semibold text-foreground">{stat.label}</dt>
                <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
