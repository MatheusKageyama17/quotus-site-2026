import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import quotusLogoFooter from "@/assets/quotus-logo-footer-full.webp";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-navy border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-8">
          <p className="font-body text-sm text-primary-foreground">
            <strong>Telefone Ouvidoria Banco Safra:</strong> 0800 770 1236
          </p>
          <p className="font-body text-sm text-primary-foreground">
            <strong>Atendimento aos portadores de Necessidades Especiais Auditivas e de fala:</strong> 0800 727 7555
          </p>
          <p className="font-body text-sm text-primary-foreground/70">
            (Disponível de segunda à sexta-feira, das 09h às 18h, exceto feriados.)
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="tel:(67) 3305-6460" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/quotusinvestimentos" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/quotusinvestimentos" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="mailto:kerolain@quotus.com.br" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://wa.me/44020209840" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        <div className="flex justify-center">
          <img src={quotusLogoFooter} alt="Quotus Investimentos" className="h-10 object-contain brightness-0 invert" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
