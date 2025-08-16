import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

export const LuxuryContact = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-6 py-2 mb-8">
            <Shield className="w-5 h-5 text-luxury-gold mr-2" />
            <span className="text-luxury-gold font-medium">Confidential Consultation</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-luxury-gold mb-8">
            Get Started Today
          </h2>
          <p className="text-xl text-luxury-platinum max-w-4xl mx-auto leading-relaxed">
            Experience the difference that elite legal representation makes. Contact SVR Law Firm 
            for a confidential consultation about your legal matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-luxury-black-soft/50 border-luxury-gold/20 backdrop-blur-sm shadow-premium">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-display font-bold text-luxury-gold">
                  Confidential Case Evaluation
                </CardTitle>
                <p className="text-luxury-platinum mt-4">
                  All communications are protected by attorney-client privilege
                </p>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-luxury-gold mb-3 block tracking-wide uppercase">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-luxury-black-medium border-luxury-gold/30 text-luxury-platinum placeholder:text-luxury-platinum/50 focus:border-luxury-gold h-12" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-luxury-gold mb-3 block tracking-wide uppercase">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Smith" 
                      className="bg-luxury-black-medium border-luxury-gold/30 text-luxury-platinum placeholder:text-luxury-platinum/50 focus:border-luxury-gold h-12" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-luxury-gold mb-3 block tracking-wide uppercase">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john.smith@company.com" 
                    className="bg-luxury-black-medium border-luxury-gold/30 text-luxury-platinum placeholder:text-luxury-platinum/50 focus:border-luxury-gold h-12" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-luxury-gold mb-3 block tracking-wide uppercase">
                    Phone Number *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(281) 123-4567" 
                    className="bg-luxury-black-medium border-luxury-gold/30 text-luxury-platinum placeholder:text-luxury-platinum/50 focus:border-luxury-gold h-12" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-luxury-gold mb-3 block tracking-wide uppercase">
                    Practice Area
                  </label>
                  <select className="w-full h-12 px-4 bg-luxury-black-medium border border-luxury-gold/30 rounded-md focus:border-luxury-gold focus:outline-none text-luxury-platinum">
                    <option value="">Select a practice area</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="wrongful-death">Wrongful Death</option>
                    <option value="commercial-litigation">Commercial Litigation</option>
                    <option value="criminal-defense">Criminal Defense</option>
                    <option value="corporate-law">Corporate Law</option>
                    <option value="regulatory-compliance">Regulatory Compliance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-luxury-gold mb-3 block tracking-wide uppercase">
                    Case Details
                  </label>
                  <Textarea 
                    placeholder="Please provide a detailed description of your legal matter. All information will be kept strictly confidential..."
                    className="min-h-[150px] bg-luxury-black-medium border-luxury-gold/30 text-luxury-platinum placeholder:text-luxury-platinum/50 focus:border-luxury-gold resize-none"
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-luxury-platinum leading-relaxed">
                    I understand that submitting this form does not create an attorney-client relationship. 
                    I agree to SVR Law Firm's terms of service and privacy policy.
                  </span>
                </div>
                
                <Button variant="luxury" className="w-full" size="luxury">
                  Submit Confidential Request
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Primary Contact */}
            <Card className="bg-gradient-gold border-0 shadow-gold">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold text-luxury-black flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  24/7 Legal Hotline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-black/80 mb-6 leading-relaxed">
                  Immediate consultation available for urgent legal matters. 
                  Senior partners on-call for emergencies.
                </p>
                <Button variant="corporate" size="luxury" className="w-full bg-luxury-black text-luxury-gold hover:bg-luxury-black-soft">
                  <Phone className="w-5 h-5 mr-2" />
                  (281) 249-9835
                </Button>
              </CardContent>
            </Card>
            
            {/* Office Information */}
            <Card className="bg-luxury-black-soft/50 border-luxury-gold/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-luxury-gold flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Office Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-luxury-gold mb-2">Houston Headquarters</h4>
                  <p className="text-luxury-platinum text-sm">
                    Downtown Financial District<br />
                    Premium Executive Suites
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-gold mb-2">Dallas Office</h4>
                  <p className="text-luxury-platinum text-sm">
                    Uptown Business District<br />
                    By Appointment Only
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-gold mb-2">Austin Office</h4>
                  <p className="text-luxury-platinum text-sm">
                    Downtown Capitol Area<br />
                    Government Relations Hub
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Hours */}
            <Card className="bg-luxury-black-soft/50 border-luxury-gold/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-luxury-gold flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-luxury-platinum">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                  <div className="border-t border-luxury-gold/20 pt-3 mt-4">
                    <div className="flex items-center text-luxury-gold font-medium text-sm">
                      <Shield className="w-4 h-4 mr-2" />
                      24/7 Emergency Consultation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credentials */}
            <Card className="bg-luxury-black-soft/50 border-luxury-gold/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-luxury-gold flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-luxury-platinum text-sm">
                  <div>• AV Preeminent Rated by Martindale-Hubbell</div>
                  <div>• Super Lawyers Recognition</div>
                  <div>• Best Lawyers in America</div>
                  <div>• Texas State Bar Board Certified</div>
                  <div>• Multi-Million Dollar Advocates Forum</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};