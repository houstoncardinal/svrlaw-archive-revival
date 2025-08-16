import { Button } from "@/components/ui/button";
import luxuryHeroBg from "@/assets/luxury-hero-bg.jpg";
import { ArrowRight, Award, Scale, Users } from "lucide-react";

export const LuxuryHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${luxuryHeroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Award className="w-5 h-5 text-luxury-gold mr-2" />
            <span className="text-luxury-gold font-medium">Ranked #1 Law Firm in Texas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight animate-fade-in">
            Elite Legal
            <span className="block text-luxury-gold relative">
              Representation
              <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-luxury-gold-light/30 to-transparent" />
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-3xl mb-12 text-luxury-platinum leading-relaxed max-w-4xl mx-auto font-light animate-slide-up">
            Uncompromising excellence in personal injury and criminal defense. 
            <span className="block mt-2 text-luxury-gold font-medium">
              Trusted by Fortune 500 executives and industry leaders.
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Button variant="luxury" size="luxury" className="group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="premium" size="luxury">
              Call (281) 249-9835
            </Button>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-luxury-black/30 backdrop-blur-sm rounded-lg p-6 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-gold">
              <div className="flex items-center justify-center mb-4">
                <Scale className="w-8 h-8 text-luxury-gold" />
              </div>
              <div className="text-3xl font-display font-bold text-luxury-gold mb-2">$500M+</div>
              <div className="text-luxury-platinum">Recovered for Clients</div>
            </div>
            
            <div className="bg-luxury-black/30 backdrop-blur-sm rounded-lg p-6 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-gold">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-luxury-gold" />
              </div>
              <div className="text-3xl font-display font-bold text-luxury-gold mb-2">25+ Years</div>
              <div className="text-luxury-platinum">Combined Experience</div>
            </div>
            
            <div className="bg-luxury-black/30 backdrop-blur-sm rounded-lg p-6 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-gold">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-luxury-gold" />
              </div>
              <div className="text-3xl font-display font-bold text-luxury-gold mb-2">98%</div>
              <div className="text-luxury-platinum">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};