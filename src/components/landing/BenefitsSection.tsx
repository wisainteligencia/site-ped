import { 
  Clock, 
  Award, 
  Smartphone, 
  DollarSign, 
  HeadphonesIcon, 
  RefreshCw,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Estude no Seu Tempo",
    description: "Acesse as aulas quando e onde quiser. O conteúdo fica disponível 24h por dia, 7 dias por semana.",
  },
  {
    icon: Award,
    title: "Certificado Reconhecido",
    description: "Todos os cursos emitem certificado válido em todo território nacional para fortalecer seu currículo.",
  },
  {
    icon: Smartphone,
    title: "100% Online",
    description: "Assista pelo celular, tablet ou computador. Sem necessidade de presença física em nenhum momento.",
  },
  {
    icon: DollarSign,
    title: "Preços Acessíveis",
    description: "Cursos a partir de R$ 97,00 com pagamento facilitado. Invista pouco e ganhe muito em conhecimento.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte via WhatsApp",
    description: "Tire suas dúvidas diretamente pelo WhatsApp com nossa equipe de atendimento especializada.",
  },
  {
    icon: RefreshCw,
    title: "Conteúdo Atualizado",
    description: "Material sempre atualizado com as últimas tendências e exigências do mercado de trabalho.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ped-blue-light rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ped-green-light rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-ped-green-light px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Por Que Escolher o PED</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefícios que Fazem{" "}
              <span className="text-primary">a Diferença</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Muito mais do que cursos online. Uma experiência completa de aprendizado 
              focada no seu sucesso profissional.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-card transition-all hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
