import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoPed from "@/assets/logo-ped.jpg";
import { link } from "fs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoPed} 
              alt="PED - Portal Educacional Digital" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("cursos")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Cursos
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("para-quem")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Para Quem
            </button>
            <button
              onClick={() => window.open("https://eadon.com.br/ped", "_blank")}
              className="bg-gradient-cta text-accent-foreground px-6 py-2.5 rounded-lg font-semibold shadow-cta hover:opacity-90 transition-opacity"
            >
              Acessar Portal
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("cursos")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("para-quem")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Para Quem
              </button>
              <button
                onClick={() => window.open("https://eadon.com.br/ped", "_blank")}
                className="bg-gradient-cta text-accent-foreground px-6 py-3 rounded-lg font-semibold text-center"
              >
                Acessar Portal
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
