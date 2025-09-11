import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-md border-t border-pink-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              FundiFind
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Connecting Kenyans with skilled, verified service providers across all counties.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white/40 backdrop-blur-md border border-pink-300 rounded-full flex items-center justify-center hover:bg-pink-100 transition cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-pink-500" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-500">Services</h4>
            <ul className="space-y-2 text-gray-600">
              {['Plumbing', 'Electrical', 'Carpentry', 'Cleaning', 'Painting', 'View All'].map((service, i) => (
                <li key={i} className="hover:text-pink-500 transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-500">Company</h4>
            <ul className="space-y-2 text-gray-600">
              {['About Us', 'How It Works', 'Safety', 'Careers', 'Press', 'Blog'].map((item, i) => (
                <li key={i} className="hover:text-pink-500 transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-500">Contact</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-sm">+254 717 055 797</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-sm">fundifind@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 FundiFind. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
              <span key={i} className="hover:text-pink-500 transition cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
