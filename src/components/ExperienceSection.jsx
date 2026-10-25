import SectionHeading from './SectionHeading'

export default function ExperienceSection() {
  return (
    <section className="experience shell" id="experience">
      <SectionHeading
        index="06"
        eyebrow="Experience & education"
        title="Learning through"
        accent="study and practice."
      />
      <article className="experience-entry"><div className="experience-marker" aria-hidden="true"><span /></div><div className="experience-copy"><div className="experience-meta"><span>Internship · Sep–Dec 2024</span><span>South Jakarta</span></div><h3>ERP Consultant Intern</h3><p>PT. Kreatif Dinamika Integrasi — studied Microsoft Dynamics 365 ERP workflows and how enterprise systems support business processes.</p><div className="experience-stack">Microsoft Dynamics 365 <i /> ERP workflows</div></div></article>
      <article className="experience-entry"><div className="experience-marker" aria-hidden="true"><span /></div><div className="experience-copy"><div className="experience-meta"><span>Bachelor’s degree · 2022–2026</span><span>GPA 3.63 / 4.00</span></div><h3>Universitas Mercu Buana</h3><p>Informatics Engineering. Final-year thesis: an English learning application featuring comics generated with generative AI.</p><div className="experience-stack">Software development <i /> Programming <i /> Database management</div></div></article>
      <article className="experience-entry"><div className="experience-marker" aria-hidden="true"><span /></div><div className="experience-copy"><div className="experience-meta"><span>Full-stack bootcamp · Jun–Oct 2026</span><span>Hacktiv8</span></div><h3>Full-Stack Web Development</h3><p>Studied React, Node.js, Express, and PostgreSQL, then applied them to team and individual projects involving APIs, databases, and end-to-end features.</p><div className="experience-stack">React <i /> Node.js <i /> Express <i /> PostgreSQL</div></div></article>
    </section>
  )
}
