import { about } from "../data"

export default function About() {
  return (
    <section id="about" className="section">
      <div className="gutter">05<br />06<br />07<br />08<br />09</div>
      <div className="section-body">
        <p className="section-path">about.md</p>
        <div className="about-block">
          <span className="comment-open">/**</span>
          <br />
          {about.map((line, i) => (
            <div className="about-line" key={i}>
              {line}
            </div>
          ))}
          <span className="comment-close"> */</span>
        </div>
        <p className="about-fact">
          Fun fact: backend dasturchilar ninjaga o'xshaydi — ularni hech kim ko'rmaydi,
          lekin ularsiz hammasi qulaydi.
        </p>
      </div>
    </section>
  )
}
