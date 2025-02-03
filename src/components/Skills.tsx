import { motion } from "framer-motion";

const skills = {
  technical: [
    "React", "TypeScript", "Node.js", "Python",
    "AWS", "Docker", "GraphQL", "MongoDB"
  ],
  soft: [
    "Leadership", "Communication", "Problem Solving",
    "Team Work", "Adaptability", "Time Management"
  ]
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-accent">Technical Skills</h3>
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
          <h3 className="text-xl font-semibold text-accent">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.soft.map((skill, index) => (
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