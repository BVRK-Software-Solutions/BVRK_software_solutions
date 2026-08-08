import {
  Code2,
  Server,
  Lightbulb,
  Search,
  GraduationCap,
  UsersRound,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: Code2,
    title: 'Design and Development',
    body: 'Custom application development that helps clients build and integrate sophisticated business applications with client-server and legacy systems. We create and deploy robust, scalable and extensible architectures for a wide range of industries.',
  },
  {
    icon: Server,
    title: 'IT Solutions',
    body: 'An innovative provider of turn-key technology services and solutions for small, medium and large businesses — offering end-to-end, cost-effective solutions with professional services, advisory, software development and corporate branding.',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    body: 'World-class recruitment and advisory services for clients and candidates across permanent and contracting opportunities. We learn your business, culture and technical needs to find the perfect addition to your team.',
  },
  {
    icon: Search,
    title: 'SEO and Digital Marketing',
    body: 'A specialized team helps your website outperform competitors in organic search results, combining proven SEO practices with digital marketing to grow your reach and results.',
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    body: 'Training and development that concentrates on client expectations, performance criteria, employee competency and outcomes — enabling trainees to be productive, succeed in their careers and stay current with industry best practices.',
  },
  {
    icon: UsersRound,
    title: 'IT Staffing',
    body: 'Effective staffing solutions delivering highly skilled, dependable manpower for contract, contract-to-hire and permanent placement needs.',
    bullets: [
      'Contract Staffing',
      'Direct IT Placement Services',
      'Managed IT Services',
      'Learning Solutions',
      'Project-based Services',
      'Outsourced Services',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-red">
            Our Services
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Elevating service, empowering success
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            End-to-end technology, consulting and staffing capabilities tailored
            to your unique needs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                {service.bullets && (
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
