import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/header-logoo.png"
                alt="ASGINC Africa"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              A multi-disciplinary company specializing in Engineering, Construction, 
              Civil Works, and Cleaning Services with a commitment to quality and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-neutral-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/team" className="text-neutral-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-500" />
                <span className="text-neutral-300">+27 11 026 7123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-500" />
                <span className="text-neutral-300">info@asginc.co.za</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-500 mt-1" />
                <span className="text-neutral-300">
                  31 Albrecht Street<br />
                  Sunward Park, Boksburg<br />
                  South Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2025 ASGINC Africa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;