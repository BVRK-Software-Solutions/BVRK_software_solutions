import Image from 'next/image'
import { Target, Compass, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const PILLARS = [
  {
    icon: Users,
    title: 'Who we are',
    body: 'Culture and attitude are key ingredients for success. Striving for excellence is a culture that lives in our company — built on Trust and Teamwork, one of our core values.',
  },
  {
    icon: Compass,
    title: 'Our vision',
    body: 'To be the leading provider of strategic consulting services, empowering businesses across industries to achieve sustainable growth with innovative solutions and unparalleled expertise.',
  },
  {
    icon: Target,
    title: 'Our mission',
    body: 'To help clients realize their full potential through comprehensive, tailored consulting — delivering exceptional value with strategic insights, data-driven analysis and actionable recommendations.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/collaboration.png"
                alt="The BVRK Software Solutions team collaborating in a modern office"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card p-5 shadow-lg sm:block">
              <p className="font-heading text-3xl font-bold text-primary">2</p>
              <p className="text-sm text-muted-foreground">Global offices</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-red">
                About Us
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
                A leading professional staffing &amp; software solutions company
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                BVRK Software Solutions specializes in providing the highest
                quality and guaranteed solutions. In a rapidly excelling world of
                technology, it is vital to keep up with everyday challenges — and
                that is why our experts help you face them while maintaining
                high-end standards and the latest technologies.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 90}>
                  <div className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
