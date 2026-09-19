import { useEffect, useState } from "react"
import { profile } from "../data"

export default function Hero() {
  const [typed, setTyped] = useState("")
  const full = `> ${profile.role}`

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(id)
    }, 35)
    return () => clearInterval(id)
  }, [full])

  return (
    <section id="hero" className="section hero">
      <div className="gutter">01<br />02<br />03<br />04</div>
      <div className="section-body">
        <p className="section-path">~/{profile.company.toLowerCase().replace(/\s+/g, "-")}/{profile.name.split(" ")[0].toLowerCase()}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">
          {typed}
          <span className="cursor" aria-hidden="true" />
        </p>
        <p className="hero-meta">
          <span>{profile.location}</span>
          <span>·</span>
          <span>{profile.company}</span>
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) }}>
            Loyihalarni ko'rish
          </a>
          <a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}>
            Bog'lanish
          </a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
