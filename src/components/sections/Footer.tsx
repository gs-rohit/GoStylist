import React from 'react';
import { Logo } from '../ui/Logo';
import { socialLinks, contactInfo, legalLinks } from '../../data/footer';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Company */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <Logo />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Revolutionizing fashion with AI-powered styling recommendations for the modern wardrobe.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-primary transition-all duration-300" 
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-heading font-semibold mb-8">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-heading font-semibold mb-8">Connect</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-gray-400 text-lg">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-2 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400 text-sm">
            © 2025 Gostylist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};