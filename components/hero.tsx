'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Play, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ transform: `translateY(${offset * 0.35}px) scale(1.1)` }}
      >
        <Image
          src="/images/hero-cnc.png"
          alt="CNC milling machine cutting a precision metal part with sparks flying"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              ISO 9001:2015 &amp; AS9100D Certified
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Precision Machining.{' '}
            <span className="text-primary text-glow">Engineered for Excellence.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            From first prototype to full production run, we deliver complex machined and fabricated
            components with tolerances down to ±0.0002&quot;. Reliable quality, fast turnaround, and
            engineering you can build on.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              className="glow-primary h-12 px-7 text-base font-semibold"
            >
              Request a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#services" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 border-border bg-card/40 px-7 text-base font-semibold backdrop-blur hover:bg-card"
            >
              <Play className="size-4" aria-hidden="true" />
              View Services
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { label: 'Years in operation', value: '25+' },
              { label: 'Tightest tolerance', value: '±0.0002"' },
              { label: 'On-time delivery', value: '99.6%' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 justify-center rounded-full border border-border pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
