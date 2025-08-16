import svrLogo from "@/assets/svr-logo.png";
import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-law-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={svrLogo} alt="SVR Law Firm" className="h-12 w-auto filter brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold text-law-gold">SVR Law Firm</h3>
                <p className="text-gray-300">Experienced Legal Representation</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              At SVR Law Firm, we focus on delivering tailored legal strategies for personal injury victims 
              and individuals facing criminal charges in Houston and throughout Texas. With years of trial 
              experience and a commitment to achieving the best possible results.
            </p>
            <div className="space-y-3">
              <a href="tel:2812499835" className="flex items-center text-law-gold hover:text-law-gold-light transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                (281) 249-9835
              </a>
              <a href="mailto:info@svrlawfirm.com" className="flex items-center text-gray-300 hover:text-law-gold transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                info@svrlawfirm.com
              </a>
            </div>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold text-law-gold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">Personal Injury</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">Car Accidents</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">18-Wheeler Accidents</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">Wrongful Death</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">DWI/DUI</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-law-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-law-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-law-gold transition-colors">Services</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-law-gold transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-law-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">Free Consultation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors">Vietnamese Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SVR Law Firm. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-law-gold transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-law-gold transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-law-gold transition-colors text-sm">Disclaimer</a>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-gray-400 text-xs">
              Attorney advertising. Prior results do not guarantee a similar outcome. 
              This website is for informational purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};