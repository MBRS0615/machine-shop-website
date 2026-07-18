import { Cog } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Services',
    links: ['CNC Milling', 'CNC Turning', 'Welding & Fabrication', 'Prototype Manufacturing'],
  },
  {
    title: 'Company',
    links: ['About', 'Equipment', 'Industries', 'Projects'],
  },
  {
    title: 'Certifications',
    links: ['ISO 9001:2015', 'AS9100D', 'ITAR Registered', 'RoHS Compliant'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cog className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">AXIS</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Precision
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Precision machining and metal fabrication engineered for excellence. Delivering
              flawless components to the industries that depend on them since 1998.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Axis Precision Machining. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
