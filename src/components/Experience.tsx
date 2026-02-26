const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "KeyValue Software Systems",
    period: "June 2025",
    description: "Worked on AI-driven applications using Large Language Models and Machine Learning. Applied AI techniques to coding workflows and contributed to intelligent, real-world software solutions.",
  },
  {
    role: "Cybersecurity Intern",
    company: "CodeAlpha",
    period: "August 2024",
    description: "Gained practical experience in phishing analysis, DDoS attack concepts, and CTF challenges. Worked with intrusion detection systems for network monitoring and threat detection.",
  },
  {
    role: "Data Science Intern",
    company: "Orbo.ai",
    period: "Apr 2023 — Jun 2023",
    description: "Applied machine learning algorithms, data collection techniques, and model training workflows. Worked on data preprocessing, noise removal, and improving data quality for effective analysis.",
  },
];

const certifications = [
  "Data Science: Visualization — HarvardX",
  "Certified Ethical Hacker — CISCO",
  "Introduction to Cloud Computing — edX IBM",
  "Cloud Essentials — AWS",
  "Data Analytics — Deloitte",
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <p className="label-mono mb-4">Career</p>
      <h2 className="heading-lg mb-16">Experience</h2>
      <div className="space-y-0 divide-y divide-border">
        {experiences.map((exp, i) => (
          <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-8 md:py-10">
            <div>
              <p className="font-mono text-xs text-muted-foreground mb-1">{exp.period}</p>
              <p className="text-sm font-medium text-accent">{exp.company}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">{exp.role}</h3>
              <p className="body-text text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <h2 className="heading-lg mb-16">Certifications</h2>
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <span key={cert} className="text-base border border-border px-3 py-2 text-grey">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-6 items-start">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          Download Resume ↓
        </a>
        <a
          href="https://abilbiju.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-sm font-medium text-muted-foreground"
        >
          View previous portfolio →
        </a>
      </div>
    </section>
  );
};

export default Experience;
