import Link from "next/link"
import Image from "next/image"

const highlights = [
  {
    title: "4 Tracks",
    description: "Web Dev, AI/ML, Cyber Security, and Cloud Computing",
  },
  {
    title: "Expert Speakers",
    description: "Industry leaders sharing cutting-edge insights",
  },
  {
    title: "Hands-on Workshops",
    description: "Build, learn, and innovate in real time",
  },
  {
    title: "Networking",
    description: "Connect with developers and tech professionals worldwide",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">
            Innovation &middot; Speed &middot; Creative Thinking
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Welcome to
            <br />
            <span className="text-primary">Tech Event 2026</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            This is the official website of our tech event. Join the brightest minds in technology for an unforgettable experience.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="inline-flex h-12 items-center rounded-lg bg-primary px-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Register Now
            </Link>
            <Link
              href="/schedule"
              className="inline-flex h-12 items-center rounded-lg border border-border bg-transparent px-8 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Event details bar */}
      <section className="border-y border-border/50 bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>San Francisco &amp; Online</span>
          <span>March 15-17, 2026</span>
          <span>The Convention Center</span>
          <span className="text-primary">Free Registration</span>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            What to expect
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Attend Tech Event 2026
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border/50 bg-card p-8 transition-colors hover:border-primary/30"
            >
              <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-card">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to be part of something big?
          </h2>
          <p className="text-lg text-muted-foreground">
            Secure your spot at Tech Event 2026 and join hundreds of developers, researchers, and innovators.
          </p>
          <Link
            href="/register"
            className="inline-flex h-12 items-center rounded-lg bg-primary px-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Register for Free
          </Link>
        </div>
      </section>
    </div>
  )
}
