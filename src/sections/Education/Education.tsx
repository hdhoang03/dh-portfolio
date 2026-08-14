import { motion } from 'framer-motion'
import { SectionWrapper } from '../../components/common/SectionWrapper'
import { SectionTitle } from '../../components/common/SectionTitle'
import { educations, certifications } from '../../data/portfolioData'

export function Education() {
  return (
    <SectionWrapper id="education" alt>
      <SectionTitle
        label="Background"
        title="Education & Certifications"
      />

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Education */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--color-muted)' }}>
            Education
          </h3>
          <div className="flex flex-col gap-4">
            {educations.map((edu, index) => (
              <motion.div
                key={edu.institution}
                id={`education-${edu.institution.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h4 className="text-base font-bold font-['Outfit'] mb-1" style={{ color: 'var(--color-text)' }}>
                  {edu.institution}
                </h4>
                <p className="text-sm mb-3" style={{ color: 'var(--color-accent)' }}>
                  {edu.degree}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs" style={{ color: 'var(--color-muted)' }}>
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--color-muted)' }}>
            Certifications
          </h3>
          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                id={`certification-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-base font-bold font-['Outfit'] mb-0.5" style={{ color: 'var(--color-text)' }}>
                      {cert.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--color-muted)' }}>{cert.issuer}</p>
                  </div>
                  {cert.score && (
                    <div className="text-right">
                      <p className="text-2xl font-extrabold font-['Outfit'] gradient-text leading-none">{cert.score}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>Score</p>
                    </div>
                  )}
                </div>
                <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Valid: {cert.valid}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
