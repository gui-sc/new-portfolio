import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

interface CareerItem {
  company: string;
  period: string;
  role: string;
  description: {
    en: string;
    pt: string;
  };
}

const careerData: CareerItem[] = [
  {
    company: "Tech Corp",
    period: "2021 - Present",
    role: "Senior Software Engineer",
    description: {
      en: "Led development of multiple high-impact projects, mentored junior developers, and implemented best practices that improved team productivity by 30%.",
      pt: "Liderou o desenvolvimento de vários projetos de alto impacto, mentorou desenvolvedores juniores e implementou melhores práticas que melhoraram a produtividade da equipe em 30%."
    }
  },
  {
    company: "Innovation Labs",
    period: "2019 - 2021",
    role: "Full Stack Developer",
    description: {
      en: "Developed and maintained multiple web applications using React and Node.js, improving application performance by 40%.",
      pt: "Desenvolveu e manteve múltiplas aplicações web usando React e Node.js, melhorando o desempenho das aplicações em 40%."
    }
  },
  {
    company: "Digital Solutions",
    period: "2018 - 2019",
    role: "Frontend Developer",
    description: {
      en: "Created responsive web interfaces and implemented new features for client applications using React and TypeScript.",
      pt: "Criou interfaces web responsivas e implementou novos recursos para aplicações de clientes usando React e TypeScript."
    }
  }
];

export const Career = () => {
  const { language } = useLanguage();

  return (
    <section id="career" className="py-20">
      <h2 className="section-title">
        {language === 'en' ? 'Career Timeline' : 'Linha do Tempo Profissional'}
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
                  <span className="text-sm text-gray-400">{item.period}</span>
                </div>
                <p className="mb-2 text-accent">{item.role}</p>
                <p className="text-gray-300">
                  {language === 'en' ? item.description.en : item.description.pt}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};