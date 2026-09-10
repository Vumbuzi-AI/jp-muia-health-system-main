import './ProblemSection.css'

type JourneyIconProps = {
  name: 'screening' | 'referral' | 'specialist' | 'follow-up'
}

function JourneyIcon({ name }: JourneyIconProps) {
  if (name === 'screening') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 4h6M9 7h6M8 3H6a2 2 0 0 0-2 2v15h16V5a2 2 0 0 0-2-2h-2" />
        <path d="M8 13h8M12 9v8" />
      </svg>
    )
  }

  if (name === 'referral') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 7h10M12 4l3 3-3 3M19 17H9M12 14l-3 3 3 3" />
      </svg>
    )
  }

  if (name === 'specialist') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0M18 3v4M16 5h4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 11a8 8 0 1 1-2.3-5.7L20 8" />
      <path d="M20 3v5h-5M9 12l2 2 4-5" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9h12M10 4l5 5-5 5" />
    </svg>
  )
}

const journey = [
  { number: '01', icon: 'screening' as const, stage: 'Community screening', text: 'A health need is identified.' },
  { number: '02', icon: 'referral' as const, stage: 'Referral', text: 'The patient is sent elsewhere.' },
  { number: '03', icon: 'specialist' as const, stage: 'Specialist care', text: 'Treatment may arrive too late.' },
  { number: '04', icon: 'follow-up' as const, stage: 'Recovery and follow-up', text: 'The family is left to reconnect the journey.' },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="home-problem" aria-labelledby="home-problem-title">
      <div className="home-problem__inner">
        <div className="home-problem__intro">
          <h2 id="home-problem-title">
            Care exists.<br />
            <span>The connections do not.</span>
          </h2>
          <p className="home-problem__summary">
            A patient can move through several parts of the health system without one clear path connecting their information, treatment, and recovery.
          </p>

          <div className="home-problem__insight">
            <span aria-hidden="true">!</span>
            <p>At every handoff, records, decisions, and responsibility can be lost.</p>
          </div>

          <a href="https://jpmuiahealthsystem.org/problem.html" className="home-problem__cta" aria-label="Read more about the problem">
            Understand the Problem <ArrowRight />
          </a>
        </div>

        <div className="home-problem__journey" aria-label="The disconnected patient journey">
          <div className="home-problem__journey-heading">
            <div>
              <span>Patient journey</span>
              <h3>Where continuity breaks</h3>
            </div>
            <span className="home-problem__status"><i aria-hidden="true" /> Connection unstable</span>
          </div>

          <div className="home-problem__route">
            <div className="home-problem__track" aria-hidden="true">
              <span className="home-problem__track-progress" />
              <span className="home-problem__traveller" />
            </div>

            {journey.map((item) => (
              <article className="home-problem__stage" key={item.stage}>
                <span className="home-problem__stage-icon">
                  <JourneyIcon name={item.icon} />
                </span>
                <div className="home-problem__stage-copy">
                  <span>{item.number}</span>
                  <h4>{item.stage}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
