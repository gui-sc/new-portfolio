
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
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const isMobile = useIsMobile();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setShowMobileMenu(false);
    }
  }, [isMobile]);

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setShowMobileMenu(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
          
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center" 
                onClick={() => setShowMobileMenu(false)}
              >
                <motion.nav 
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ 
                    duration: 0.4, 
                    type: "spring", 
                    stiffness: 100 
                  }}
                  className="glass-card p-8 w-64"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul className="flex flex-col space-y-6">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <a 
                        href="#skills" 
                        className="block text-xl text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => scrollToSection(e, "skills")}
                      >
                        Skills
                      </a>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <a 
                        href="#projects" 
                        className="block text-xl text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => scrollToSection(e, "projects")}
                      >
                        Projects
                      </a>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a 
                        href="#career" 
                        className="block text-xl text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => scrollToSection(e, "career")}
                      >
                        Career
                      </a>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <a 
                        href="#contact" 
                        className="block text-xl text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => scrollToSection(e, "contact")}
                      >
                        Contact
                      </a>
                    </motion.li>
                  </ul>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 glass-card px-6 py-2 z-40">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#skills" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#career" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, "career")}
              >
                Career
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
              </a>
            </li>
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
