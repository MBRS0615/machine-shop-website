'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DETAILS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+63 994 099 2103',
    href: 'tel:+12165550142',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sanchezmarkbryan01427@gmail.com',
    href: 'mailto:quotes@axisprecision.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Carissa Homes, Bagtas, Tanza, Cavite',
    href: 'https://maps.app.goo.gl/RWgmezG5nbHdeuqG9',
  },
]

const HOURS = [
  { day: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 1:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const inputClass =
  'w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Request a quote or talk to an engineer
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Send us your drawings or a description of your project. Most quotes are returned within
            one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8">
              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold">Thank you — request received</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Our team will review your project and get back to you within one business day.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Full name
                      </label>
                      <input id="name" name="name" required className={inputClass} placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium">
                        Company
                      </label>
                      <input id="company" name="company" className={inputClass} placeholder="Acme Mfg." />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={inputClass}
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium">
                      Service needed
                    </label>
                    <select id="service" name="service" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>CNC Milling</option>
                      <option>CNC Turning</option>
                      <option>Welding &amp; Fabrication</option>
                      <option>Prototype Manufacturing</option>
                      <option>Custom Parts</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={inputClass}
                      placeholder="Quantity, materials, tolerances, timeline…"
                    />
                  </div>
                  <Button type="submit" size="lg" className="glow-primary w-full font-semibold sm:w-auto">
                    Send Request
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Details + hours + map */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <ul className="grid gap-5">
                {DETAILS.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                      <detail.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {detail.label}
                      </p>
                      <a
                        href={detail.href}
                        className="text-sm font-medium leading-relaxed text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-5">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" aria-hidden="true" />
                  <p className="text-sm font-semibold">Business Hours</p>
                </div>
                <ul className="mt-3 grid gap-2">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Axis Precision Machining location map"
                src="https://www.google.com/maps?q=Cleveland,OH+44135&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
