import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { WhyBvrk } from '@/components/why-bvrk'
import { Cta } from '@/components/cta'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BVRK Software Solutions',
  legalName: 'BVRK Software Solutions Pvt. Ltd.',
  url: 'https://www.bvrksolutions.com',
  email: 'info@bvrksolutions.com',
  telephone: '+91-74163-53718',
  description:
    'A leading professional staffing solutions and services company specializing in software development, IT solutions, consulting, digital marketing, training and staffing.',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress:
        'Flat No. 202, H.No: 7-1-621/13, 4, Sanjeev Reddy Nagar, Ameerpet',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500038',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '6966 Rensia Marte Str, Glen Lauriston X 6',
      addressLocality: 'Centurion',
      addressRegion: 'Gauteng',
      postalCode: '0185',
      addressCountry: 'ZA',
    },
  ],
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
        <About />
        <Services />
        <WhyBvrk />
        <Cta />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
