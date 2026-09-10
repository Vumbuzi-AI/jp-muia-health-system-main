import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE_IMAGES } from '../assets/images'
import './Header.css'

type NavItem = { label: string; to: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'The Problem', to: '/#problem' },
  { label: 'Solutions', to: '/#solutions' },
  { label: 'The Hospital', to: '/#hospital' },
  { label: 'Why Konza', to: '/#konza' },
  { label: 'Our Team', to: '/#team' },
]

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12M12 6l4 4-4 4" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (to: string) =>
    location.pathname === '/' && location.hash === to.slice(1)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setScrolled(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return

    const section = document.getElementById(location.hash.slice(1))
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const desktopLink = (item: NavItem) => (
    <Link key={item.label} to={item.to} className={`header-link ${isActive(item.to) ? 'is-active' : ''}`}>
      {item.label}
    </Link>
  )

  const mobileLink = (item: NavItem) => (
    <Link key={item.label} to={item.to} className={`mobile-nav-link ${isActive(item.to) ? 'is-active' : ''}`} onClick={() => setMenuOpen(false)}>
      {item.label}
    </Link>
  )

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-shell">
        <Link to="/#home" className="site-logo" aria-label="J.P. Muia Healthcare home">
          <img src={SITE_IMAGES.logo} alt="J.P. Muia Healthcare" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map(desktopLink)}
        </nav>

        <Link to="/#team" className="header-cta">
          Partner With Us
          <ArrowRight />
        </Link>

        <button type="button" className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(current => !current)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-inner">
            {NAV_ITEMS.map(item => mobileLink(item))}

            <Link to="/#team" className="mobile-header-cta" onClick={() => setMenuOpen(false)}>
              Partner With Us
              <ArrowRight />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
