import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule - Tech Event 2026",
  description: "Explore the full schedule of Tech Event 2026 across four exciting tracks.",
}

const tracks = [
  {
    name: "Web Development",
    color: "border-primary",
    sessions: [
      { time: "9:00 AM", title: "The Future of the Web Platform", speaker: "Sarah Chen" },
      { time: "10:30 AM", title: "Server Components in Production", speaker: "Alex Rivera" },
      { time: "1:00 PM", title: "Building Accessible UIs at Scale", speaker: "Priya Patel" },
      { time: "3:00 PM", title: "Edge-First Architecture Patterns", speaker: "Jordan Lee" },
    ],
  },
  {
    name: "AI / ML",
    color: "border-[hsl(200,70%,50%)]",
    sessions: [
      { time: "9:00 AM", title: "Large Language Models: What's Next", speaker: "Dr. Marcus Wright" },
      { time: "10:30 AM", title: "Responsible AI Development", speaker: "Amara Obi" },
      { time: "1:00 PM", title: "ML Ops for Production Systems", speaker: "Kenji Tanaka" },
      { time: "3:00 PM", title: "AI-Assisted Coding Workflows", speaker: "Elena Volkov" },
    ],
  },
  {
    name: "Cyber Security",
    color: "border-[hsl(0,60%,55%)]",
    sessions: [
      { time: "9:00 AM", title: "Zero Trust Architecture Deep Dive", speaker: "Maya Johnson" },
      { time: "10:30 AM", title: "Threat Detection with AI", speaker: "Ravi Sharma" },
      { time: "1:00 PM", title: "Supply Chain Security", speaker: "Lisa Nguyen" },
      { time: "3:00 PM", title: "Incident Response Best Practices", speaker: "David Kim" },
    ],
  },
  {
    name: "Cloud Computing",
    color: "border-[hsl(260,50%,55%)]",
    sessions: [
      { time: "9:00 AM", title: "Serverless at Scale", speaker: "Tom Bradley" },
      { time: "10:30 AM", title: "Multi-Cloud Strategy", speaker: "Fatima Al-Rashid" },
      { time: "1:00 PM", title: "Container Orchestration Patterns", speaker: "Mateo Garcia" },
      { time: "3:00 PM", title: "Cost Optimization in the Cloud", speaker: "Hannah Park" },
    ],
  },
]

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          March 15-17, 2026
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Event Schedule
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Four tracks running in parallel, covering the most exciting areas in technology today.
        </p>
      </div>

      {/* Tracks */}
      <div className="grid gap-8 lg:grid-cols-2">
        {tracks.map((track) => (
          <div
            key={track.name}
            className={`rounded-xl border-l-4 ${track.color} border border-border/50 bg-card p-6`}
          >
            <h2 className="mb-6 text-xl font-bold text-foreground">{track.name}</h2>
            <div className="flex flex-col gap-4">
              {track.sessions.map((session) => (
                <div
                  key={session.title}
                  className="group flex gap-4 rounded-lg border border-border/30 bg-secondary/30 p-4 transition-colors hover:border-primary/20"
                >
                  <span className="shrink-0 font-mono text-xs text-primary">
                    {session.time}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {session.title}
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {session.speaker}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
