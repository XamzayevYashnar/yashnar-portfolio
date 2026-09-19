import { profile } from "../data"

const username = "XamzayevYashnar"

export default function Activity() {
  return (
    <section id="activity" className="section">
      <div className="gutter">20<br />21<br />22<br />23</div>
      <div className="section-body">
        <p className="section-path">activity.log</p>

        <div className="activity-block">
          <p className="activity-caption">commit faoliyati</p>
          <img
            className="activity-img"
            src={`https://github-readme-activity-graph-nine-lac.vercel.app/graph?username=${username}&theme=github-compact&hide_border=true&area=true&bg_color=161f2b&color=e8a33d&line=52aca4&point=e7ecf2&custom_title=`}
            alt={`${profile.name} — GitHub commit faoliyati grafigi`}
            loading="lazy"
          />
        </div>

        <div className="activity-block">
          <p className="activity-caption">contribution snake</p>
          <picture>
            <source
              media="(prefers-color-scheme: light)"
              srcSet={`https://raw.githubusercontent.com/${username}/${username}/output/snake.svg`}
            />
            <img
              className="activity-img snake-img"
              src={`https://raw.githubusercontent.com/${username}/${username}/output/snake-dark.svg`}
              alt={`${profile.name} — GitHub contribution snake animatsiyasi`}
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
