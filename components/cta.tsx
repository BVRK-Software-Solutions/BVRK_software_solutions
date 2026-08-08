import { ArrowRight } from 'lucide-react'

export function Cta() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bvrk-grid opacity-40" />
      <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-accent-red/20 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          Success starts with the right partner
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          We help businesses innovate and grow. Let&apos;s discuss how BVRK
          Software Solutions can help you conquer your next goal.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/90"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:info@bvrksolutions.com"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            info@bvrksolutions.com
          </a>
        </div>
      </div>
    </section>
  )
}
