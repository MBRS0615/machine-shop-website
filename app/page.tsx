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
  name: 'Auto Point Machine Shop',
  description:
    'CNC machining and metal fabrication shop offering CNC milling, turning, welding, and custom parts with aerospace-grade tolerances.',
  telephone: '+63 994 099 2103',
  email: 'sanchezmarkbryan01427@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Carissa Homes',
    addressLocality: 'Bagtas',
    addressRegion: 'Tanza',
    postalCode: 'Cavite',
    addressCountry: 'PH',
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
