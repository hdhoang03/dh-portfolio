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

      <div className="relative flex flex-col gap-0 pl-8 md:pl-10">
        {/* Vertical line */}
        <div
          className="absolute left-2.5 md:left-3.5 top-2 bottom-2 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            id={`experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className={`relative pb-10 ${index === experiences.length - 1 ? 'pb-0' : ''}`}
          >
            {/* Timeline dot */}
            <div
              className="absolute -left-8 md:-left-10 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-accent)',
                boxShadow: '0 0 0 4px var(--color-accent-light)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--color-accent)' }}
              />
            </div>

            {/* Card */}
            <div
              className="card p-6 hover:border-violet-400 transition-all"
              style={{ borderLeftWidth: '3px', borderLeftColor: 'var(--color-accent)' }}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3
                    className="text-lg font-bold tracking-tight mb-0.5"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className="tag">{exp.type}</span>
                  <span className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
                    {exp.period}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="flex flex-col gap-3">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed flex gap-3"
                    style={{ color: 'var(--color-text-2)' }}
                  >
                    <span
                      className="mt-[0.45rem] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--color-accent)' }}
                    />
                    <span>{h}</span>
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
