import { projects } from "../data"

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="gutter">15<br />16<br />17<br />18<br />19</div>
      <div className="section-body">
        <p className="section-path"><a href="https://github.com/XamzayevYashnar?tab=repositories" target="_blank" rel="noopener noreferrer">projects/</a></p>

        {projects.map((p) => (
          <a
            className="project-row"
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-top">
              <span className="project-name">{p.title}</span>
              {p.live && <span className="project-live">live demo</span>}
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
