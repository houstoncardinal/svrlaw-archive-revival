import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "SVR Law Firm delivered exceptional results in our complex merger. Their attention to detail and strategic thinking saved our company millions.",
    author: "Michael Davidson",
    title: "CEO, Fortune 500 Technology Company",
    result: "$50M+ Recovered",
    rating: 5
  },
  {
    quote: "When facing federal charges, SVR's criminal defense team provided unwavering support and achieved a complete dismissal of all charges.",
    author: "Sarah Johnson",
    title: "Former Federal Executive",
    result: "All Charges Dismissed",
    rating: 5
  },
  {
    quote: "Their personal injury expertise secured a settlement that exceeded our expectations. Professional, compassionate, and incredibly effective.",
    author: "Robert Chen",
    title: "Investment Banking Executive",
    result: "$8.5M Settlement",
    rating: 5
  }
];

const caseResults = [
  {
    amount: "$45.2M",
    type: "Commercial Litigation",
    description: "Contract dispute resolution for multinational corporation"
  },
  {
    amount: "$32.8M",
    type: "Personal Injury",
    description: "Catastrophic injury settlement for executive"
  },
  {
    amount: "$28.5M",
    type: "Wrongful Death",
    description: "Medical malpractice verdict for family"
  },
  {
    amount: "$19.7M",
    type: "Product Liability",
    description: "Defective medical device settlement"
  }
];

export const TestimonialsResults = () => {
  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M0 40L40 0L80 40L40 80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Testimonials Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-6 py-2 mb-8">
              <Quote className="w-5 h-5 text-luxury-gold mr-2" />
              <span className="text-luxury-gold font-medium">Client Testimonials</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold text-luxury-gold mb-8">
              Trusted by Leaders
            </h2>
            <p className="text-xl text-luxury-platinum max-w-3xl mx-auto">
              Fortune 500 executives and industry leaders trust SVR Law Firm 
              for their most critical legal matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-luxury-black-soft/50 border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 backdrop-blur-sm hover:shadow-gold">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-luxury-gold fill-luxury-gold" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-luxury-gold mb-4" />
                  
                  <blockquote className="text-luxury-platinum mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-luxury-gold/20 pt-4">
                    <div className="font-semibold text-luxury-gold mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-luxury-platinum mb-2">
                      {testimonial.title}
                    </div>
                    <div className="inline-flex items-center bg-luxury-gold/10 rounded-full px-3 py-1">
                      <span className="text-luxury-gold font-medium text-sm">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Results Section */}
        <div className="border-t border-luxury-gold/20 pt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-luxury-gold mb-6">
              Recent Case Results
            </h3>
            <p className="text-xl text-luxury-platinum max-w-3xl mx-auto">
              Our track record speaks for itself. We consistently achieve 
              exceptional outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseResults.map((result, index) => (
              <Card key={index} className="bg-gradient-gold border-0 hover:shadow-premium transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-display font-bold text-luxury-black mb-2">
                    {result.amount}
                  </div>
                  <div className="text-luxury-black font-semibold mb-2">
                    {result.type}
                  </div>
                  <div className="text-luxury-black/80 text-sm">
                    {result.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="premium" size="luxury" className="group">
              View More Results
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};