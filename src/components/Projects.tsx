import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Live Event Detection System",
    description: "Real-time audio-based deep learning system to detect events and automatically send alerts upon detection.",
    tags: ["Deep Learning", "Audio Processing", "Python"],
    link: "https://github.com/abilbiju/LIVE_EVENT_DETECTION",
  },
  {
    title: "Real-Time Doodle Classifier",
    description: "Recognizes and classifies hand-drawn doodles in real-time using Google's Quick Draw dataset, ML, and computer vision.",
    tags: ["Machine Learning", "Computer Vision", "Python"],
    link: "https://github.com/abilbiju/Real_Time_Doodle_Classifier",
  },
  {
    title: "Intrusion Detection System",
    description: "System to monitor network activity and detect potential security threats using Suricata and intrusion detection techniques.",
    tags: ["Cybersecurity", "Suricata", "Networking"],
    link: "https://github.com/abilbiju/CodeAlpha_Cybersecurity_Internship_project",
  },
  {
    title: "Research Paper Analyser",
    description: "Analyze and extract insights from research papers using Large Language Models and LangChain framework.",
    tags: ["LLM", "LangChain", "NLP"],
    link: "https://github.com/abilbiju/research-paper-analyzer",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <p className="label-mono mb-4">Selected Work</p>
      <h2 className="heading-lg mb-16">Projects</h2>
      <div className="grid gap-0 divide-y divide-border">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            className="group grid md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-8 py-8 md:py-10 items-start hover:bg-secondary/50 -mx-4 px-4 transition-colors duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="text-lg font-medium">{project.title}</h3>
            </div>
            <div>
              <p className="body-text text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="label-mono text-[10px] border border-border px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight
              size={20}
              className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 hidden md:block"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
