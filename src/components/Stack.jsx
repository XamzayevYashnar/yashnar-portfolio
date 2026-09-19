import { stack } from "../data"

const LABELS = {
  frontend: "frontend",
  backend: "backend",
  database: "database",
  devops: "devops",
  vcs: "version_control",
}

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="gutter">10<br />11<br />12<br />13<br />14</div>
      <div className="section-body">
        <p className="section-path">stack.json</p>
        {stack.map((group) => (
          <div className="stack-group" key={group.key}>
            <div className="stack-key">{LABELS[group.key]}</div>
            <div className="stack-tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
