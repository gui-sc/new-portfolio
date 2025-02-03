import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Project 2",
    description: "Mobile app developed with React Native",
    tech: ["React Native", "Firebase"],
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card p-6 space-y-4 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-sm text-accent bg-accent/10 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
                <Link className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};