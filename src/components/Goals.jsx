import { goals } from "../data"

export default function Goals() {
  return (
    <section id="goals" className="section">
      <div className="gutter">24<br />25<br />26<br />27<br />28<br />29</div>
      <div className="section-body">
        <p className="section-path">goals.todo — 2026</p>
        <ul className="goal-list">
          {goals.map((g, i) => (
            <li className={`goal-item${g.done ? " done" : ""}`} key={i}>
              <span className="goal-box" aria-hidden="true">
                {g.done ? "✓" : ""}
              </span>
              <span className="goal-text">{g.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
