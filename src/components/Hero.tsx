import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";

export const Hero = () => {
  const { language } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const [displayOccupation, setDisplayOccupation] = useState("");
  const fullName = language == 'en' ? "Hi, I'm Guilherme Silveira" : "Olá, eu sou Guilherme Silveira";
  const occupation = language =='en' ?'Full Stack Developer' : "Desenvolvedor Full Stack";

  useEffect(() => {
    setDisplayText("");
    setDisplayOccupation("");
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          clearInterval(interval);
          handleDisplayOccupation();
        }, 300); // Adjust delay before displaying occupation here
      }
    }, 100); // Adjust speed of typing here

    return () => clearInterval(interval);
  }, [language]);

  const handleDisplayOccupation = () => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= occupation.length) {
        setDisplayOccupation(occupation.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed of typing here

    return () => clearInterval(interval);
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold relative"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute ml-1 -mr-1"
          >
            |
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400"
        >
          {displayOccupation}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute ml-1 -mr-1"
          >
            |
          </motion.span>
        </motion.p>
      </div>
    </section>
  );
};