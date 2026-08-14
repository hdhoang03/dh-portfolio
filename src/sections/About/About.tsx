import { SectionWrapper } from '../../components/common/SectionWrapper'
import { SectionTitle } from '../../components/common/SectionTitle'
import { personalInfo } from '../../data/portfolioData'

const contactItems = [
	{ label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
	{ label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
	{ label: 'GitHub', value: 'github.com/hdhoang03', href: personalInfo.github },
	{ label: 'LinkedIn', value: 'linkedin.com/in/dhoang03', href: personalInfo.linkedin },
	{ label: 'Location', value: personalInfo.location, href: undefined },
]

export function About() {
	return (
		<SectionWrapper id="about" alt>
			<div className="grid lg:grid-cols-2 gap-16 items-start">

				{/* Left: Bio */}
				<div>
					<SectionTitle label="About" title="A bit about me." />
					<p className="text-base leading-relaxed mb-5" style={{ color: 'var(--color-text-2)' }}>
						I'm a <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Full-Stack Developer</span> specializing in Java and Spring Boot, currently working as a NOC Intern at <span style={{ fontWeight: 600 }}>Viettel IDC</span> and finishing my Engineer's Degree in IT at Sai Gon University.
					</p>
					<p className="text-base leading-relaxed" style={{ color: 'var(--color-text-2)' }}>
						I thrive in backend architecture — designing APIs, event-driven systems, and containerized services. I care deeply about writing maintainable code and building products that actually work under pressure.
					</p>
				</div>

				{/* Right: Contact list */}
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-muted)' }}>
						Contact
					</h3>
					<dl className="flex flex-col divide-y" style={{ borderColor: 'var(--color-border)' }}>
						{contactItems.map((item) => (
							<div key={item.label} className="flex justify-between items-center py-3.5">
								<dt className="text-sm" style={{ color: 'var(--color-muted)' }}>{item.label}</dt>
								<dd className="text-sm font-medium text-right" style={{ color: 'var(--color-text)' }}>
									{item.href ? (
										<a
											id={`about-${item.label.toLowerCase()}`}
											href={item.href}
											target={item.label === 'GitHub' || item.label === 'LinkedIn' ? '_blank' : undefined}
											rel="noreferrer"
											className="transition-colors hover:text-violet-600"
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
