import { motion, type Variants } from 'framer-motion'
import { personalInfo } from '../../data/portfolioData'
import { TechStackFolder } from '../../components/common/TechStackFolder'
import { InteractiveDotGrid } from '../../components/common/InteractiveDotGrid'

const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

// Mobile: flat list of key tech names shown as chips below CTAs
const mobileTech = ['Java', 'Spring Boot', 'React', 'Docker', 'Redis', 'TypeScript']

export function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center overflow-hidden"
			style={{ background: 'var(--color-bg)' }}
		>
			{/* Interactive dot grid */}
			<InteractiveDotGrid />

			{/* Subtle decorative blobs */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
				<div
					className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
					style={{ background: 'radial-gradient(circle, #c4b5fd, transparent 70%)' }}
				/>
				<div
					className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full opacity-15 blur-3xl"
					style={{ background: 'radial-gradient(circle, #ddd6fe, transparent 70%)' }}
				/>
			</div>

			<div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 w-full">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

					{/* ── Left: Text ── */}
					<motion.div variants={containerVariants} initial="hidden" animate="visible">
						{/* Available badge */}
						<motion.div variants={itemVariants} className="mb-6">
							<span
								className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
								style={{ background: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }}
							>
								<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
								Available for opportunities
							</span>
						</motion.div>

						{/* Name */}
						<motion.h1
							variants={itemVariants}
							className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] leading-[1.1] mb-4"
							style={{ color: 'var(--color-text)' }}
						>
							Ho Dang<br />
							<span className="gradient-text">Hoang</span>
						</motion.h1>

						{/* Role */}
						<motion.p
							variants={itemVariants}
							className="text-base sm:text-lg font-semibold mb-3"
							style={{ color: 'var(--color-accent)' }}
						>
							{personalInfo.title}
						</motion.p>

						{/* Description */}
						<motion.p
							variants={itemVariants}
							className="text-sm sm:text-base leading-relaxed mb-8 max-w-md"
							style={{ color: 'var(--color-text-2)' }}
						>
							I build scalable backend systems with Java &amp; Spring Boot, and ship full-stack products from concept to production.
						</motion.p>

						{/* CTAs */}
						<motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
							<a
								id="hero-contact"
								href={`mailto:${personalInfo.email}`}
								className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 active:scale-95"
								style={{ background: 'var(--color-accent)', color: '#fff' }}
							>
								Get in touch
							</a>
							<a
								id="hero-github"
								href={personalInfo.github}
								target="_blank"
								rel="noreferrer"
								className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
								style={{ background: 'var(--color-surface)', color: 'var(--color-accent)', border: '1.5px solid var(--color-border)' }}
							>
								View GitHub
							</a>
							<a
								id="hero-cv"
								href={personalInfo.cv}
								target="_blank"
								rel="noreferrer"
								className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
								style={{ background: 'var(--color-surface)', color: 'var(--color-accent)', border: '1.5px solid var(--color-border)' }}
							>
								View CV
							</a>
						</motion.div>

						{/* Mobile: tech chips (shown instead of folder) */}
						<motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10 lg:hidden">
							{mobileTech.map((t) => (
								<span
									key={t}
									className="px-3 py-1 rounded-full text-xs font-semibold"
									style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
								>
									{t}
								</span>
							))}
						</motion.div>

						{/* Stats */}
						<motion.div variants={itemVariants} className="flex gap-8">
							{[
								{ value: '3+', label: 'Projects shipped' },
								{ value: '2+', label: 'Companies' },
								{ value: '790', label: 'TOEIC score' },
							].map((stat) => (
								<div key={stat.label}>
									<p className="text-xl sm:text-2xl font-bold font-['Outfit']" style={{ color: 'var(--color-text)' }}>
										{stat.value}
									</p>
									<p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>
										{stat.label}
									</p>
								</div>
							))}
						</motion.div>
					</motion.div>

					{/* ── Right: Tech Stack Folder (desktop only) ── */}
					<motion.div
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
						className="hidden lg:flex flex-col items-center gap-6"
					>
						<TechStackFolder />

						{/* Currently at chip */}
						<div
							className="card px-5 py-3 text-center"
							style={{ minWidth: 200 }}
						>
							<p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-muted)' }}>Currently at</p>
							<p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>Viettel IDC</p>
							<p className="text-xs" style={{ color: 'var(--color-accent)' }}>NOC Intern</p>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	)
}
