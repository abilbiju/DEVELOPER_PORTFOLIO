import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer className="px-6 md:px-12 lg:px-24 py-6 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Designed & built with care by Abil Biju
        </p>
      </footer>
    </div>
  );
};

export default Index;
