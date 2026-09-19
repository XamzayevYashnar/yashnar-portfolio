import { contact, profile } from "../data"

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="gutter">30<br />31<br />32<br />33<br />34</div>
      <div className="section-body">
        <p className="section-path">contact.sh</p>
        <div className="contact-block">
          {contact.map((c) => (
            <span className="contact-line" key={c.key}>
              <span className="contact-var">export {c.key}</span>
              <span className="contact-eq">=</span>"
              {c.href ? (
                <a
                  className="contact-val"
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {c.value}
                </a>
              ) : (
                <span className="contact-val">{c.value}</span>
              )}
              "
            </span>
          ))}
        </div>
        <div className="footer">
          <p className="quote">"{profile.motto}"</p>
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </section>
  )
}
