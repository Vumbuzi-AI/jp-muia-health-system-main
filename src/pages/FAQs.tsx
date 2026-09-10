import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

const FAQS = [
  {
    cat: 'About the Hospital',
    items: [
      { q: 'Where will J.P. Muia Health System be located?', a: "The hospital will be at Konza Technopolis, Machakos County, Kenya — Africa's purpose-built smart city, approximately 64 km from Nairobi." },
      { q: 'When will the hospital open?', a: 'Phase 1 is expected to receive its first patients in 2031. Foundation works commenced in 2025.' },
      { q: 'What will Phase 1 include?', a: 'Phase 1 includes 120 inpatient beds, 6 operating theatres, specialist outpatient departments, diagnostic imaging, a research laboratory, and integrated AI clinical decision support.' },
      { q: 'Why Konza Technopolis?', a: "Konza Technopolis is Kenya's premier smart city — world-class infrastructure, proximity to Nairobi, and a mandate to attract technology and innovation. The natural home for Africa's first AI-smart hospital." },
    ],
  },
  {
    cat: 'The AI-Smart Model',
    items: [
      { q: 'What does "AI-smart" mean in practice?', a: 'AI is embedded throughout the clinical workflow — from patient risk stratification at community screening to diagnostic imaging analysis, clinical decision support in theatres, and post-discharge follow-up monitoring.' },
      { q: 'Is AI replacing doctors?', a: 'Absolutely not. AI augments clinical judgment. Every AI output is reviewed by a qualified clinician. Our doctors lead the care; AI helps them do it better.' },
      { q: 'How is patient data protected?', a: "J.P. Muia will comply fully with Kenya's Data Protection Act 2019 and applicable international standards. Patient data is encrypted, access-controlled, and used only for care and consented research." },
    ],
  },
  {
    cat: 'Partnership & Investment',
    items: [
      { q: 'How can I partner with J.P. Muia Health System?', a: 'We welcome partnerships across clinical services, research, community health, technology, and infrastructure. Contact us and our team will respond within 48 hours.' },
      { q: 'Are there investment opportunities?', a: 'Yes. J.P. Muia is actively engaging impact investors, institutional partners, and development finance institutions. Please reach out to discuss investment partnership opportunities.' },
      { q: 'Can my hospital or clinic refer patients to J.P. Muia?', a: 'Structured referral pathways will be available to providers across Kenya and East Africa from opening. We are already mapping referral networks. Contact us to register your interest.' },
    ],
  },
  {
    cat: 'Community Health',
    items: [
      { q: 'How does the community health programme work?', a: 'Our community health network reaches into towns, villages, and rural areas through trained community health workers, mobile screening units, and AI-assisted risk tools. Patients needing care are referred through structured pathways.' },
      { q: 'What diseases does the screening programme cover?', a: 'Current NCD screening focuses on hypertension, diabetes, and selected cancers. We are expanding over time in partnership with county health authorities.' },
      { q: 'Is screening free?', a: 'Community health screening is provided free of charge. Access to early detection should not depend on ability to pay.' },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-brand-mid/30 last:border-0">
      <button onClick={() => setOpen(o => !o)} aria-expanded={open}
        className="w-full text-left flex items-start justify-between gap-4 py-5">
        <span className={`font-medium text-sm leading-snug transition-colors ${open ? 'text-brand' : 'text-ink'}`}>{q}</span>
        <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${open ? 'border-brand bg-brand text-white rotate-45' : 'border-brand-mid text-ink-muted'}`}>
          <svg width="10" height="10" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M6 2v8M2 6h8"/></svg>
        </span>
      </button>
      {open && <div className="pb-5 pr-10"><p className="text-ink-muted text-sm leading-relaxed">{a}</p></div>}
    </div>
  )
}

function FAQCat({ cat, items }: typeof FAQS[number]) {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <h2 className="font-display text-2xl text-ink pb-4 mb-0 border-b-2 border-brand/15">{cat}</h2>
      <div>{items.map(i => <FAQItem key={i.q} q={i.q} a={i.a}/>)}</div>
    </div>
  )
}

export default function FAQs() {
  const h = useReveal()
  return (
    <>
      <section className="pt-[68px] hero-bg" aria-label="FAQs header">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div ref={h} className="max-w-3xl">
            <div className="label-tag mb-6">Questions</div>
            <h1 className="font-display text-5xl lg:text-6xl text-ink mb-5">Frequently Asked Questions</h1>
            <p className="text-ink-muted text-xl leading-relaxed">Everything you need to know about J.P. Muia Health System, our clinical model, and how to get involved.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-label="FAQ list">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 space-y-12">
          {FAQS.map(c => <FAQCat key={c.cat} cat={c.cat} items={c.items}/>)}
        </div>
      </section>

      <section className="py-20 section-alt text-center" aria-label="More help">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="font-display text-3xl text-ink mb-4">Still Have Questions?</h2>
          <p className="text-ink-muted mb-8">Our team is happy to help. We respond within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19733568322" className="btn btn-ghost">+1 973 356 8322</a>
            <Link to="/contact" className="btn btn-primary">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  )
}
