import { motion } from 'framer-motion'
import { SectionWrapper } from '../../components/common/SectionWrapper'
import { SectionTitle } from '../../components/common/SectionTitle'
import { skillCategories } from '../../data/portfolioData'

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        label="Stack"
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with regularly."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            id={`skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="card p-6"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-muted)' }}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium"
                  style={{
                    background: 'var(--color-accent-light)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
