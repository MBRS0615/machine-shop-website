'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Axis consistently hits tolerances other shops tell us are impossible. They have become an extension of our engineering team.',
    name: 'Daniel Reyes',
    role: 'Director of Manufacturing',
    company: 'Vertex Aerospace',
  },
  {
    quote:
      'From prototype to a full production run, the quality and communication never wavered. On time, every time.',
    name: 'Sarah Whitfield',
    role: 'Supply Chain Lead',
    company: 'Momentum Motors',
  },
  {
    quote:
      'Their DFM feedback saved us weeks of iteration and thousands in tooling. A genuine partner, not just a vendor.',
    name: 'Marcus Lin',
    role: 'Principal Engineer',
    company: 'Helix Robotics',
  },
]

const COMPANIES = [
  'VERTEX AEROSPACE',
  'MOMENTUM MOTORS',
  'HELIX ROBOTICS',
  'NORTHGATE MARINE',
  'ATLAS INDUSTRIAL',
  'PIONEER AG',
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const active = TESTIMONIALS[index]

  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Testimonials</p>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          What our clients say
        </h2>

        <div className="relative mt-12 min-h-[240px] rounded-2xl border border-border bg-card/70 p-8 backdrop-blur sm:p-12">
          <Quote className="mx-auto size-9 text-primary" aria-hidden="true" />
          <div className="mx-auto mt-4 flex justify-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="mt-6 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-foreground">{active.name}</p>
            <p className="text-sm text-muted-foreground">
              {active.role}, {active.company}
            </p>
          </figcaption>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Company logo marquee */}
      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...COMPANIES, ...COMPANIES].map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
