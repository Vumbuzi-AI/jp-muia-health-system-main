import './SolutionsSection.css'

function ArrowRight() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9h12M10 4l5 5-5 5" />
    </svg>
  )
}

const carePath = [
  {
    number: '01',
    label: 'Community health',
    title: 'Find you',
    text: 'Screening, prevention, and early referral begin close to home.',
  },
  {
    number: '02',
    label: 'Tertiary care',
    title: 'Treat you',
    text: 'Specialist teams, advanced diagnostics, and AI support complex care.',
  },
  {
    number: '03',
    label: 'Return pathway',
    title: 'Follow you home',
    text: 'Structured check-ins and connected records continue after discharge.',
  },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="home-solutions" aria-labelledby="home-solutions-title">
      <div className="home-solutions__inner">
        <header className="home-solutions__header">
          <div>
            <h2 id="home-solutions-title">One system. Three connected moments.</h2>
          </div>
          <p>Care should not end when a patient changes location. J.P. Muia connects discovery, treatment, and recovery as one continuous path.</p>
        </header>

        <div className="home-solutions__path" aria-label="J.P. Muia connected care path">
          <span className="home-solutions__line" aria-hidden="true"><i /></span>
          {carePath.map((item) => (
            <article className="home-solutions__step" key={item.number}>
              <div className="home-solutions__number">{item.number}</div>
              <span className="home-solutions__label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <a className="home-solutions__cta" href="https://jpmuiahealthsystem.org/solutions.html">
          Explore the Solution <ArrowRight />
        </a>
      </div>
    </section>
  )
}
