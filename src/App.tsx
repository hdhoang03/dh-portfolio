import { Header } from './layout/Header/Header'
import { Footer } from './layout/Footer/Footer'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Skills } from './sections/Skills/Skills'
import { Experience } from './sections/Experience/Experience'
import { Projects } from './sections/Projects/Projects'
import { Education } from './sections/Education/Education'
import { MarqueeBanner } from './components/common/MarqueeBanner'

function App() {
	return (
		<div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
			<Header />
			<main>
				<Hero />
				<MarqueeBanner text="About me" />
				<About />
				<MarqueeBanner text="Skills & Technologies" reverse />
				<Skills />
				<MarqueeBanner text="Work Experience" />
				<Experience />
				<MarqueeBanner text="Projects" reverse />
				<Projects />
				<MarqueeBanner text="Education & Certifications" />
				<Education />
			</main>
			<Footer />
		</div>
	)
}

export default App
