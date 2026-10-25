import { Github, Linkedin, Mail, Zap } from 'lucide-react'

export default function Footer() {
  return <footer className="site-footer shell"><span>© 2026 Ali Hadi Cherid · Portfolio Network</span><nav className="footer-links" aria-label="Footer links"><a href="https://github.com/Okabe-15" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={14} /> GitHub</a><a href="https://www.linkedin.com/in/alihadicherid" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /> LinkedIn</a><a href="mailto:cheridalihadi@gmail.com" aria-label="Email Ali Hadi Cherid"><Mail size={14} /> Email</a></nav><span>Living System Architecture <Zap size={12} /></span></footer>
}
