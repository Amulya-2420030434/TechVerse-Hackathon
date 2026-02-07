import Link from "next/link"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/speakers", label: "Speakers" },
  { href: "/register", label: "Register" },
  { href: "/about", label: "About" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight text-foreground">
          TECH<span className="text-primary">EVENT</span>
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground">
          &copy; 2026 Tech Event. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
