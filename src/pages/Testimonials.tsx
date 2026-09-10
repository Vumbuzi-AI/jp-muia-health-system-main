import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

export default function Testimonials() {
  const h = useReveal()
  const b = useReveal()
  return (
    <>
      <section className="pt-[68px] hero-bg" aria-label="Testimonials header">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div ref={h} className="max-w-3xl">
            <div className="label-tag mb-6">Voices</div>
            <h1 className="font-display text-5xl lg:text-6xl text-ink mb-5">Testimonials</h1>
            <p className="text-ink-muted text-xl leading-relaxed">Hear from community health partners, clinical collaborators, and patients whose lives are being shaped by J.P. Muia Health System.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-label="Testimonials content">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div ref={b} className="card-featured p-12 text-center">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            </div>
            <h2 className="font-display text-2xl text-ink mb-4">Testimonials Coming Soon</h2>
            <p className="text-ink-muted leading-relaxed max-w-lg mx-auto mb-8">We are collecting testimonials from our community health partners, clinical collaborators, and early programme participants. Check back soon as their stories are shared.</p>
            <p className="text-ink-muted text-sm mb-8">If you have been part of our programme and would like to share your experience, we would love to hear from you.</p>
            <Link to="/contact" className="btn btn-primary inline-flex">Share Your Story</Link>
          </div>
        </div>
      </section>

      <section className="py-20 section-alt text-center" aria-label="Community">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="label-tag mb-5 mx-auto w-fit">Our Community</div>
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-4 max-w-2xl mx-auto">4M+ people in our primary catchment. Every voice matters.</h2>
          <p className="text-ink-muted max-w-xl mx-auto mb-10">J.P. Muia Health System was built for the communities of Machakos County and beyond. Their trust is the foundation of everything we do.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/services" className="btn btn-ghost">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
