import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Abil Biju | AI, ML & Cybersecurity Portfolio";

    const upsertMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name=\"${name}\"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    upsertMeta(
      "description",
      "Portfolio of Abil Biju, a Computer Science student focused on AI, Machine Learning, Cybersecurity, and impactful software projects.",
    );
    upsertMeta("robots", "index, follow");

    const structuredDataId = "person-structured-data";
    if (!document.getElementById(structuredDataId)) {
      const script = document.createElement("script");
      script.id = structuredDataId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Abil Biju",
        jobTitle: "Computer Science Student",
        url: "https://abilbiju.netlify.app/",
        image: "https://abilbiju.netlify.app/IMG_3234.jpg",
        sameAs: [
          "https://github.com/abilbiju",
          "https://linkedin.com/in/abil-biju",
        ],
        knowsAbout: ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Data Science"],
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="px-6 md:px-12 lg:px-24 py-6 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Designed & built with care by Abil Biju
        </p>
      </footer>
    </div>
  );
};

export default Index;
