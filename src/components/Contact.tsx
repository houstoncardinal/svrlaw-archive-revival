import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-law-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-law-navy mb-6">
            Get Your Free Case Evaluation
          </h2>
          <p className="text-lg text-law-text-light max-w-3xl mx-auto">
            Don't wait to get the legal help you need. Contact SVR Law Firm today for a free consultation 
            and let our experienced attorneys fight for your rights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-background border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-law-navy">
                Send Us A Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-law-navy mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="John" className="border-border/70 focus:border-law-gold" />
                </div>
                <div>
                  <label className="text-sm font-medium text-law-navy mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" className="border-border/70 focus:border-law-gold" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-law-navy mb-2 block">
                  Email Address *
                </label>
                <Input type="email" placeholder="john@example.com" className="border-border/70 focus:border-law-gold" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-law-navy mb-2 block">
                  Phone Number *
                </label>
                <Input type="tel" placeholder="(281) 123-4567" className="border-border/70 focus:border-law-gold" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-law-navy mb-2 block">
                  Case Type
                </label>
                <select className="w-full p-3 border border-border/70 rounded-md focus:border-law-gold focus:outline-none bg-background">
                  <option>Select a practice area</option>
                  <option>Personal Injury</option>
                  <option>Car Accident</option>
                  <option>18-Wheeler Accident</option>
                  <option>Wrongful Death</option>
                  <option>Criminal Defense</option>
                  <option>DWI/DUI</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-law-navy mb-2 block">
                  Tell us about your case
                </label>
                <Textarea 
                  placeholder="Please provide details about your situation..."
                  className="min-h-[120px] border-border/70 focus:border-law-gold"
                />
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                Get Free Case Evaluation
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-background border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-law-navy flex items-center gap-3">
                  <Phone className="w-6 h-6 text-law-gold" />
                  Call SVR Law Firm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-law-text-light mb-4">
                  For questions, concerns or if you simply need to speak to someone quickly. 
                  Please call us directly.
                </p>
                <Button variant="legal" size="lg" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  (281) 249-9835
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-law-navy flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-law-gold" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-law-text-light mb-2">
                  <strong>Houston, Texas</strong>
                </p>
                <p className="text-law-text-light">
                  Serving clients throughout the state of Texas
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-law-navy flex items-center gap-3">
                  <Clock className="w-6 h-6 text-law-gold" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-law-text-light">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Emergency calls only</p>
                  <p className="text-sm mt-4 text-law-gold font-medium">
                    24/7 Emergency consultation available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};