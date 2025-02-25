import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

const skills = {
  technical: [
    "React","TypeScript", "Node.js", "Tailwind",
    "AWS", "Docker", "PostgreSQL", "MySQL", "DynamoDB",
    "Git", "Redis", "NextJS",
  ],
  softEn: [
    "Leadership", "Communication", "Problem Solving",
    "Team Work", "Adaptability", "Time Management", "Proactivity"
  ],
  softPt: [
    "Liderança", "Comunicação", "Resolução de Problemas",
    "Trabalho em Equipe", "Adaptabilidade", "Gestão do Tempo", "Proatividade"
  ]
};

export const Skills = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="py-20">
      <h2 className="section-title">{language == 'en'? "Skills" : "Habilidades"}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-accent">
            {language == 'en' ? "Technical Skills" : "Habilidades Técnicas"}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.technical.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 text-center hover:bg-white/10 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-accent">
            {language == 'en' ? "Soft Skills" : "Habilidades Comportamentais"}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {language == 'en' ? skills.softEn.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 text-center hover:bg-white/10 transition-colors"
              >
                {skill}
              </motion.div>
            )) : skills.softPt.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 text-center hover:bg-white/10 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};