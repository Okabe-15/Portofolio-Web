import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LivingMap from './components/architecture/LivingMap'
import ProjectSection from './components/ProjectSection'
import ToolkitSection from './components/ToolkitSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <div id="top" className="system-intro-grid shell">
          <HeroSection />
          <LivingMap />
        </div>

        <ProjectSection />
        <ToolkitSection />

        <div className="information-grid shell">
          <AboutSection />
          <ExperienceSection />
        </div>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
