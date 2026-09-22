import React from 'react';
import { MapPin, Phone, Award } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, NAV_LINKS, OFFERINGS } from '../data/business';
import { TrustBadge } from './TrustBadge';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="bg-[#241E1A] text-[#EDE6DE] border-t border-[#362E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Business Overview */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2] block">
              {BUSINESS.name}
            </span>
            <p className="text-xs uppercase tracking-widest text-[#BBAE9F] font-medium">
              Pastry & Desserts • Lyon, France
            </p>
            <p className="text-sm text-[#C9BFB5] leading-relaxed">
              {BUSINESS.aboutShort}
            </p>
            <div className="pt-2">
              <TrustBadge variant="dark" size="sm" />
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#BBAE9F] mb-4">
              Explore Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#D8CEBF] hover:text-[#FAF7F2] hover:underline underline-offset-4 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Offerings */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#BBAE9F] mb-4">
              Our Offerings
            </h3>
            <ul className="space-y-2.5 text-sm">
              {OFFERINGS.map((offering) => (
                <li key={offering.id}>
                  <button
                    id={`footer-offering-${offering.id}`}
                    onClick={() => {
                      onNavigate('cakes-and-desserts');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#D8CEBF] hover:text-[#FAF7F2] hover:underline underline-offset-4 transition-colors text-left"
                  >
                    {offering.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Direct Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#BBAE9F] mb-4">
              Location & Contact
            </h3>
            <div className="space-y-3 text-sm text-[#D8CEBF]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C4883C] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#FAF7F2]">{BUSINESS.address}</p>
                  <p className="text-[#B5A89A]">
                    {BUSINESS.postalCode} {BUSINESS.city}, {BUSINESS.country}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#C4883C] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={BUSINESS.phoneTel}
                  className="font-medium text-[#FAF7F2] hover:text-[#E8BF87] transition-colors hover:underline underline-offset-4"
                  title={`Call ${BUSINESS.name}`}
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-get-in-touch-btn"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-[#382F28] hover:bg-[#463B32] text-xs font-medium text-[#FAF7F2] transition-colors border border-[#4E4137]"
              >
                Send an Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Factual Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-[#362E28] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E9083] gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. 8 Rue Mercière, 69002 Lyon.
          </p>
          <div className="flex items-center gap-4">
            <span>Specializing in custom cakes & handmade sweet treats in Lyon.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
