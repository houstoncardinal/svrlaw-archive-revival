import { Button } from "@/components/ui/button";
import luxuryLogo from "@/assets/luxury-logo.png";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

export const LuxuryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-luxury-black text-luxury-gold py-2 border-b border-luxury-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="font-medium">Houston | Dallas | Austin</span>
              <span>24/7 Emergency Legal Consultation</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:2812499835" className="hover:text-luxury-gold-light transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (281) 249-9835
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-luxury-black/95 backdrop-blur-sm border-b border-luxury-gold/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src={luxuryLogo} alt="SVR Law Firm" className="h-16 w-auto" />
              <div>
                <h1 className="text-2xl font-display font-semibold text-luxury-gold tracking-wide">
                  SVR Law Firm
                </h1>
                <p className="text-luxury-platinum text-sm font-medium tracking-wider uppercase">
                  Premier Legal Representation
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <a href="#about" className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300 font-medium">About</a>
              <a href="#services" className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300 font-medium">Practice Areas</a>
              <a href="#attorneys" className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300 font-medium">Attorneys</a>
              <a href="#results" className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300 font-medium">Case Results</a>
              <a href="#insights" className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300 font-medium">Insights</a>
              <a href="#contact" className="text-luxury-platinum hover:text-luxury-gold transition-colors duration-300 font-medium">Contact</a>
            </nav>
            
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:2812499835" className="text-luxury-gold font-semibold hover:text-luxury-gold-light transition-colors">
                (281) 249-9835
              </a>
              <Button variant="luxury" size="premium">
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-luxury-gold p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-luxury-black border-t border-luxury-gold/20">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-luxury-platinum hover:text-luxury-gold transition-colors font-medium">About</a>
                <a href="#services" className="text-luxury-platinum hover:text-luxury-gold transition-colors font-medium">Practice Areas</a>
                <a href="#attorneys" className="text-luxury-platinum hover:text-luxury-gold transition-colors font-medium">Attorneys</a>
                <a href="#results" className="text-luxury-platinum hover:text-luxury-gold transition-colors font-medium">Case Results</a>
                <a href="#insights" className="text-luxury-platinum hover:text-luxury-gold transition-colors font-medium">Insights</a>
                <a href="#contact" className="text-luxury-platinum hover:text-luxury-gold transition-colors font-medium">Contact</a>
                <div className="pt-4 border-t border-luxury-gold/20">
                  <Button variant="luxury" className="w-full">
                    Free Consultation
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};