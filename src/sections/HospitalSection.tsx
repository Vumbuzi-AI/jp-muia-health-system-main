import { SITE_IMAGES } from '../assets/images'
import './HospitalSection.css'

function ArrowRight() {
  return <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9h12M10 4l5 5-5 5" /></svg>
}

const foundations = [
  ['01', 'Clinical workflows'],
  ['02', 'Advanced diagnostics'],
  ['03', 'Connected patient records'],
]

export default function HospitalSection() {
  return (
    <section id="hospital" className="home-hospital" aria-labelledby="home-hospital-title">
      <div className="home-hospital__media">
        <img src={SITE_IMAGES.p1520556} alt="Modern healthcare facility at Konza Technopolis" loading="lazy" />
        <span className="home-hospital__media-label">Designed at Konza Technopolis</span>
      </div>

      <div className="home-hospital__content">
        <h2 id="home-hospital-title">AI-native from the first line drawn.</h2>
        <p className="home-hospital__lead">
          Artificial intelligence is planned into the hospital from the beginning, supporting how clinicians diagnose, decide, record, and follow up.
        </p>

        <div className="home-hospital__foundations">
          {foundations.map(([number, label]) => (
            <div className="home-hospital__foundation" key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <span className="home-hospital__cta" aria-disabled="true">
          See the Hospital <ArrowRight />
        </span>

      </div>
    </section>
  )
}
