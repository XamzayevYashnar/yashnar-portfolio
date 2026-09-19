import { useEffect, useState } from "react"

const TABS = [
  { id: "hero", label: "hero.jsx" },
  { id: "about", label: "about.md" },
  { id: "stack", label: "stack.json" },
  { id: "projects", label: "projects/" },
  { id: "activity", label: "activity.log" },
  { id: "goals", label: "goals.todo" },
  { id: "contact", label: "contact.sh" },
]

export default function TabBar() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="tabbar-wrap">
      <nav className="tabbar" aria-label="Bo'limlar">
        <span className="dots" aria-hidden="true">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </span>
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab${active === t.id ? " active" : ""}`}
            onClick={() => scrollTo(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
