'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const OFFICES = [
  {
    country: 'India',
    address:
      'Flat No. 202, H.No: 7-1-621/13, 4, Sanjeev Reddy Nagar, Ameerpet, Hyderabad, Telangana, India 500038',
  },
  {
    country: 'South Africa',
    address:
      '6966 Rensia Marte Str, Glen Lauriston X 6, Centurion, Gauteng, South Africa 0185',
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:info@bvrksolutions.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-red">
            Contact
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s build something great together
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Reach out to our teams in India and South Africa — we&apos;d love to
            hear about your project.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="flex flex-col gap-5">
            {OFFICES.map((office) => (
              <div
                key={office.country}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent-red" />
                  <h3 className="font-semibold text-foreground">
                    {office.country}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {office.address}
                </p>
              </div>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+917416353718"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Call us
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    +91 74163 53718
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@bvrksolutions.com"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Email us
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    info@bvrksolutions.com
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your project or requirement…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
