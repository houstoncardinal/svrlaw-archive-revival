import luxuryLogo from "@/assets/luxury-logo.png";
import { Phone, Mail, MapPin, Scale, Award, Shield } from "lucide-react";

export const LuxuryFooter = () => {
  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <img src={luxuryLogo} alt="SVR Law Firm" className="h-16 w-auto" />
              <div>
                <h3 className="text-2xl font-display font-bold text-luxury-gold">SVR Law Firm</h3>
                <p className="text-luxury-platinum text-sm font-medium tracking-wider uppercase">
                  Premier Legal Representation
                </p>
              </div>
            </div>
            <p className="text-luxury-platinum leading-relaxed mb-8 max-w-md">
              Delivering uncompromising excellence in legal representation for Fortune 500 companies, 
              high-net-worth individuals, and discerning clients seeking premier legal counsel.
            </p>
            
            {/* Credentials */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-luxury-gold">
                <Award className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">AV Preeminent Rated</span>
              </div>
              <div className="flex items-center text-luxury-gold">
                <Scale className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">Super Lawyers Recognition</span>
              </div>
              <div className="flex items-center text-luxury-gold">
                <Shield className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">Texas State Bar Certified</span>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <a href="tel:2812499835" className="flex items-center text-luxury-gold hover:text-luxury-gold-light transition-colors text-lg font-semibold">
                <Phone className="w-5 h-5 mr-3" />
                (281) 249-9835
              </a>
              <a href="mailto:contact@svrlawfirm.com" className="flex items-center text-luxury-platinum hover:text-luxury-gold transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                contact@svrlawfirm.com
              </a>
              <div className="flex items-center text-luxury-platinum">
                <MapPin className="w-5 h-5 mr-3" />
                Houston | Dallas | Austin
              </div>
            </div>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h4 className="text-xl font-display font-bold text-luxury-gold mb-8">Practice Areas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Personal Injury</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Wrongful Death</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Commercial Litigation</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Corporate Law</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Regulatory Compliance</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-xl font-display font-bold text-luxury-gold mb-8">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">About Our Firm</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Our Attorneys</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Case Results</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Legal Insights</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Client Portal</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-xl font-display font-bold text-luxury-gold mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Attorney Disclaimer</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-luxury-gold/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-luxury-platinum text-sm mb-4 md:mb-0">
              © 2024 SVR Law Firm. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 text-sm">
              <span className="text-luxury-platinum">Licensed in Texas</span>
              <span className="text-luxury-platinum">State Bar No. 24012345</span>
              <span className="text-luxury-gold font-medium">24/7 Emergency Consultation</span>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="border-t border-luxury-gold/10 mt-8 pt-8">
            <p className="text-luxury-platinum/80 text-xs leading-relaxed max-w-5xl">
              <strong className="text-luxury-gold">Attorney Advertising Notice:</strong> This website is designed for general information only. 
              The information presented at this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship. 
              Prior results do not guarantee a similar outcome. The choice of a lawyer is an important decision and should not be based solely upon advertisements. 
              No representation is made that the quality of legal services to be performed is greater than the quality of legal services performed by other lawyers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};