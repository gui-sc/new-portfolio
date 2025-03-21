import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const projects = [
  {
    name: 'Edenise Silveira',
    description: {
      pt: 'Este é um projeto feito para uma cliente advogada, possui um design simples e objetivo, com seção de apresentação, áreas de atuação, e blog com posts de ajuda ao direito previdenciário.',
      en: 'This is a project made for a lawyer client, it has a simple and objective design, with a presentation section, areas of practice, and a blog with posts to help with social security law.'
    },
    preview: 'https://edenisesilveira.adv.br/'
  },
  {
    name: 'Dieize Oliveira',
    description: {
      pt: 'Este é um projeto para uma cliente psicóloga, possui um design aconchegante e confortável, com aspécto de acolhimento e cuidado, com seção de apresentação, área de terapia e blog com posts de ajuda psicológica.',
      en: 'This is a project for a psychologist client, it has a cozy and comfortable design, with an aspect of welcoming and care, with a presentation section, therapy area and blog with posts of psychological help.'
    },
    preview: 'https://psicologa-dieize.com.br'
  },
  {
    name: 'HB Films',
    description: {
      pt: 'Este site é um site voltado para os projetos e trabalhos de um videomaker, tendo um design moderno, com animações e efeitos de rolagem, traz uma experiência agradável e interativa.',
      en: 'This site is a site focused on the projects and works of a videomaker, having a modern design, with animations and scrolling effects, it brings a pleasant and interactive experience.'
    },
    preview: 'https://hbfilms.com.br/'
  },
  {
    name: 'Colder Company',
    description: {
      pt: 'Este é um site E-Commerce para uma loja de camisetas streetwear, com um design moderno, esse projeto traz uma experiência de compra agradável e intuitiva, com seção de produtos, carrinho de compras e checkout.',
      en: 'This is an E-Commerce website for a streetwear t-shirt store, with a modern design, this project brings a pleasant and intuitive shopping experience, with a product section, shopping cart and checkout.'
    },
    preview: 'https://colder-company.vercel.app/'
  },
  {
    name: 'Hapri Studio',
    description: {
      pt: 'Este site é um site voltado para os trabalhos e resultados de um estúdio de design, com um design moderno e minimalista, traz uma experiência agradável e intuitiva.',
      en: 'This site is a site focused on the works and results of a design studio, with a modern and minimalist design, it brings a pleasant and intuitive experience.'
    },
    preview: 'https://hapri-studio.vercel.app/'
  },
  {
    name: 'Mentoria Irmãos Margutti',
    description: {
      pt: 'Este foi um projeto de uma landing page para uma mentoria de odontologia, com um design moderno e objetivo, com seção de apresentação, depoimentos, apresentação dos tutores, preços e promoções.',
      en: 'This was a project of a landing page for a dentistry mentoring, with a modern and objective design, with a presentation section, testimonials, presentation of the tutors, prices and promotions.'
    },
    preview: 'https://mentoria-irmaos-margutti.vercel.app/'
  },
  {
    name: "New Portfolio",
    description: {
        pt: `Este é o meu novo portfólio, onde eu mostro os meus projetos e habilidades. Foi meu primeiro projeto 
      que foi publicado em um domínio na internet. Ele foi desenvolvido pensando em ter um aspecto mais profissional
        e que demonstrasse mais as minhas habilidades. Pretendo manter ele sempre atualizado e melhorar ele sempre
      que possível.
    `,
        en: `This is my new portfolio, where I showcase my projects and skills. It was developed thinking about having a more professional look
        and that demonstrated more my skills. I intend to keep it updated and improve it whenever possible.`
    },
    preview: "https://guilhermesilveira.dev/",
},
  {
      name: "Portfolio",
      description: {
          pt: `Este é o meu antigo portfólio.
      `,
          en: `This is my old portfolio.`
      },
      preview: "https://portfolio-indol-one-99.vercel.app/",
  },
  {
      name: "Rosacleo",
      description: {
          en: `This is a Mocked E-commerce Web App. This Web App was made for a friend's high school project. The main goal of this project was to create a simple and responsive e-commerce website, with a focus on the user experience. The website has a product page, a cart page, and a checkout page, as well as a discount coupon.`,
          pt: `Este é um Web App de E-commerce fictício. Este Web App foi feito para um projeto de ensino médio de um amigo. O principal objetivo deste projeto era criar um site de e-commerce simples e responsivo, com foco na experiência do usuário. O site possui uma página de produto, uma página de carrinho e uma página de checkout, além de cupom de desconto.`
      },
      preview: "https://rosacleo.vercel.app",
  },
  {
      name: 'Page Flow',
      description: {
          en: `This project is a Pomodoro timer with a kindle-like design. The main goal is to help people to 
          focus on their books and studies. This project 
          was made for a friend's college project from the course of Advertising and Marketing.`,
          pt: `Este projeto é um timer Pomodoro com um design semelhante ao kindle. O principal objetivo 
          é ajudar as pessoas a se concentrarem em seus livros e estudos. Este projeto foi feito para um projeto da faculdade de um amigo do curso de 
          Publicidade e Marketing.`
      },
      preview: 'https://page-flow-smoky.vercel.app/',
  },
  {
    name: 'Advogado',
    description: {
      pt: 'Este é um site de exemplo para possíveis advogados, com um design moderno e objetivo, traz uma experiência agradável e intuitiva, com seção de apresentação, áreas de atuação, blog e contato.',
      en: 'This is an example site for possible lawyers, with a modern and objective design, it brings a pleasant and intuitive experience, with a presentation section, areas of practice, blog and contact.'
    },
    preview: 'https://exemplo-advogado.vercel.app/'
  },
  {
    name: 'Hotel',
    description: {
      pt: 'Este é um site de exemplo para possíveis hotéis, com um design moderno e objetivo, traz uma experiência agradável e intuitiva, com seção de apresentação, atrações próximas, quartos, serviços e contato.',
      en: 'This is an example site for possible hotels, with a modern and objective design, it brings a pleasant and intuitive experience, with a presentation section, nearby attractions, rooms, services and contact.'
    },
    preview: 'https://hotel-site-experience.vercel.app/'
  },
  {
    name: 'Social Media',
    description: {
      pt: 'Este é um site de exemplo para possíveis social medias, com um design moderno e objetivo, traz uma experiência agradável e intuitiva, com seção de apresentação, serviços, blog e contato.',
      en: 'This is an example site for possible social medias, with a modern and objective design, it brings a pleasant and intuitive experience, with a presentation section, services, blog and contact.'
    },
    preview: 'https://exemplo-social-media.vercel.app/'
  },
  {
    name: 'Nutri',
    description: {
      pt: 'Este é um site de exemplo para possiveis nutricionistas, com um design moderno e objetivo, traz uma experiência agradável e intuitiva, com seção de apresentação, serviços, blog e contato.',
      en: 'This is an example site for possible nutritionists, with a modern and objective design, it brings a pleasant and intuitive experience, with a presentation section, services, blog and contact.'
    },
    preview: 'https://exemplo-nutricionista.vercel.app/'
  },
  {
    name: 'Foto Studio',
    description: {
      pt: 'Este é um site de exemplo para possíveis fotógrafos, com um design moderno e objetivo, traz uma experiência agradável e intuitiva, com seção de apresentação, portfólio, blog e contato.',
      en: 'This is an example site for possible photographers, with a modern and objective design, it brings a pleasant and intuitive experience, with a presentation section, portfolio, blog and contact.'
    },
    preview: 'https://exemplo-fotografo.vercel.app/'
  },
  {
    name: 'Psicólogo',
    description: {
      pt: 'Este é um site de exemplo para possíveis psicólogos, com um design moderno e objetivo, traz uma experiência agradável e intuitiva, com seção de apresentação, serviços, blog e contato.',
      en: 'This is an example site for possible psychologists, with a modern and objective design, it brings a pleasant and intuitive experience, with a presentation section, services, blog and contact.'
    },
    preview: 'https://exemplo-psicologa.vercel.app/'
  }
]

export const Projects = () => {
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <h2 className="section-title">{language == "en" ? "Projects" : "Projetos"}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 space-y-4 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400">{project.description[language]}</p>
            
             <div className="flex gap-4">
              {project.preview && <a href={project.preview} className="text-gray-400 hover:text-white transition-colors">
                <Link className="h-5 w-5" />
              </a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};