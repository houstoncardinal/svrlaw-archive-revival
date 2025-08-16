import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Car, Truck, UserX, Gavel, Shield } from "lucide-react";

const practiceAreas = [
  {
    title: "Wrongful Death",
    icon: UserX,
    description: "Compassionate representation for families who have lost loved ones due to negligence or wrongful acts."
  },
  {
    title: "Car Accidents",
    icon: Car,
    description: "Expert legal representation for victims of automobile accidents to ensure maximum compensation."
  },
  {
    title: "18-Wheeler Accidents",
    icon: Truck,
    description: "Specialized expertise in complex commercial truck accident cases with serious injuries."
  },
  {
    title: "Slip and Fall",
    icon: Scale,
    description: "Premises liability cases where property owners failed to maintain safe conditions."
  },
  {
    title: "DWI/DUI",
    icon: Gavel,
    description: "Aggressive defense strategies for clients facing driving while intoxicated charges."
  },
  {
    title: "Domestic Violence",
    icon: Shield,
    description: "Strategic criminal defense for clients facing domestic violence allegations."
  }
];

export const PracticeAreas = () => {
  return (
    <section id="services" className="py-20 bg-law-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-law-navy mb-6">
            Our Practice Areas
          </h2>
          <p className="text-lg text-law-text-light max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, 
            ensuring expert representation for our clients' diverse legal needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-law-gold/30 bg-background">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-law-gold/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-law-gold/20 transition-colors">
                    <Icon className="w-8 h-8 text-law-gold" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-law-navy">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-law-text-light mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <Button variant="legal" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};