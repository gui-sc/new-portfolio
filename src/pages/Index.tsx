import { LanguageToggle } from "@/components/LanguageToggle";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-secondary">
      <LanguageToggle />
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 glass-card px-6 py-2 z-50">
        <ul className="flex space-x-4">
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="container mx-auto px-4">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;