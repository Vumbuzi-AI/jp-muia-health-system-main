import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SITE_IMAGES } from '../assets/images'
import './Footer.css'

const cols = {
  company:  [{ l: 'Our Story', to: '/about' }, { l: 'Leadership', to: '/about' }, { l: 'Mission & Vision', to: '/about' }, { l: 'Careers', to: '/about' }, { l: 'News', to: '/about' }],
  services: [{ l: 'Referral Pathways', to: '/services' }, { l: 'Structured Follow-Up', to: '/services' }, { l: 'NCD Screening', to: '/services' }, { l: 'Research Infrastructure', to: '/services' }, { l: 'Clinical Trials', to: '/services' }],
  patients: [{ l: 'FAQs', to: '/faqs' }, { l: 'Contact Us', to: '/contact' }, { l: 'Testimonials', to: '/testimonials' }, { l: 'Partner With Us', to: '/contact' }],
}

const socials = [
  { name: 'Twitter / X', href: '#', icon: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: 'LinkedIn',    href: '#', icon: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: 'Facebook',    href: '#', icon: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <footer className="bg-ink text-white relative overflow-hidden" aria-label="Site footer">
      {/* Subtle top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent pointer-events-none" aria-hidden="true"/>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[240px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(21,96,189,.18) 0%, transparent 70%)' }} aria-hidden="true"/>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/" className="footer-logo mb-5" aria-label="J.P. Muia Healthcare home">
              <img src={SITE_IMAGES.logo} alt="J.P. Muia Healthcare" />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Africa's first AI-smart hospital — connecting community health, specialist care, and structured follow-up at Konza Technopolis, Kenya.
            </p>
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a key={s.name} href={s.href} aria-label={`Follow us on ${s.name}`}
                   className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/45 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-white/40 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {cols.company.map(l => (
                <li key={l.l}><Link to={l.to} className="text-white/55 hover:text-white text-sm transition-colors">{l.l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-white/40 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {cols.services.map(l => (
                <li key={l.l}><Link to={l.to} className="text-white/55 hover:text-white text-sm transition-colors">{l.l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Patients */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-white/40 mb-4">Patients</h3>
            <ul className="space-y-2.5">
              {cols.patients.map(l => (
                <li key={l.l}><Link to={l.to} className="text-white/55 hover:text-white text-sm transition-colors">{l.l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-white/40 mb-4">Get in Touch</h3>
            <ul className="space-y-3 mb-7">
              <li>
                <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+19733568322" className="text-white/55 hover:text-white text-sm transition-colors block">+1 973 356 8322</a>
                <a href="tel:+16063560179" className="text-white/55 hover:text-white text-sm transition-colors block">+1 606 356 0179</a>
              </li>
              <li>
                <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Location</p>
                <p className="text-white/55 text-sm leading-relaxed">Konza Technopolis,<br/>Machakos County, Kenya</p>
              </li>
            </ul>

            <p className="text-[10px] text-white/35 uppercase tracking-widest mb-2.5">Newsletter</p>
            {done ? (
              <p className="text-brand text-sm font-semibold">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email) setDone(true) }} className="flex flex-col gap-2">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input id="footer-email" type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" required
                  className="bg-white/8 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:bg-white/12 transition-all"/>
                <button type="submit" className="bg-brand text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-deep transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} J.P. Muia Health System. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(l => (
              <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
