import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export const Contact = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <h2 className="section-title">{language == 'en' ? 'Contact' : 'Contato'}</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 max-w-2xl mx-auto"
      >
        <div className="flex flex-col items-center space-y-6">
          <p className="text-center text-gray-300">

            {
            language == 'en' ? 
            "Let's work together! Feel free to reach out through any of these platforms.":
            "Vamos trabalhar juntos! Sinta-se à vontade para entrar em contato através de qualquer uma dessas plataformas."}
          </p>
          <div className="flex gap-6">
            <a
              href="https://wa.me/5548998451867"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              >
              <MessageCircle className="h-6 w-6" />
              </a>
            <a
              href="mailto:gui.silveiracoelho@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/gui-sc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-silveira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};