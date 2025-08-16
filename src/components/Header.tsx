import { Button } from "@/components/ui/button";
import svrLogo from "@/assets/svr-logo.png";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={svrLogo} alt="SVR Law Firm" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-law-navy">SVR Law Firm</h1>
              <p className="text-sm text-law-text-light">Experienced Legal Representation</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-law-gold transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-law-gold transition-colors">Practice Areas</a>
            <a href="#faq" className="text-foreground hover:text-law-gold transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-law-gold transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:2812499835" className="text-law-navy font-semibold hover:text-law-gold transition-colors">
              (281) 249-9835
            </a>
            <Button variant="hero" size="sm">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};