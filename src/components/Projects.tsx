import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

type Project = {
    name: string;
    description: {
        pt: string;
        en: string;
    };
    preview: string;
};

const projects: Project[] = [
    {
        name: "Door Grill",
        description: {
            pt: "Este é um projeto de uma landing page para uma empresa de lareiras, churrasqueiras e grelhas, voltada para a solução de fechamento de lareira, apresentando os produtos, comparações, vídeos, fotos.",
            en: "This is a landing page project for a company specializing in fireplaces, grills, and grates, focused on the solution for fireplace closure, showcasing products, comparisons, videos, and photos.",
        },
        preview: "https://fechamentodelareira.doorgrillprojetos.com.br/",
    },
    {
        name: "Hapri Studio",
        description: {
            pt: "Este site é um site voltado para os trabalhos e resultados de um estúdio de design, com um design moderno e minimalista, traz uma experiência agradável e intuitiva.",
            en: "This site is a site focused on the works and results of a design studio, with a modern and minimalist design, it brings a pleasant and intuitive experience.",
        },
        preview: "https://hapristudio.com.br/",
    },
    {
        name: "Mentoria Irmãos Margutti",
        description: {
            pt: "Este foi um projeto de uma landing page para uma mentoria de odontologia, com um design moderno e objetivo, com seção de apresentação, depoimentos, apresentação dos tutores, preços e promoções.",
            en: "This was a project of a landing page for a dentistry mentoring, with a modern and objective design, with a presentation section, testimonials, presentation of the tutors, prices and promotions.",
        },
        preview: "https://mentoria.institutomargutti.com.br/",
    },
    {
        name: "Usa Web Visa",
        description: {
            pt: "Esta é uma landing page para um serviço de assessoria de imigração, com um design moderno e objetivo, com seção de apresentação, áreas de atuação, depoimentos e formulário de contato.",
            en: "This is a landing page for an immigration consulting service, with a modern and objective design, featuring a presentation section, areas of expertise, testimonials, and a contact form.",
        },
        preview: "https://usawebvisa.com/",
    },
    {
        name: "HB Films",
        description: {
            pt: "Este site é um site voltado para os projetos e trabalhos de um videomaker, tendo um design moderno, com animações e efeitos de rolagem, traz uma experiência agradável e interativa.",
            en: "This site is a site focused on the projects and works of a videomaker, having a modern design, with animations and scrolling effects, it brings a pleasant and interactive experience.",
        },
        preview: "https://hbfilms.com.br/",
    },
    {
        name: "Colder Company",
        description: {
            pt: "Este é um site E-Commerce para uma loja de camisetas streetwear, com um design moderno, esse projeto traz uma experiência de compra agradável e intuitiva, com seção de produtos, carrinho de compras e checkout.",
            en: "This is an E-Commerce website for a streetwear t-shirt store, with a modern design, this project brings a pleasant and intuitive shopping experience, with a product section, shopping cart and checkout.",
        },
        preview: "https://coldercompany.com.br/",
    },
    {
        name: "Edenise Silveira",
        description: {
            pt: "Este é um projeto feito para uma cliente advogada, possui um design simples e objetivo, com seção de apresentação, áreas de atuação, e blog com posts de ajuda ao direito previdenciário.",
            en: "This is a project made for a lawyer client, it has a simple and objective design, with a presentation section, areas of practice, and a blog with posts to help with social security law.",
        },
        preview: "https://edenisesilveira.adv.br/",
    },
    {
        name: "Dieize Oliveira",
        description: {
            pt: "Este é um projeto para uma cliente psicóloga, possui um design aconchegante e confortável, com aspécto de acolhimento e cuidado, com seção de apresentação, área de terapia e blog com posts de ajuda psicológica.",
            en: "This is a project for a psychologist client, it has a cozy and comfortable design, with an aspect of welcoming and care, with a presentation section, therapy area and blog with posts of psychological help.",
        },
        preview: "https://psicologa-dieize.com.br",
    },
];

export const Projects = () => {
    const { language } = useLanguage();

    return (
        <section id="projects" className="py-20">
            <h2 className="section-title">
                {language == "en" ? "Projects" : "Projetos"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card p-6 space-y-4 hover:bg-white/10 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold">
                            {project.name}
                        </h3>
                        <p className="text-gray-400">
                            {project.description[language]}
                        </p>

                        <div className="flex gap-4">
                            {project.preview && (
                                <a
                                    href={project.preview}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Link className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
