import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What should I do immediately after a car accident?",
    answer: "Contact a personal injury attorney as soon as possible to protect your rights. Avoid making any statements to insurance companies until you've spoken with a lawyer. Document the scene, seek medical attention, and preserve all evidence related to the accident."
  },
  {
    question: "How do I know if I have a personal injury case?",
    answer: "If you were injured due to someone else's negligence, you might have a case. Contact us for a free consultation, and we'll evaluate the details of your situation to determine if you have grounds for a personal injury claim."
  },
  {
    question: "How much does it cost to hire an attorney for personal injury or criminal defense?",
    answer: "For personal injury cases, we work on a contingency fee basis, meaning you don't pay unless we win. For criminal defense, costs vary depending on the complexity of the case, but we offer flexible payment plans and a free initial consultation."
  },
  {
    question: "How long do I have to file a personal injury lawsuit in Texas?",
    answer: "In Texas, the statute of limitations for most personal injury cases is two years from the date of the accident. However, certain circumstances can affect this timeline, so it's important to consult with an attorney as soon as possible."
  },
  {
    question: "What makes SVR Law Firm different from other law firms?",
    answer: "Our firm combines years of trial experience with a personalized approach to each case. We focus specifically on personal injury and criminal defense, allowing us to provide specialized expertise and achieve the best possible outcomes for our clients."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-law-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-law-text-light max-w-2xl mx-auto">
            Have questions? We have answers! Find quick answers to the most common questions about our legal services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:text-law-gold transition-colors py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-law-text-light pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-law-text-light mb-6">Still have questions?</p>
          <Button variant="hero" size="lg">
            Call SVR Law Firm for Detailed Answers - (281) 249-9835
          </Button>
        </div>
      </div>
    </section>
  );
};