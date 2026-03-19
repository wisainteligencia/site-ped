import { ArrowRight, PlayCircle, Shield, Award, Users, BookOpen, BookCheck, Check, CheckCheck } from "lucide-react";

const HeroSection = () => {
  const scrollToAccess = () => {
    document.getElementById("acesso")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-ped-blue-light opacity-80" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23125cb2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm mb-6 animate-fade-in">
            <BookCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Conhecimento aplicado à realidade empresarial
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transforme Seu Futuro com{" "}
            <span className="text-primary">Cursos Profissionalizantes</span>{" "}
            Online
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Capacitação profissional de qualidade, 100% online e com certificado reconhecido. 
            Do básico ao avançado, encontre o curso ideal para alavancar sua carreira.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={scrollToAccess}
              className="inline-flex items-center justify-center gap-2 bg-gradient-cta text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-cta hover:opacity-90 transition-all transform hover:scale-105 animate-pulse-glow"
            >
              Acessar Cursos Agora
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg border border-border hover:border-primary hover:bg-secondary transition-all"
            >
              <PlayCircle className="w-5 h-5 text-primary" />
              Conhecer Categorias
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-ped-gold" />
              <span className="text-sm font-medium">Certificado Válido</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Resultados Reais</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">100% Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
