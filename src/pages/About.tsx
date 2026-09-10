import { useReveal } from '../hooks/useReveal'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { Link } from 'react-router-dom'

function PageHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  const ref = useReveal()
  return (
    <section className="pt-[68px] bg-hero-gradient">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div ref={ref} className="max-w-3xl">
          <span className="text-brand text-xs font-semibold uppercase tracking-widest mb-3 block">{label}</span>
          <h1 className="font-display text-5xl md:text-6xl text-ink mb-5">{title}</h1>
          {subtitle && <p className="text-ink-muted text-xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}

const milestones = [
  { year: '2019', event: 'J.P. Muia Health System incorporated in Kenya with the founding vision of an AI-smart hospital at Konza Technopolis.' },
  { year: '2021', event: 'Site selection confirmed at Konza Technopolis — Africa\'s first planned smart city and technology hub.' },
  { year: '2022', event: 'Master Plan and Phase 1 clinical design completed; community health programme launched in Machakos County.' },
  { year: '2023', event: 'International partnerships established with AI health research institutes across the US, UK, and East Africa.' },
  { year: '2025', event: 'Foundation works commence at the Konza Technopolis site. Phase 1 — 120 beds, 6 operating theatres.' },
  { year: '2031', event: 'First patients expected to be received at the fully operational J.P. Muia Health System hospital.' },
]

const values = [
  { title: 'Access', body: 'World-class care should not be a privilege. We build systems that reach every patient, regardless of where they live.', icon: '🌍' },
  { title: 'Innovation', body: 'AI and technology are not add-ons. They are embedded into every clinical decision, workflow, and patient interaction.', icon: '⚡' },
  { title: 'Continuity', body: 'Care does not end at the hospital door. Our follow-up systems ensure every patient stays well.', icon: '🔗' },
  { title: 'Research', body: 'Every patient interaction generates knowledge that improves care for future patients across Africa and the world.', icon: '🔬' },
]

export default function About() {
  const storyRef = useReveal()
  const missionRef = useRevealGroup()
  const milestonesRef = useRevealGroup()
  const valuesHeadRef = useReveal()
  const valuesGridRef = useRevealGroup()

  return (
    <div className="about-page">
      <PageHeader
        label="About Us"
        title="Built with Purpose, Designed for Africa."
        subtitle="J.P. Muia Health System exists to close the gap between the healthcare Kenya deserves and the healthcare that has been available."
      />

      {/* Story section */}
      <section id="story" className="py-24 bg-white" aria-label="Our story">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div ref={storyRef} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-brand text-xs font-semibold uppercase tracking-widest mb-3 block">Our Story</span>
              <h2 className="font-display text-4xl text-ink mb-6">From Vision to Foundation</h2>
              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  Dr. Timothy Muia grew up witnessing the consequences of a fragmented health system — patients referred too late, follow-up lost, specialist care inaccessible. He trained and practised medicine across some of the world's most advanced health systems with one driving conviction: Kenya could do this, and should.
                </p>
                <p>
                  J.P. Muia Health System was founded on the belief that Africa's healthcare challenge is not a shortage of compassion, but a shortage of system. A system that connects community screening to specialist treatment to follow-up. A system that uses AI not as a gimmick but as an essential clinical tool. A system designed, from the ground up, for the African context.
                </p>
                <p>
                  Konza Technopolis — Kenya's smart city — is the natural home for Africa's first AI-smart hospital. It is infrastructure built for the future, in the heart of East Africa.
                </p>
              </div>
            </div>
            <div className="rounded-[1.75rem] overflow-hidden aspect-[4/3] bg-brand-light shadow-md">
              <img
                src="/images/about-story.webp"
                alt="Dr. Timothy Muia and the J.P. Muia team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 bg-surface-alt" aria-label="Mission and vision">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div ref={missionRef} className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[1.5rem] p-10 border border-brand-mid/40 shadow-sm">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center text-xl mb-6">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl text-ink mb-3">Our Mission</h2>
              <p className="text-ink-muted leading-relaxed">
                To build Africa's first AI-smart, research-ready health system — connecting community health, specialist care, and structured follow-up in an integrated, technology-driven ecosystem accessible to all.
              </p>
            </div>
            <div className="bg-brand-dark text-white rounded-[1.5rem] p-10 shadow-md">
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl mb-3">Our Vision</h2>
              <p className="text-white/75 leading-relaxed">
                A Kenya — and an Africa — where geography, income, and circumstance no longer determine the quality of healthcare a person receives. Where the best of global medicine is available at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white" aria-label="Our values">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div ref={valuesHeadRef} className="text-center mb-12">
            <span className="text-brand text-xs font-semibold uppercase tracking-widest mb-3 block">What We Stand For</span>
            <h2 className="font-display text-4xl text-ink">Our Values</h2>
          </div>
          <div ref={valuesGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-surface rounded-[1.25rem] p-7 border border-brand-mid/40 hover:border-brand/30 hover:bg-brand-light transition-all reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl text-ink mb-2">{v.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="leadership" className="py-24 bg-surface-alt" aria-label="Milestones">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div ref={milestonesRef} className="max-w-3xl">
            <span className="text-brand text-xs font-semibold uppercase tracking-widest mb-3 block">Timeline</span>
            <h2 className="font-display text-4xl text-ink mb-12">Milestones</h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="flex gap-6 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center text-xs font-bold shrink-0">{m.year.slice(-2)}</div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-brand-mid my-1" />}
                  </div>
                  <div className="pb-8 pt-1">
                    <div className="text-brand font-semibold text-sm mb-1">{m.year}</div>
                    <p className="text-ink-muted text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white text-center" aria-label="Call to action">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-display text-4xl mb-4">Ready to Build Kenya's Healthcare Future?</h2>
          <p className="text-white/70 text-lg mb-8">Join us as a partner, investor, or clinical collaborator.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-light transition-all"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  )
}
