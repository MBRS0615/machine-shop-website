import Image from 'next/image'
import { Reveal } from '@/components/reveal'

interface Machine {
  name: string
  image: string
  alt: string
  specs: { label: string; value: string }[]
}

const MACHINES: Machine[] = [
  {
    name: 'DMG MORI 5-Axis Machining Center',
    image: '/images/equipment-mill.png',
    alt: 'Five-axis CNC vertical machining center',
    specs: [
      { label: 'Travel', value: '30 × 20 × 25"' },
      { label: 'Spindle', value: '18,000 RPM' },
      { label: 'Tolerance', value: '±0.0002"' },
    ],
  },
  {
    name: 'Mazak Integrex Turning Center',
    image: '/images/equipment-lathe.png',
    alt: 'CNC turning lathe with live tooling',
    specs: [
      { label: 'Swing', value: '25.6"' },
      { label: 'Bar capacity', value: '3.0"' },
      { label: 'Live tooling', value: 'Y-axis' },
    ],
  },
  {
    name: 'FANUC Robotic Fabrication Cell',
    image: '/images/equipment-robot.png',
    alt: 'Industrial robotic arm performing automated welding',
    specs: [
      { label: 'Reach', value: '2,010 mm' },
      { label: 'Payload', value: '165 kg' },
      { label: 'Repeat', value: '±0.02 mm' },
    ],
  },
]

export function Equipment() {
  return (
    <section id="equipment" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Equipment
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Advanced machinery, expertly operated
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A continually reinvested fleet of multi-axis machining and automation cells keeps our
              capacity high and our lead times short.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {MACHINES.map((machine, i) => (
            <Reveal key={machine.name} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={machine.image || '/placeholder.svg'}
                    alt={machine.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{machine.name}</h3>
                  <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
                    {machine.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-mono text-sm font-semibold text-foreground">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
