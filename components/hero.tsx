import Image from 'next/image'
import { ArrowRight, ShieldCheck, Globe2 } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-tech.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/70 to-transparent" />
        <div className="absolute inset-0 bvrk-grid opacity-40" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pb-28 lg:pt-52">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-red" />
            Software · IT Services · Staffing
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Think big.
            <span className="block text-white/85">
              We turn your vision into results.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
            BVRK Software Solutions delivers the highest quality, guaranteed
            technology solutions. Your vision and our efforts can conquer your
            goal.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-8 text-white/85 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-white" />
              <dt className="text-sm">Guaranteed quality solutions</dt>
            </div>
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 shrink-0 text-white" />
              <dt className="text-sm">Presence in India &amp; South Africa</dt>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
