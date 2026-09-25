import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { navLinks, personalInfo } from '../../data/portfolioData'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(sectionIds)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      }`}
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--color-surface) 90%, transparent)' : 'transparent',
        borderColor: 'var(--color-border)',
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-base font-bold font-['Outfit'] tracking-tight select-none"
          style={{ color: 'var(--color-accent)' }}
        >
          {personalInfo.name.split(' ').pop()}
          <span style={{ color: 'var(--color-accent-2)' }}>.</span>
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
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'var(--color-accent)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right: Theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="theme-toggle"
            onClick={toggle}
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            id="header-contact-btn"
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: 'var(--color-accent)', color: '#fff' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: theme + toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="theme-toggle-mobile"
            onClick={toggle}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            id="mobile-menu-toggle"
            className="w-8 h-8 flex flex-col justify-center gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ background: 'var(--color-text)' }}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
              style={{ background: 'var(--color-text)' }}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ background: 'var(--color-text)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t"
            style={{
              background: 'color-mix(in srgb, var(--color-surface) 96%, transparent)',
              borderColor: 'var(--color-border)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-medium py-1"
                  style={{
                    color: activeSection === link.href.replace('#', '')
                      ? 'var(--color-accent)'
                      : 'var(--color-text-2)',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-1 inline-flex justify-center py-2.5 rounded-full text-sm font-semibold"
                style={{ background: 'var(--color-accent)', color: '#fff' }}
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
