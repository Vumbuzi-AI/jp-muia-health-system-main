import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const TYPES = ['Partnership & Investment', 'Clinical Collaboration', 'Community Health', 'Research', 'Media & Press', 'General Enquiry']

export default function ContactUs() {
  const h = useReveal()
  const f = useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [done, setDone] = useState(false)
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(s => ({ ...s, [k]: e.target.value }))

  return (
    <>
      <section className="pt-[68px] hero-bg" aria-label="Contact header">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div ref={h} className="max-w-3xl">
            <div className="label-tag mb-6">Get in Touch</div>
            <h1 className="font-display text-5xl lg:text-6xl text-ink mb-5">Contact Us</h1>
            <p className="text-ink-muted text-xl leading-relaxed">Whether you are a partner, investor, clinician, or member of the public — we want to hear from you. Our team responds within 48 hours.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-label="Contact form">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">

            {/* Details */}
            <div>
              <h2 className="font-display text-2xl text-ink mb-8">How to Reach Us</h2>
              <div className="space-y-7 mb-10">
                {[
                  { label: 'Phone', lines: ['+1 973 356 8322', '+1 606 356 0179'],
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
                  { label: 'Location', lines: ['Konza Technopolis,', 'Machakos County, Kenya'],
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
                  { label: 'Partnership Enquiries', lines: ['partnerships@jpmuia.com'],
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
                ].map(d => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand/10 text-brand rounded-xl flex items-center justify-center shrink-0">{d.icon}</div>
                    <div>
                      <p className="text-[10px] text-ink-muted uppercase tracking-widest font-semibold mb-1">{d.label}</p>
                      {d.lines.map(l => <p key={l} className="text-sm font-medium text-ink">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-[1.25rem] overflow-hidden bg-brand-light border border-brand-mid/30 flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                <div className="text-center p-6">
                  <svg className="w-10 h-10 text-brand/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                  <p className="text-ink-muted text-sm font-medium">Konza Technopolis</p>
                  <p className="text-ink-muted text-xs">Machakos County, Kenya</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div ref={f}>
              {done ? (
                <div className="card-featured p-12 text-center h-full flex flex-col items-center justify-center min-h-[480px]">
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center text-brand mx-auto mb-6">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h2 className="font-display text-2xl text-ink mb-3">Message Sent</h2>
                  <p className="text-ink-muted leading-relaxed max-w-sm">Thank you for reaching out. A member of our team will respond to your enquiry within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setDone(true) }} className="card-featured p-8 space-y-5" noValidate>
                  <h2 className="font-display text-2xl text-ink mb-1">Send a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: 'cn', label: 'Full Name', key: 'name', type: 'text',  ph: 'Your full name',     req: true },
                      { id: 'ce', label: 'Email',     key: 'email', type: 'email', ph: 'your@email.com',   req: true },
                    ].map(fld => (
                      <div key={fld.id}>
                        <label htmlFor={fld.id} className="block text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1.5">
                          {fld.label} {fld.req && <span className="text-brand" aria-hidden="true">*</span>}
                        </label>
                        <input id={fld.id} type={fld.type} required={fld.req} placeholder={fld.ph}
                          value={(form as Record<string,string>)[fld.key]} onChange={set(fld.key)}
                          className="w-full bg-surface border border-brand-mid/40 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:bg-white transition-all"/>
                      </div>
                    ))}
                    <div>
                      <label htmlFor="cp" className="block text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1.5">Phone (optional)</label>
                      <input id="cp" type="tel" placeholder="+1 or +254" value={form.phone} onChange={set('phone')}
                        className="w-full bg-surface border border-brand-mid/40 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:bg-white transition-all"/>
                    </div>
                    <div>
                      <label htmlFor="ct" className="block text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1.5">Enquiry Type</label>
                      <select id="ct" value={form.type} onChange={set('type')}
                        className="w-full bg-surface border border-brand-mid/40 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-brand transition-all">
                        <option value="">Select a type</option>
                        {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cm" className="block text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1.5">Message <span className="text-brand" aria-hidden="true">*</span></label>
                    <textarea id="cm" required rows={5} placeholder="How can we help you?" value={form.message} onChange={set('message')}
                      className="w-full bg-surface border border-brand-mid/40 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:bg-white transition-all resize-none"/>
                  </div>
                  <button type="submit" className="btn btn-primary w-full justify-center py-4">Send Message</button>
                  <p className="text-xs text-ink-muted text-center">Fields marked <span className="text-brand">*</span> are required. We respond within 48 hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-alt" aria-label="Partner CTA">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="rounded-[1.75rem] px-10 py-10 text-white flex flex-col md:flex-row items-center justify-between gap-6"
               style={{ background: 'linear-gradient(135deg, #0a2e5f, #1560bd)' }}>
            <div>
              <h2 className="font-display text-2xl mb-1">Ready to Partner With Us?</h2>
              <p className="text-white/60 text-sm">Join us in building Africa's most ambitious healthcare system.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="tel:+19733568322" className="btn btn-outline-white text-sm">+1 973 356 8322</a>
              <a href="tel:+16063560179" className="btn bg-white text-brand-dark hover:bg-brand-light text-sm">+1 606 356 0179</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
