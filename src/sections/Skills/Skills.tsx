import { motion } from 'framer-motion'
import { SectionWrapper } from '../../components/common/SectionWrapper'
import { SectionTitle } from '../../components/common/SectionTitle'
import { skillCategories } from '../../data/portfolioData'

// Map skill names to devicon class names (devicons.dev)
const deviconMap: Record<string, string> = {
  Java: 'devicon-java-plain',
  TypeScript: 'devicon-typescript-plain',
  JavaScript: 'devicon-javascript-plain',
  SQL: 'devicon-azuresqldatabase-plain',
  'Spring Boot': 'devicon-spring-plain',
  'Spring MVC': 'devicon-spring-plain',
  'Spring Security': 'devicon-spring-plain',
  'Data JPA': 'devicon-spring-plain',
  ReactJS: 'devicon-react-original',
  Angular: 'devicon-angularjs-plain',
  'Tailwind CSS': 'devicon-tailwindcss-plain',
  MySQL: 'devicon-mysql-plain',
  'SQL Server': 'devicon-microsoftsqlserver-plain',
  PostgreSQL: 'devicon-postgresql-plain',
  Docker: 'devicon-docker-plain',
  'Docker Compose': 'devicon-docker-plain',
  Git: 'devicon-git-plain',
  GitHub: 'devicon-github-original',
  Postman: 'devicon-postman-plain',
  Redis: 'devicon-redis-plain',
  'RESTful APIs': 'devicon-fastapi-plain',
  RabbitMQ: 'devicon-rabbitmq-plain',
  Cloudinary: 'devicon-cloudinary-plain',
}

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="card p-6"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'var(--color-accent)' }}
              />
              <h3
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--color-muted)' }}
              >
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const iconClass = deviconMap[skill]
                return (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-default"
                    style={{
                      background: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                      border: '1px solid transparent',
                      transition: 'border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'transparent'
                    }}
                  >
                    {iconClass ? (
                      <i className={`${iconClass} colored`} style={{ fontSize: '0.9rem' }} />
                    ) : null}
                    {skill}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
