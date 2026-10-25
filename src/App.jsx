import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ArchitectureMap from './components/ArchitectureMap'
import ProjectSection from './components/ProjectSection'
import ToolkitSection from './components/ToolkitSection'
import AboutSection from './components/AboutSection'
import SystemMetricsSection from './components/SystemMetricsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SectionHeading from './components/SectionHeading'

export default function App() {
  return <><Navbar /><main id="top"><HeroSection /><section className="architecture shell" id="architecture"><SectionHeading index="01" eyebrow="Living architecture" title="A portfolio you can" accent="navigate like a system." /><p className="section-note">Every module is connected to the way I think, build, and solve. Click a node to inspect the signal.</p><div className="map-frame"><div className="map-toolbar"><span><i className="toolbar-light" /> topology / active</span><span>7 modules connected</span><span>v1.0</span></div><ArchitectureMap /><div className="map-legend"><span><i className="legend-dot cyan" /> module</span><span><i className="legend-line" /> data flow</span><span><i className="legend-dot green" /> active</span></div></div></section><ProjectSection /><ToolkitSection /><AboutSection /><SystemMetricsSection /><ExperienceSection /><ContactSection /></main><Footer /></>
}
