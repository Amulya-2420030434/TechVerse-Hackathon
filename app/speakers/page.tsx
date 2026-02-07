import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Speakers - Tech Event 2026",
  description: "Meet the featured speakers at Tech Event 2026.",
}

const speakers = [
  {
    name: "Sarah Chen",
    role: "Industry Expert",
    specialty: "Web Technologies",
    bio: "A pioneer in modern web frameworks with over 15 years of experience building scalable platforms for Fortune 500 companies.",
    image: "/images/speaker-1.jpg",
    topics: ["Server Components", "Edge Computing", "Web Performance"],
  },
  {
    name: "Dr. Marcus Wright",
    role: "AI Researcher",
    specialty: "Machine Learning",
    bio: "Leading researcher in large language models and responsible AI, with publications in top-tier conferences and journals.",
    image: "/images/speaker-2.jpg",
    topics: ["LLMs", "Responsible AI", "Neural Architecture"],
  },
  {
    name: "Maya Johnson",
    role: "Cyber Security Analyst",
    specialty: "Zero Trust Security",
    bio: "Former NSA analyst turned industry consultant, helping organizations implement zero-trust security architectures.",
    image: "/images/speaker-3.jpg",
    topics: ["Zero Trust", "Threat Detection", "Supply Chain"],
  },
  {
    name: "Tom Bradley",
    role: "Cloud Architect",
    specialty: "Distributed Systems",
    bio: "Architect behind some of the world's largest cloud deployments, specializing in serverless and multi-cloud strategies.",
    image: "/images/speaker-4.jpg",
    topics: ["Serverless", "Multi-Cloud", "Cost Optimization"],
  },
]

export default function SpeakersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Learn from the best
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Featured Speakers
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          World-class experts sharing their knowledge and insights across all four tracks.
        </p>
      </div>

      {/* Speakers grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {speakers.map((speaker) => (
          <div
            key={speaker.name}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-colors hover:border-primary/30 sm:flex-row"
          >
            <div className="relative aspect-square w-full shrink-0 sm:w-48">
              <Image
                src={speaker.image || "/placeholder.svg"}
                alt={`Portrait of ${speaker.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">
                {speaker.role}
              </p>
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {speaker.name}
              </h2>
              <p className="mb-1 text-sm font-medium text-muted-foreground">
                {speaker.specialty}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {speaker.bio}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {speaker.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
