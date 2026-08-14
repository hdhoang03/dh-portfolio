import { motion } from 'framer-motion'
import { SectionWrapper } from '../../components/common/SectionWrapper'
import { SectionTitle } from '../../components/common/SectionTitle'
import { experiences } from '../../data/portfolioData'

export function Experience() {
  return (
    <SectionWrapper id="experience" alt>
      <SectionTitle
        label="Experience"
        title="Work History"
        subtitle="Companies I've contributed to and what I built."
      />

      <div className="flex flex-col gap-0 divide-y" style={{ borderColor: 'var(--color-border)' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            id={`experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="py-8 grid md:grid-cols-[200px_1fr] gap-6"
          >
            {/* Meta column */}
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>{exp.period}</p>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{exp.location}</p>
              <span className="tag mt-3 inline-block">{exp.type}</span>
            </div>

            {/* Content column */}
            <div>
              <h3 className="text-lg font-bold font-['Outfit'] mb-0.5" style={{ color: 'var(--color-text)' }}>
                {exp.role}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text-2)' }}>
                {exp.company}
              </p>
              <ul className="flex flex-col gap-2.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-sm leading-relaxed flex gap-3" style={{ color: 'var(--color-text-2)' }}>
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--color-accent)' }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
