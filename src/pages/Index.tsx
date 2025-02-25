
import { LanguageToggle } from "@/components/LanguageToggle";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const isMobile = useIsMobile();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setShowMobileMenu(false);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-secondary">
      <LanguageToggle />
      
      {isMobile ? (
        <div className="fixed top-4 left-4 z-50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-gray-300 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          {showMobileMenu && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center" onClick={() => setShowMobileMenu(false)}>
              <nav className="glass-card p-8 w-64">
                <ul className="flex flex-col space-y-6">
                  <li><a href="#skills" className="block text-xl text-gray-300 hover:text-white transition-colors">Skills</a></li>
                  <li><a href="#projects" className="block text-xl text-gray-300 hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#career" className="block text-xl text-gray-300 hover:text-white transition-colors">Career</a></li>
                  <li><a href="#contact" className="block text-xl text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      ) : (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 glass-card px-6 py-2 z-40">
          <ul className="flex space-x-6">
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#career" className="nav-link">Career</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      )}
      
      <div className="container mx-auto px-4">
        <Hero />
        <Skills />
        <Projects />
        <Career />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
