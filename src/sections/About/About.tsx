import { Phone, Mail, GitBranch, Link2, MapPin } from 'lucide-react'
import { SectionWrapper } from '../../components/common/SectionWrapper'
import { SectionTitle } from '../../components/common/SectionTitle'
import { personalInfo } from '../../data/portfolioData'

const contactItems = [
  { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: Phone },
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/hdhoang03', href: personalInfo.github, icon: GitBranch },
  { label: 'LinkedIn', value: 'linkedin.com/in/dhoang03', href: personalInfo.linkedin, icon: Link2 },
  { label: 'Location', value: personalInfo.location, href: undefined, icon: MapPin },
]

export function About() {
  return (
    <SectionWrapper id="about" alt>
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left: Bio */}
        <div>
          <SectionTitle label="About" title="A bit about me." />
          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--color-text-2)' }}>
            I'm a{' '}
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Full-Stack Developer</span>{' '}
            specializing in Java and Spring Boot, currently working as a NOC Intern at{' '}
            <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Viettel IDC</span>{' '}
            and finishing my Engineer's Degree in IT at Sai Gon University.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-2)' }}>
            I thrive in backend architecture — designing APIs, event-driven systems, and containerized
            services. I care deeply about writing maintainable code and building products that actually
            work under pressure.
          </p>

          {/* Highlight chips */}
          <div className="flex flex-wrap gap-2">
            {['Backend Architecture', 'Event-Driven Systems', 'Spring Boot', 'Docker', 'Clean Code'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right: Contact list */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--color-muted)' }}>
            Contact
          </h3>
          <dl className="flex flex-col gap-1">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-3.5 border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <dt className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                  <item.icon size={13} />
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-right" style={{ color: 'var(--color-text)' }}>
                  {item.href ? (
                    <a
                      id={`about-${item.label.toLowerCase()}`}
                      href={item.href}
                      target={item.label === 'GitHub' || item.label === 'LinkedIn' ? '_blank' : undefined}
                      rel="noreferrer"
                      className="transition-colors"
                      style={{ color: 'var(--color-text)' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </SectionWrapper>
  )
}
