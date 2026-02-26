import { Github, Linkedin, Twitter, Mail, Phone, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/abilbiju" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/abil-biju" },
  { name: "Email", icon: Mail, href: "mailto:abilbiju2004@gmail.com" },
  { name: "Phone", icon: Phone, href: "tel:+919745346436" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Contact</p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
          Let's work together.
        </h2>
        <p className="text-base md:text-lg leading-relaxed opacity-70 mb-12">
          I'm always open to new opportunities, collaborations, and interesting conversations. 
          Feel free to reach out through any of the channels below.
        </p>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-primary-foreground/20 px-5 py-3 text-sm font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
            >
              <social.icon size={16} />
              {social.name}
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
