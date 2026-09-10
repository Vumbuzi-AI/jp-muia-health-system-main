import { SITE_IMAGES } from '../assets/images'
import './TeamSection.css'

function ArrowRight() {
  return <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9h12M10 4l5 5-5 5" /></svg>
}

export default function TeamSection() {
  return (
    <section id="team" className="home-team" aria-labelledby="home-team-title">
      <div className="home-team__inner">
        <div className="home-team__photo home-team__photo--handshake">
          <img src={SITE_IMAGES.p1520370} alt="J.P. Muia partners meeting" loading="lazy" />
        </div>

        <div className="home-team__content">
          <h2 id="home-team-title">Built by people who believe Africa can lead.</h2>
          <p>
            Physician-led and globally connected, our team brings together healthcare, research, technology, business, and community leadership.
          </p>
          <span className="home-team__cta" aria-disabled="true">
            Meet the Team <ArrowRight />
          </span>
        </div>

        <div className="home-team__photo home-team__photo--group">
          <img src={SITE_IMAGES.p1520375} alt="J.P. Muia leadership and partners" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
