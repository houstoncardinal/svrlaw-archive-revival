import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Car, 
  Truck, 
  UserX, 
  Gavel, 
  Shield, 
  Building2, 
  FileText,
  Heart,
  Briefcase
} from "lucide-react";

const practiceAreas = [
  {
    title: "Personal Injury",
    icon: Heart,
    description: "Comprehensive representation for accident victims seeking justice and maximum compensation.",
    features: ["Car Accidents", "Medical Malpractice", "Premises Liability", "Product Liability"],
    color: "luxury-gold"
  },
  {
    title: "Wrongful Death",
    icon: UserX,
    description: "Compassionate advocacy for families seeking justice after losing a loved one.",
    features: ["Medical Negligence", "Workplace Accidents", "Defective Products", "Auto Fatalities"],
    color: "luxury-gold"
  },
  {
    title: "Commercial Litigation",
    icon: Building2,
    description: "Strategic representation for Fortune 500 companies and high-net-worth individuals.",
    features: ["Contract Disputes", "Corporate Governance", "Mergers & Acquisitions", "Regulatory Compliance"],
    color: "luxury-gold"
  },
  {
    title: "Criminal Defense",
    icon: Shield,
    description: "Elite defense strategies for high-profile criminal cases and white-collar crimes.",
    features: ["White Collar Crimes", "Federal Defense", "Corporate Investigations", "Executive Protection"],
    color: "luxury-gold"
  },
  {
    title: "Corporate Law",
    icon: Briefcase,
    description: "Comprehensive legal counsel for enterprise clients and institutional investors.",
    features: ["Securities Law", "Banking Regulation", "International Trade", "Intellectual Property"],
    color: "luxury-gold"
  },
  {
    title: "Regulatory Compliance",
    icon: FileText,
    description: "Proactive compliance strategies for heavily regulated industries and government relations.",
    features: ["Healthcare Compliance", "Financial Regulation", "Environmental Law", "Government Affairs"],
    color: "luxury-gold"
  }
];

export const LuxuryPracticeAreas = () => {
  return (
    <section id="services" className="py-24 bg-luxury-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-6 py-2 mb-8">
            <Scale className="w-5 h-5 text-luxury-gold mr-2" />
            <span className="text-luxury-black font-medium">Comprehensive Legal Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-luxury-black mb-8">
            Practice Areas
          </h2>
          <p className="text-xl text-luxury-charcoal max-w-4xl mx-auto leading-relaxed">
            From boardroom negotiations to courtroom litigation, our elite team delivers 
            unparalleled legal expertise across multiple practice areas for discerning clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-premium transition-all duration-500 border-luxury-gold/20 hover:border-luxury-gold bg-white/80 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 p-4 bg-gradient-gold rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-gold">
                    <Icon className="w-10 h-10 text-luxury-black" />
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-luxury-black">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-luxury-charcoal mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-luxury-charcoal">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="premium" className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="luxury" size="luxury" className="shadow-luxury">
            View All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};