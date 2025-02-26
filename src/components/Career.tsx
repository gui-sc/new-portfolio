import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

interface CareerItem {
  company: string;
  start: string;
  end?: string;
  role: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
}

const careerData: CareerItem[] = [
  {
    company: "Regulatório Mais",
    start: "2023",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack"
    },
    description: {
      en: "I work as a software developer and Tech Lead at Regulatório Mais, where I work with technologies such as React, Typescript, Express, using AWS Cloud for deployment. The project consists of a regulatory obligations management system for financial institutions, including features such as deadline control, notifications, and report generation.",
      pt: "Sou desenvolvedor de software e Tech Lead na Regulatório Mais, onde trabalho com tecnologias como React, Typescript, Express, utilizando AWS Cloud para deploy. O projeto consiste em um sistema de gestão de obrigações regulatórias para instituições financeiras, incluindo funcionalidades como controle de prazos, notificações e geração de relatórios."
    }
  },
  {
    company: "Convem Store",
    start: "2022",
    end: "2023",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack"
    },
    description: {
      en: "I was hired by Convem Store, a software house focused on solutions for fintechs, where I worked on several projects, using technologies such as React, Typescript, Node.js, Express, and databases PostgreSQL and AWS DynamoDB.",
      pt: "Fui contratado pela Convem Store, uma software house voltada para soluções para fintechs, onde trabalhei em diversos projetos, usando tecnologias como React, Typescript, Node.js, Express, e banco de dados PostgreSQL e AWS DynamoDB."
    }
  },
];

export const Career = () => {
  const { language } = useLanguage();

  return (
    <section id="career" className="py-20">
      <h2 className="section-title">
        {language === 'en' ? 'Career Timeline' : 'Carreira Profissional'}
      </h2>
      <div className="space-y-8">
        {careerData.map((item, index) => (
          <div
            key={index}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-accent before:content-[''] animate-fade-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-accent" />
            <Card className="glass-card overflow-hidden">
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{item.company}</h3>
                  <span className="text-sm text-gray-400">{item.start} - {item.end ? item.end : language == 'en' ? 'Present' : 'Presente'}</span>
                </div>
                <p className="mb-2 text-accent">{item.role[language]}</p>
                <p className="text-gray-300">
                  {item.description[language]}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};