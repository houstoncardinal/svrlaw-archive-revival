import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "What makes SVR Law Firm different from other law firms?",
    answer: "SVR Law Firm combines Fortune 500-level expertise with personalized attention. Our attorneys have represented major corporations, government entities, and high-net-worth individuals in complex, high-stakes litigation. We offer the resources and experience of a large firm with the dedicated service of a boutique practice."
  },
  {
    question: "Do you handle cases on a contingency fee basis?",
    answer: "For personal injury and wrongful death cases, we work on a contingency fee basis, meaning you pay no attorney fees unless we achieve a successful outcome. For corporate and criminal defense matters, we offer flexible fee arrangements including hourly rates, flat fees, and hybrid structures tailored to your specific needs."
  },
  {
    question: "What is your typical case timeline?",
    answer: "Case timelines vary significantly based on complexity and practice area. Personal injury cases typically resolve within 12-24 months, while complex commercial litigation may take 2-5 years. Criminal defense cases vary based on charges and jurisdiction. We provide detailed timelines and regular updates throughout your case."
  },
  {
    question: "Do you represent Fortune 500 companies?",
    answer: "Yes, we regularly represent Fortune 500 companies, multinational corporations, and institutional clients in complex litigation, regulatory matters, and corporate transactions. Our team has the experience and resources to handle the most sophisticated legal challenges facing large organizations."
  },
  {
    question: "What is your success rate?",
    answer: "We maintain a 98% success rate across all practice areas, having recovered over $500 million for our clients. Our success is measured not just in monetary recoveries, but in achieving our clients' strategic objectives, whether that's case dismissal, favorable settlements, or successful business transactions."
  },
  {
    question: "Do you provide 24/7 emergency legal consultation?",
    answer: "Yes, we understand that legal emergencies don't follow business hours. Our senior attorneys are available 24/7 for urgent matters involving criminal charges, injunctions, or other time-sensitive legal issues. Emergency consultation is available for existing clients and qualifying new matters."
  }
];

export const LuxuryFAQ = () => {
  return (
    <section id="faq" className="py-24 bg-luxury-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-6 py-2 mb-8">
            <HelpCircle className="w-5 h-5 text-luxury-black mr-2" />
            <span className="text-luxury-black font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-luxury-black mb-8">
            Questions & Answers
          </h2>
          <p className="text-xl text-luxury-charcoal max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our premium legal services 
            and what sets SVR Law Firm apart.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm border border-luxury-gold/20 rounded-2xl px-8 shadow-subtle hover:shadow-luxury transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-luxury-gold transition-colors py-8 text-xl font-display font-semibold text-luxury-black hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-luxury-charcoal pb-8 text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-luxury-charcoal mb-8 text-xl">
            Need immediate answers? Our attorneys are standing by.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="luxury" className="group">
              <Phone className="w-5 h-5 mr-2" />
              Call (281) 249-9835
            </Button>
            <Button variant="premium" size="luxury">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};