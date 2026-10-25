import { motion } from 'framer-motion'
import { Mail, GitBranch, Link2, ArrowRight } from 'lucide-react'
import { SectionWrapper } from '../../components/common/SectionWrapper'
import { personalInfo } from '../../data/portfolioData'

const contactLinks = [
  {
    id: 'contact-email',
    label: 'Email me',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    description: 'Best way to reach me',
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/hdhoang03',
    href: personalInfo.github,
    icon: GitBranch,
    description: 'Check out my code',
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhoang03',
    href: personalInfo.linkedin,
    icon: Link2,
    description: 'Connect with me',
  },
]

export function Contact() {
  return (
    <SectionWrapper id="contact" alt>
      <div className="max-w-2xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-accent)' }}
        >
          Get in touch
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          Let's build something{' '}
          <span className="gradient-text">together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-sm sm:text-base mb-10 max-w-md mx-auto"
          style={{ color: 'var(--color-text-2)' }}
        >
          I'm actively looking for backend / full-stack roles. Whether you have a project idea or
          just want to chat — my inbox is always open.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-10"
        >
          <a
            id="contact-cta-email"
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 hover:scale-105 active:scale-95"
            style={{ background: 'var(--color-accent)', color: '#fff', boxShadow: '0 8px 30px rgba(91,79,207,0.35)' }}
          >
            Say hello
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Contact links grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="card flex items-center gap-3 px-5 py-4 text-left group hover:border-violet-400 transition-all"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
              >
                <link.icon size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold" style={{ color: 'var(--color-muted)' }}>
                  {link.description}
                </p>
                <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
                  {link.label}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
