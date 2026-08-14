import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionWrapper } from '../../components/common/SectionWrapper'
import { SectionTitle } from '../../components/common/SectionTitle'
import { projects } from '../../data/portfolioData'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="Projects"
        title="Things I've built"
        subtitle="A selection of work from real-time streaming to e-commerce backends."
      />

      {/* Featured projects */}
      <div className="flex flex-col gap-10 mb-16">
        {featured.map((project, index) => (
          <motion.article
            key={project.title}
            id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className={`grid lg:grid-cols-2 gap-8 items-center`}
          >
            {/* Image or placeholder */}
            <div
              className={`relative rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}
              style={{ minHeight: 224 }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 object-cover"
                />
              ) : (
                <div
                  className="w-full h-56 sm:h-64"
                  style={{ background: 'linear-gradient(135deg, #f3f0ff 0%, #e9e3ff 50%, #f0ebff 100%)' }}
                />
              )}
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="tag">{project.type}</span>
                <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{project.period}</span>
              </div>

              <h3 className="text-2xl font-bold font-['Outfit'] mb-1" style={{ color: 'var(--color-text)' }}>
                {project.title}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--color-accent)' }}>
                {project.subtitle}
              </p>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-2)' }}>
                {project.description}
              </p>

              <ul className="flex flex-col gap-1.5 mb-5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-sm flex gap-2.5 leading-relaxed" style={{ color: 'var(--color-text-2)' }}>
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--color-accent)' }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-xs font-medium"
                    style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-2)', border: '1px solid var(--color-border)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm font-semibold">
                {project.github && (
                  <a
                    href={project.github}
                    id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}-github`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-violet-600"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    View Source →
                  </a>
                )}
                {project.liveDemo && project.liveDemo !== '#' && (
                  <a
                    href={project.liveDemo}
                    id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}-demo`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 transition-colors hover:text-violet-600"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Other projects */}
      {others.length > 0 && (
        <>
          <h3 className="text-base font-semibold mb-6" style={{ color: 'var(--color-muted)' }}>
            More projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((project, index) => (
              <motion.div
                key={project.title}
                id={`project-other-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="tag">{project.type}</span>
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{project.period.split('–')[0].trim()}</span>
                </div>
                <h4 className="text-lg font-bold font-['Outfit'] mb-1" style={{ color: 'var(--color-text)' }}>
                  {project.title}
                </h4>
                <p className="text-sm mb-4 flex-1 leading-relaxed" style={{ color: 'var(--color-text-2)' }}>
                  {project.highlights[0]}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="text-xs font-semibold transition-colors hover:text-violet-600"
                    style={{ color: 'var(--color-accent)' }}>
                    View Source →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  )
}
