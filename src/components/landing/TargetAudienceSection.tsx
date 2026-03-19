import { 
  UserCheck, 
  Briefcase, 
  GraduationCap, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const audiences = [
  {
    icon: UserCheck,
    title: "Jovens em Busca do Primeiro Emprego",
    description: "Se você está começando no mercado de trabalho e quer se destacar, nossos cursos técnicos e profissionalizantes vão turbinar seu currículo.",
    highlight: "Certificação que impressiona recrutadores",
  },
  {
    icon: Briefcase,
    title: "Profissionais em Transição de Carreira",
    description: "Quer mudar de área ou se reinventar profissionalmente? Temos cursos em tecnologia, marketing digital e novas profissões em alta.",
    highlight: "Aprenda habilidades do futuro",
  },
  {
    icon: GraduationCap,
    title: "Estudantes que Precisam Concluir os Estudos",
    description: "EJA para Ensino Fundamental e Médio com flexibilidade total. Graduação e Pós-Graduação EAD reconhecidas pelo MEC.",
    highlight: "Formação acadêmica completa",
  },
  {
    icon: TrendingUp,
    title: "Empreendedores Digitais",
    description: "Cursos de marketing digital, tráfego pago, IA e vendas online para quem quer empreender ou monetizar suas habilidades na internet.",
    highlight: "Transforme conhecimento em renda",
  },
];

const TargetAudienceSection = () => {
  const scrollToAccess = () => {
    document.getElementById("acesso")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="para-quem" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <UserCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Para Quem é o PED</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educação Para{" "}
              <span className="text-primary">Todos os Perfis</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Independente de onde você está na sua jornada profissional, 
              temos o curso certo para impulsionar sua carreira.
            </p>
          </div>

          {/* Audience Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-card transition-all group cursor-pointer"
                onClick={scrollToAccess}
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <audience.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {audience.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {audience.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-accent font-medium text-sm">
                      <span>{audience.highlight}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Não Sabe Por Onde Começar?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Acesse nosso portal e explore todos os cursos disponíveis. 
              Você vai encontrar a formação ideal para seus objetivos.
            </p>
            <button
              onClick={scrollToAccess}
              className="inline-flex items-center gap-2 bg-accent-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
            >
              Explorar Cursos
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
