import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

const SERVICES = [
  'Design and Development',
  'IT Solutions',
  'IT Consulting',
  'SEO and Digital Marketing',
  'IT Training',
  'IT Staffing',
]

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why BVRK', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="inline-flex rounded-lg bg-white px-3 py-2">
              <Image
                src="/images/bvrk-logo.png"
                alt="BVRK Software Solutions"
                width={749}
                height={333}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              A leading professional staffing solutions and services company,
              specializing in the highest quality and guaranteed technology
              solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="text-sm text-primary-foreground/75"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
              <li>
                <span className="font-medium text-primary-foreground">India</span>
                <br />
                Sanjeev Reddy Nagar, Ameerpet, Hyderabad, Telangana 500038
              </li>
              <li>
                <span className="font-medium text-primary-foreground">
                  South Africa
                </span>
                <br />
                Glen Lauriston X 6, Centurion, Gauteng 0185
              </li>
              <li>
                <a
                  href="tel:+917416353718"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +91 74163 53718
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bvrksolutions.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  info@bvrksolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-primary-foreground/70 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} BVRK Software Solutions Pvt. Ltd.
            All rights reserved.
          </p>
          <p>Your vision, our efforts.</p>
        </div>
      </div>
    </footer>
  )
}
