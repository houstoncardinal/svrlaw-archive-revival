import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experienced Legal
            <span className="block text-law-gold">Representation You Can Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At SVR Law Firm, we focus on delivering tailored legal strategies for personal injury victims and individuals facing criminal charges in Houston and throughout Texas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="hero">
              Get Free Case Evaluation
            </Button>
            <Button variant="outline" size="hero" className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-law-navy">
              Call (281) 249-9835
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3 text-law-gold">Personal Injury Law</h3>
              <p className="text-gray-200">
                Our primary focus is advocating for those who have been injured in accidents. Whether it's a car crash, 18-wheeler accident, or wrongful death case, we are here to help you recover the compensation you deserve.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3 text-law-gold">Criminal Defense Law</h3>
              <p className="text-gray-200">
                We also provide robust criminal defense for clients facing charges. Our criminal defense team offers strategic representation in cases involving assault, DWI/DUI, drug possession, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};