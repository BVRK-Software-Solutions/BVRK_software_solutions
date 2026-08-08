import { Handshake, Sparkles, Cpu, HeadphonesIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STRENGTHS = [
  {
    icon: Handshake,
    title: 'Trust & Teamwork',
    body: 'Our success is a result of trust and teamwork — a core value that shapes every engagement and long-term partnership.',
  },
  {
    icon: Sparkles,
    title: 'A culture of excellence',
    body: 'Striving for excellence is a culture that lives in our company, driven by the right attitude and a commitment to progressive business continuity.',
  },
  {
    icon: Cpu,
    title: 'Latest technologies',
    body: 'We maintain high-end standards and continually adopt the latest technologies to keep our clients ahead of everyday challenges.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Exceptional service',
    body: 'Our goals are achieved through people — which is why we treat every customer with outstanding, ongoing service and support.',
  },
]

export function WhyBvrk() {
  return (
    <section id="why" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-red">
              Why BVRK
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Give us a chance — we&apos;ll prove our efficiency
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              We help businesses innovate and grow. Our intention is to enhance
              the competitive edge of our clients and provide seasoned resources
              that are innovative in delivering progressive business continuity.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
            </a>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {STRENGTHS.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-red/10 text-accent-red">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
