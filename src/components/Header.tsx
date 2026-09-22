import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Cake } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, NAV_LINKS } from '../data/business';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#EBE2D7]'
          : 'bg-[#FAF7F2] border-b border-[#EFE8DF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <button
            id="header-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex flex-col text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38] rounded-xs"
            aria-label="Douceurs Maison - Return to Homepage"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#28221D] group-hover:text-[#9C6B38] transition-colors">
              {BUSINESS.name}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#7B6E64] font-medium">
              Pastry & Desserts • Lyon
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#EFE7DC] text-[#28221D] font-semibold'
                      : 'text-[#5C5148] hover:text-[#28221D] hover:bg-[#F3EDE5]'
                  } focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Direct Phone CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-phone-cta"
              href={BUSINESS.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#28221D] bg-white border border-[#DDD3C7] hover:border-[#9C6B38] hover:bg-[#F9F5EF] transition-all shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]"
              title={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#9C6B38]" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-quick-call"
              href={BUSINESS.phoneTel}
              aria-label={`Call ${BUSINESS.name}`}
              className="p-2.5 rounded-full text-[#28221D] bg-white border border-[#E3D8CC] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]"
            >
              <Phone className="w-4 h-4 text-[#9C6B38]" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2.5 rounded-lg text-[#28221D] hover:bg-[#EFE8DF] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-20 z-50 bg-[#FAF7F2] md:hidden overflow-y-auto border-t border-[#EAE1D5] flex flex-col justify-between p-6 shadow-xl"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#8C7E74] mb-3 px-3">
              Navigation Menu
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-left transition-all ${
                    isActive
                      ? 'bg-[#EAE1D4] text-[#28221D] font-semibold'
                      : 'text-[#4A4037] hover:bg-[#F3EDE5]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#9C6B38]" />}
                </button>
              );
            })}
          </div>

          {/* Contact Details in Mobile Menu */}
          <div className="pt-6 mt-6 border-t border-[#EAE1D5] space-y-4">
            <div>
              <p className="text-xs font-semibold text-[#8C7E74] uppercase tracking-wider">
                Visit Us in Lyon
              </p>
              <p className="text-sm text-[#28221D] mt-1 font-medium">{BUSINESS.address}</p>
              <p className="text-sm text-[#61544A]">{BUSINESS.postalCode} {BUSINESS.city}, {BUSINESS.country}</p>
            </div>
            <a
              id="mobile-menu-call-btn"
              href={BUSINESS.phoneTel}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#28221D] text-[#FAF7F2] font-medium text-sm hover:bg-[#3D342D] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8BF87]" />
              <span>Call {BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
