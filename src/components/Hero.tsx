import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const fullName = "Abil Biju.";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;
    let restartTimer: ReturnType<typeof setTimeout>;
    let i = 0;

    const typeName = () => {
      if (i <= fullName.length) {
        setTypedName(fullName.slice(0, i));
        i += 1;
        typingTimer = setTimeout(typeName, 130); // typing speed
      } else {
        restartTimer = setTimeout(() => {
          setTypedName("");
          i = 0;
          typeName();
        }, 5000); // wait 5s, then type again
      }
    };

    typeName();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(restartTimer);
    };
  }, []);

  return (
    <section className="section-padding min-h-[90vh] flex flex-col justify-end">
      <div className="max-w-5xl w-full relative">
       <img src="/IMG_3234.jpg"
      alt="Profile photo of Abil Biju"
      className="h-32 w-32 md:h-60 md:w-60 rounded-full object-cover
             border border-border
             grayscale contrast-110 brightness-95
             opacity-75
             animate-fade-in-up
             md:absolute md:right-10 md:top-[5%] md:-translate-y-1/2
             transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      style={{ animationDelay: "0.05s", opacity: 0 }}
/>

        <div className="max-w-6xl md:pr-60">
          <p className="label-mono mb-6 animate-fade-in-up">Developer Portfolio v2.0.0 </p>
          <h1 className="heading-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Hi, I'm <span className="text-accent">{typedName}</span>
            <span className="typing-cursor" aria-hidden="true" />
            <br />
          </h1>
          <p className="body-text max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            B.Tech Computer Science (Data Science) student passionate about Artificial Intelligence,
            Machine Learning, Cybersecurity and crafting impactful real-world solutions.
          </p>
          <div className="flex gap-6 items-center animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
              Get in touch <ArrowUpRight size={16} />
            </a>
            <a href="#projects" className="link-underline text-sm font-medium tracking-wide">
              View work
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
        </div>
      </div>
    </section>
  );
};

export default Hero;