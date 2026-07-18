import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Equipment } from '@/components/equipment'
import { Industries } from '@/components/industries'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MachineShop',
  name: 'Axis Precision Machining',
  description:
    'CNC machining and metal fabrication shop offering CNC milling, turning, welding, and custom parts with aerospace-grade tolerances.',
  telephone: '+1-216-555-0142',
  email: 'quotes@axisprecision.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4820 Foundry Parkway',
    addressLocality: 'Cleveland',
    addressRegion: 'OH',
    postalCode: '44135',
    addressCountry: 'US',
  },
  openingHours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-13:00'],
  priceRange: '$$',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyChooseUs />
        <Equipment />
        <Industries />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
