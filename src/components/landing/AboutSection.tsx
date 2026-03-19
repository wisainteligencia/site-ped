import { Building2, Target, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Sobre o PED</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                O Portal Educacional que Conecta Você ao{" "}
                <span className="text-primary">Mercado de Trabalho</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                O <strong className="text-foreground">Portal Educacional Digital (PED)</strong> é uma plataforma
                completa de cursos profissionalizantes, integrada ao Hub de Serviços da
                <strong className="text-foreground"> WiSa Inteligência para Negócios</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Nossa missão é democratizar o acesso à educação profissional de qualidade,
                oferecendo cursos que realmente preparam você para as demandas do mercado.
                Do EJA à pós-graduação, dos cursos técnicos às habilidades digitais mais
                requisitadas, temos a formação certa para cada etapa da sua jornada.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-1 bg-gradient-hero rounded-full" />
                <span className="text-sm font-medium text-muted-foreground">
                  Educação que transforma vidas
                </span>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-card hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Target className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Foco em Resultados</h3>
                <p className="text-sm text-muted-foreground">
                  Cursos práticos desenvolvidos para gerar empregabilidade e renda imediata.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-card hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Lightbulb className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Metodologia Moderna</h3>
                <p className="text-sm text-muted-foreground">
                  Conteúdo atualizado com as tendências mais recentes do mercado.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-card hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Crescimento Contínuo</h3>
                <p className="text-sm text-muted-foreground">
                  Trilhas de aprendizado que acompanham sua evolução profissional.
                </p>
              </div>

              <div className="bg-gradient-hero p-6 rounded-2xl shadow-lg text-primary-foreground">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                  <img src="/LogoWisa.png" className="w-8 h-auto object-contain" alt="Logo Wisa" />
                </div>
                <h3 className="font-semibold mb-2">WiSa Hub</h3>
                <p className="text-sm opacity-90">
                  Parte do ecossistema WiSa de soluções para negócios e carreiras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
