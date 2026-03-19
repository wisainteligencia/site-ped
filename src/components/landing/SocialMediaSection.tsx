import { Instagram, Facebook } from "lucide-react";

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça Nossas{" "}
              <span className="text-primary">Redes Sociais</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acompanhe nossas novidades, dicas exclusivas e conteúdos educativos. 
              Estamos sempre próximos para apoiar sua jornada de aprendizado.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://instagram.com/portaleducacionaldigital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground text-lg mb-1">Instagram</h3>
                <p className="text-muted-foreground text-sm">@portaleducacionaldigital</p>
              </div>
            </a>

            <a
              href="https://facebook.com/portaleducacionaldigital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground text-lg mb-1">Facebook</h3>
                <p className="text-muted-foreground text-sm">portaleducacionaldigital</p>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-medium text-foreground">Dica:</span> Siga nossas redes sociais para receber 
              conteúdos exclusivos, promoções especiais e ficar por dentro das últimas tendências 
              do mercado educacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
