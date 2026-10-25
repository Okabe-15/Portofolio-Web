import SectionHeading from './SectionHeading'

const principles = [
  'Full-stack development',
  'REST API integration',
  'Relational databases',
  'AI service integration',
  'Testing and debugging',
]

export default function AboutSection() {
  return (
    <section className="about shell" id="about">
      <SectionHeading
        index="04"
        eyebrow="About me"
        title="Reliable systems,"
        accent="built with purpose."
      />
      <div className="about-content">
        <p>
          I’m Ali Hadi Cherid, a final-year Informatics Engineering student at Universitas Mercu Buana and an aspiring Junior Full-Stack Developer. I build web applications with React, Node.js, Express, Sequelize, and PostgreSQL, and have integrated generative AI, speech-to-text, and text-to-speech services into learning and interview products.
        </p>
        <ul className="about-principles" aria-label="Working principles">
          {principles.map((principle) => <li key={principle}>{principle}</li>)}
        </ul>
      </div>
    </section>
  )
}
