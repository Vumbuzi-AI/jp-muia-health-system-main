import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'
import { SITE_IMAGES } from '../assets/images'
import './Services.css'

const services = [
  { title: 'Referral Pathways',         sub: 'From Community to Specialist',      img: SITE_IMAGES.p1520370, body: "J.P. Muia's structured referral pathways connect community health workers and local clinics directly to specialist teams at Konza Technopolis. No patient falls through the gap. Every referral is tracked, acknowledged, and acted upon — with feedback flowing back to the referring provider.", feats: ['Standardised referral protocols','Digital tracking of referral status','Feedback to referring providers','Triage and prioritisation systems'] },
  { title: 'Structured Follow-Up',      sub: 'Care That Continues After Discharge', img: SITE_IMAGES.p1520375, body: "Our structured follow-up programme ensures patients are not lost to follow-up after treatment. Through community health workers, remote monitoring, and scheduled review appointments, we track every patient's recovery and intervene early if complications arise.", feats: ['30-, 90-, and 180-day follow-up protocols','Remote symptom monitoring','Community health worker home visits','Readmission prevention programmes'] },
  { title: 'NCD Awareness & Screening', sub: 'Finding Disease Before It Finds You',  img: SITE_IMAGES.p1520394, body: "Non-communicable diseases — diabetes, hypertension, cancer — are Kenya's fastest-growing health burden. Our community screening programmes bring early detection directly to the people, using AI-assisted tools and trained community health workers across Machakos County and beyond.", feats: ['Mobile screening units','AI-assisted diagnostic screening','Community education programmes','Linkage to treatment pathways'] },
  { title: 'Specialist Clinical Skills', sub: 'Building Capacity Across East Africa', img: SITE_IMAGES.p1520470, body: 'We are not just treating patients — we are training the next generation of East African clinicians. Our specialist clinical skills programmes offer simulation-based training, mentorship, and structured rotations that raise the standard of care across the region.', feats: ['Simulation lab training','Clinical mentorship programmes','Specialist rotation opportunities','Continuing medical education'] },
  { title: 'Research Infrastructure',   sub: 'Science at the Heart of Care',         img: SITE_IMAGES.p1520556, body: 'Our hospital is research-ready from day one. Every ward, theatre, and outpatient department is designed to support ethical, high-quality clinical research. State-of-the-art biobank facilities, dedicated research coordinators, and international partnerships make J.P. Muia a hub for African health research.', feats: ['Integrated biobank facilities','Dedicated research coordination team','International data-sharing partnerships','Ethical review and governance framework'] },
  { title: 'Clinical Trials Ecosystem', sub: 'Global-Standard Trials, African-First Focus', img: SITE_IMAGES.p1520592, body: 'J.P. Muia provides a complete ecosystem for conducting ethical, GCP-compliant clinical trials. We partner with global pharmaceutical companies, academic institutions, and contract research organisations to bring cutting-edge treatments to Kenyan and East African patients.', feats: ['GCP-certified trial management','Phase I–IV trial capabilities','Patient recruitment from 4M+ catchment','Global sponsor partnerships'] },
]

type S = typeof services[number]

function ServiceRow({ s, index }: { s: S; index: number }) {
  const ref = useReveal()
  const even = index % 2 === 0
  return (
    <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!even ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div>
        <div className="label-tag mb-4">{s.sub}</div>
        <h2 className="font-display text-3xl lg:text-4xl text-ink mb-5">{s.title}</h2>
        <p className="text-ink-muted leading-relaxed mb-7">{s.body}</p>
        <ul className="space-y-3">
          {s.feats.map(f => (
            <li key={f} className="flex items-center gap-3 text-sm text-ink-muted">
              <span className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <svg width="10" height="10" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 6l3 3 5-5"/></svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="img-wrap rounded-[1.75rem] overflow-hidden shadow-md bg-brand-light" style={{ aspectRatio: '4/3' }}>
        <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy"/>
      </div>
    </div>
  )
}

export default function Services() {
  const headRef = useReveal()
  return (
    <>
      <section className="pt-[68px] hero-bg" aria-label="Services header">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div ref={headRef} className="max-w-3xl">
            <div className="label-tag mb-6">What We Offer</div>
            <h1 className="font-display text-5xl lg:text-6xl text-ink mb-5">Our Services</h1>
            <p className="text-ink-muted text-xl leading-relaxed">
              Six interconnected programmes spanning prevention, specialist treatment, research, and follow-up — building a complete health system, not just a hospital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Service details">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 space-y-24">
          {services.map((s, i) => <ServiceRow key={s.title} s={s} index={i}/>)}
        </div>
      </section>

      <section className="py-20 text-white text-center" style={{ background: 'linear-gradient(135deg, #0a2e5f, #1560bd)' }} aria-label="CTA">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-display text-4xl mb-4">Partner With J.P. Muia</h2>
          <p className="text-white/70 text-lg mb-8">Whether a clinical partner, research institution, or investor — there is a role for you in Africa's most ambitious health system.</p>
          <Link to="/contact" className="btn btn-primary bg-white text-brand-dark hover:bg-brand-light inline-flex">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}