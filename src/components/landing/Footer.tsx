import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import logoPedFooter from "@/assets/logo-ped-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-foreground rounded-xl p-2">
                  <img 
                    src={logoPedFooter} 
                    alt="PED - Portal Educacional Digital" 
                    className="h-10 w-auto"
                  />
                </div>
              </div>
              
              <p className="opacity-80 mb-6 max-w-md leading-relaxed">
                Capacitação profissional online de qualidade. Cursos reconhecidos, 
                certificados válidos e conteúdo atualizado para impulsionar sua carreira.
              </p>
              
              <a
                href="https://eadon.com.br/ped"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Acessar Portal Completo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Algumas áreas de Cursos</h4>
              <ul className="space-y-3">
                <li>
                  <span className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    Formação Acadêmica
                  </span>
                </li>
                <li>
                  <span className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    Cursos Técnicos
                  </span>
                </li>
                <li>
                  <span className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    Marketing Digital
                  </span>
                </li>
                <li>
                  <span className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    Tecnologia & IA
                  </span>
                </li>
                <li>
                  <span className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    Design Gráfico
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="opacity-80">(32) 98709-4390</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="opacity-80 whitespace-nowrap">suporte@portaleducacionaldigital.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="opacity-80">100% Digital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-60 text-center md:text-left">
              © {currentYear} Portal Educacional Digital. Todos os direitos reservados.
            </p>
            <p className="text-sm opacity-100">
              Parte do Hub de Serviços{" "}
              <a 
                href="https://instagram.com/wisaconsultoria/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-medium hover:opacity-80 transition-opacity inline-block"
              >
                WiSa Inteligência para Negócios
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
