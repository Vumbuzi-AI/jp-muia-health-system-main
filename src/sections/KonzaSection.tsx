import { SITE_IMAGES } from '../assets/images'
import './KonzaSection.css'

function ArrowRight() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9h12M10 4l5 5-5 5" />
    </svg>
  )
}

const reasons = [
  ['Digital foundations', 'Infrastructure built for connected care and secure health records.'],
  ['Research alongside care', 'A setting where clinical work, learning, and innovation can meet.'],
  ['Space to grow', 'A planned city that can support the full health system over time.'],
]

export default function KonzaSection() {
  return (
    <section id="konza" className="home-konza" aria-labelledby="home-konza-title">
      <div className="home-konza__inner">
        <header className="home-konza__header">
          <h2 id="home-konza-title">A smart hospital needs a city built for what comes next.</h2>
          <p>Konza brings digital infrastructure, research, talent, and a growing community together in one purpose-built smart city.</p>
        </header>

        <div className="home-konza__canvas">
          <img className="home-konza__landscape" src={SITE_IMAGES.p1580060} alt="Konza Technopolis landscape" loading="lazy" />

          <div className="home-konza__location" aria-label="Location: Konza, Kenya">
            <span aria-hidden="true" />
            Konza, Kenya
          </div>

          <figure className="home-konza__detail">
            <img src={SITE_IMAGES.p1580075} alt="Konza Technopolis identity sign" loading="lazy" />
          </figure>

          <div className="home-konza__reasons">
            {reasons.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}

            <a className="home-konza__cta" href="https://jpmuiahealthsystem.org/konza.html">
              Discover Konza <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
