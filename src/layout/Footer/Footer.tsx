import { GitBranch, Link2, Mail, FileText, ArrowUp } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'

const socials = [
	{ id: 'footer-github', label: 'GitHub', href: personalInfo.github, icon: GitBranch },
	{ id: 'footer-linkedin', label: 'LinkedIn', href: personalInfo.linkedin, icon: Link2 },
	{ id: 'footer-email', label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
	{ id: 'footer-cv', label: 'CV', href: personalInfo.cv, icon: FileText },
]

export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer
			id="footer"
			className="border-t"
			style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
		>
			{/* CTA strip */}
			{/* <div
				className="py-14 px-6 text-center"
				style={{ background: 'linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-surface) 100%)' }}
			>
				<p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
					Open to opportunities
				</p>
				<h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] mb-2" style={{ color: 'var(--color-text)' }}>
					Let's build something{' '}
					<span className="gradient-text">together.</span>
				</h2>
				<p className="text-sm mb-6 max-w-sm mx-auto" style={{ color: 'var(--color-muted)' }}>
					I'm actively looking for backend / full-stack roles. Drop me a message!
				</p>
				<a
					href={`mailto:${personalInfo.email}`}
					id="footer-contact-cta"
					className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 active:scale-95"
					style={{ background: 'var(--color-accent)', color: '#fff' }}
				>
					<Mail size={15} />
					Say hello →
				</a>
			</div> */}

			{/* Bottom bar */}
			<div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
				{/* Left: copyright */}
				<p className="text-sm order-2 sm:order-1" style={{ color: 'var(--color-muted)' }}>
					© {year}{' '}
					<span className="font-semibold gradient-text">{personalInfo.name}</span>
					{' '}
				</p>

				{/* Right: socials + back-to-top */}
				<div className="flex items-center gap-5 order-1 sm:order-2">
					{socials.map(({ id, label, href, icon: Icon }) => (
						<a
							key={id}
							id={id}
							href={href}
							target={href.startsWith('mailto') ? undefined : '_blank'}
							rel="noreferrer"
							title={label}
							className="transition-all hover:scale-110"
							style={{ color: 'var(--color-muted)' }}
							onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
							onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-muted)')}
						>
							<Icon size={18} />
						</a>
					))}

					{/* Back to top */}
					<button
						id="back-to-top"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className="ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
						style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
						aria-label="Back to top"
					>
						<ArrowUp size={14} />
					</button>
				</div>
			</div>
		</footer>
	)
}
