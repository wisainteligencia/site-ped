import { Link } from "react-router-dom";
import { Shield, Award, Clock, MessageCircle, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section id="acesso" className="py-20 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ped-blue-light via-background to-ped-green-light opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Top Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-ped-green-light px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Acesso Seguro</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Comece Sua Jornada de{" "}
              <span className="text-primary">Transformação</span>{" "}
              Agora Mesmo
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Acesse o Portal Educacional Digital e descubra todos os cursos
              disponíveis. Escolha sua formação, faça sua matrícula e comece
              a estudar imediatamente.
            </p>

            {/* Trust Points - Horizontal */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground text-sm">Certificado Reconhecido</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground text-sm">Acesso Anual</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground text-sm">Suporte Dedicado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - CTA Button */}
          <div className="w-full">
            <div className="bg-card p-4 md:p-6 rounded-3xl shadow-xl border border-border animate-pulse-glow">
              <Link 
                to="https://eadon.com.br/ped" 
                className="block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg flex items-center justify-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    <ExternalLink className="w-5 h-5" />
                    Acessar Portal Educacional
                    <Shield className="w-5 h-5" />
                  </span>
                </button>
              </Link>

              <p className="text-sm text-center text-muted-foreground mt-4">
                Ambiente seguro • Pagamento facilitado • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
