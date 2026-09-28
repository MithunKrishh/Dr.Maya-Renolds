"use client"
import { useState } from "react"
import Link from "next/link"

const navItems = [
  ["Specialties", "#specialties"],
  ["Approach", "#approach"],
  ["About", "#about"],
  ["Office", "#office"],
]

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={down ? "arrow arrow-down" : "arrow"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  )
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="brand" href="#top" aria-label="Dr. Maya Reynolds, home">
        <span className="brand-name">Maya Reynolds</span>
        <span className="brand-role">PsyD · Clinical Psychologist</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="#contact">
        Book an Appointment
        <Arrow />
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
        {navItems.map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="#contact" onClick={() => setMenuOpen(false)}>
          Book an Appointment
        </Link>
      </div>
    </header>
  )
}
