import { useState } from "react";

const skillCategories = [
  {
    category: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Large Language Models", "Computer Vision", "NLP"],
  },
  {
    category: "Languages",
    skills: ["Python", "R", "Java", "SQL", "C"],
  },
  {
    category: "Cybersecurity",
    skills: ["Ethical Hacking", "Intrusion Detection", "Network Monitoring"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Critical Thinking", "Adaptability", "Leadership"],
  },
];

const Skills = () => {
  const [focusedView, setFocusedView] = useState(false);

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="flex items-center justify-between">
        <div>
          <p className="label-mono mb-4">Capabilities</p>
          <h2 className="heading-lg mb-6">Skills</h2>
        </div>
      </div>

      {/* STANDARD VIEW */}
      {!focusedView && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-mono text-sm font-medium mb-4 text-accent">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default Skills;