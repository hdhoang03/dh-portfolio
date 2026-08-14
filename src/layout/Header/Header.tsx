import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../../data/portfolioData'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      }`}
      style={{ borderColor: 'var(--color-border)' }}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-base font-bold font-['Outfit'] tracking-tight select-none" style={{ color: 'var(--color-accent)' }}>
          {personalInfo.name.split(' ').pop()}<span style={{ color: '#a855f7' }}>.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative pb-0.5"
                  style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-muted)' }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'var(--color-accent)' }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          id="header-contact-btn"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ background: 'var(--color-accent)', color: '#fff' }}
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--color-text)' }} />
          <span className={`block h-0.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--color-text)' }} />
          <span className={`block h-0.5 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--color-text)' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t px-6 py-6 flex flex-col gap-5" style={{ borderColor: 'var(--color-border)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: 'var(--color-text-2)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex justify-center py-2.5 rounded-full text-sm font-semibold"
            style={{ background: 'var(--color-accent)', color: '#fff' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
