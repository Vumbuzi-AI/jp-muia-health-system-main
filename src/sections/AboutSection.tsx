import { SITE_IMAGES } from '../assets/images'
import './AboutSection.css'

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="home-about" aria-labelledby="home-about-title">
      <div className="home-about__visual">
        <div className="home-about__media">
          <img
            src={SITE_IMAGES.p1580102}
            alt="J.P. Muia Health System team exploring technology at Konza Technopolis"
            className="home-about__image"
            loading="lazy"
          />

          <div className="home-about__overlay">
            <div className="home-about__content">
              <h2 id="home-about-title">
                <span>A Promise Made in a Village.</span>
                <span>A System Built for a Continent.</span>
              </h2>

              <p>
                J.P. Muia began with one physician&apos;s five-hour journey to find care for his sick mother and a promise that no family should have to make that journey again.
              </p>

              <a href="#/about" className="home-about__cta" aria-label="Read the full J.P. Muia story">
                Read Our Story <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
