import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About - Tech Event 2026",
  description: "Learn more about Tech Event 2026 and how to get in touch.",
}

const stats = [
  { label: "Speakers", value: "20+" },
  { label: "Tracks", value: "4" },
  { label: "Days", value: "3" },
  { label: "Attendees", value: "500+" },
]

const values = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in technology, exploring new ideas and paradigms.",
  },
  {
    title: "Speed",
    description: "Moving fast, shipping fast, and embracing the velocity of modern development workflows.",
  },
  {
    title: "Creative Thinking",
    description: "Encouraging unconventional approaches to solve complex technical challenges.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              About the event
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Where Technology
              <br />
              Meets Vision
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tech Event 2026 brings together developers, researchers, architects, and innovators for three days of learning, networking, and inspiration. Our mission is to create a space where bold ideas flourish.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              This event encourages innovation, speed, and creative thinking across all domains of technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border border-border/50 bg-card p-8"
              >
                <span className="text-4xl font-bold text-primary">{stat.value}</span>
                <span className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border/50 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Our pillars
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What Drives Us
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border/50 bg-secondary/30 p-8"
              >
                <h3 className="mb-3 text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Have questions about Tech Event 2026? We{"'"}d love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">Email</p>
              <a
                href="mailto:contact@techevent.com"
                className="text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                contact@techevent.com
              </a>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">Location</p>
              <p className="text-lg font-medium text-foreground">
                The Convention Center, San Francisco
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">Date</p>
              <p className="text-lg font-medium text-foreground">
                March 15-17, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-card">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            Don{"'"}t miss out
          </h2>
          <p className="text-lg text-muted-foreground">
            Register today and be part of the biggest tech event of the year.
          </p>
          <Link
            href="/register"
            className="inline-flex h-12 items-center rounded-lg bg-primary px-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}
