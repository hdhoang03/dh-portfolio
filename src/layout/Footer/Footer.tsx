import { personalInfo } from '../../data/portfolioData'

export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer
			id="footer"
			className="border-t py-10 px-6 text-center"
			style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
		>
			<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
				<p className="text-sm" style={{ color: 'var(--color-muted)' }}>
					© {year} <span className="font-semibold gradient-text">{personalInfo.name}</span>
				</p>
				<div className="flex items-center gap-6 text-sm" style={{ color: 'var(--color-muted)' }}>
					<a
						id="footer-github"
						href={personalInfo.github}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-violet-600 font-medium"
					>
						GitHub
					</a>
					<a
						id="footer-linkedin"
						href={personalInfo.linkedin}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-violet-600 font-medium"
					>
						LinkedIn
					</a>
					<a
						id="footer-email"
						href={`mailto:${personalInfo.email}`}
						className="flex items-center gap-1.5 transition-colors hover:text-violet-600 font-medium"
					>
						Email
					</a>
				</div>
			</div>
		</footer>
	)
}
