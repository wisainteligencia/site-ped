import { 
  GraduationCap, 
  Code, 
  Briefcase, 
  Heart, 
  Wrench, 
  Car,
  Palette,
  Brain,
  ArrowRight
} from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    description: "EJA (Fundamental e Médio), Graduação e Pós-Graduação em diversas áreas.",
    examples: ["Serviço Social", "Logística", "Marketing", "Neurociências"],
    color: "bg-primary",
  },
  {
    icon: Briefcase,
    title: "Cursos Técnicos",
    description: "Formações técnicas reconhecidas pelo MEC com certificação válida.",
    examples: ["Administração", "Segurança do Trabalho", "Transações Imobiliárias"],
    color: "bg-accent",
  },
  {
    icon: Code,
    title: "Marketing Digital",
    description: "Domine as ferramentas de tráfego pago, copywriting e vendas online.",
    examples: ["Google Ads", "Meta Ads", "TikTok Ads", "Dropshipping"],
    color: "bg-ped-gold",
  },
  {
    icon: Brain,
    title: "Tecnologia & IA",
    description: "Aprenda a usar Inteligência Artificial para gerar resultados reais.",
    examples: ["ChatGPT", "Midjourney", "Web Design", "WordPress"],
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "Saúde & Estética",
    description: "Cursos práticos para trabalhar com beleza, saúde e bem-estar.",
    examples: ["Cuidador de Idosos", "Alongamento de Unhas", "Extensão de Cílios"],
    color: "bg-accent",
  },
  {
    icon: Palette,
    title: "Design Gráfico",
    description: "Crie artes profissionais e monte sua agência de design.",
    examples: ["Photoshop", "Canva Pro", "Corel Draw", "Agência em Casa"],
    color: "bg-ped-gold",
  },
  {
    icon: Wrench,
    title: "Cursos NR",
    description: "Normas Regulamentadoras obrigatórias para diversas profissões.",
    examples: ["NR 10", "NR 35", "NR 33", "Segurança do Trabalho"],
    color: "bg-primary",
  },
  {
    icon: Car,
    title: "Cursos de Trânsito",
    description: "Habilitações especiais e cursos obrigatórios para motoristas.",
    examples: ["MOPP", "Transporte Escolar", "Transporte de Cargas"],
    color: "bg-accent",
  },
];

const CoursesSection = () => {
  const scrollToAccess = () => {
    document.getElementById("acesso")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cursos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Categorias de Cursos</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Encontre o Curso Ideal para{" "}
              <span className="text-primary">Sua Carreira</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais de 50 cursos profissionalizantes em 8 áreas de conhecimento. 
              Certificados reconhecidos e conteúdo 100% online.
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border shadow-card hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer"
                onClick={scrollToAccess}
              >
                <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {course.examples.slice(0, 3).map((example, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={scrollToAccess}
              className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Ver Todos os Cursos
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
