import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LivingMap from './components/architecture/LivingMap'
import ProjectSection from './components/ProjectSection'
import ToolkitSection from './components/ToolkitSection'
import AboutSection from './components/AboutSection'
import SystemMetricsSection from './components/SystemMetricsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState('toko')

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <div id="top" className="system-intro-grid shell">
          <HeroSection />
          <LivingMap />
        </div>

        <ProjectSection selectedProjectId={selectedProjectId} onSelectProject={setSelectedProjectId} />
        <ToolkitSection selectedProjectId={selectedProjectId} />

        <div className="information-grid shell">
          <AboutSection />
          <ExperienceSection />
          <SystemMetricsSection />
        </div>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
