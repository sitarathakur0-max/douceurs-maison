import React from 'react';
import { MapPin, Phone, Star, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, OFFERINGS, HERO_ASSETS } from '../data/business';
import { TrustBadge } from '../components/TrustBadge';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="page-about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C6B38]">
          Our Pastry Story
        </span>
        <h1
          id="about-main-heading"
          className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#28221D]"
        >
          About Douceurs Maison
        </h1>
        <p className="text-base sm:text-lg text-[#5E5045] leading-relaxed">
          A small pastry business dedicated to the art of handcrafted sweets, located at 8 Rue Mercière in Lyon, France.
        </p>
      </header>

      {/* Main Narrative with Image */}
      <section className="bg-white rounded-2xl border border-[#E6DCD0] overflow-hidden shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative aspect-4/3 lg:aspect-auto lg:h-full min-h-[340px] bg-[#F3ECE4]">
            <img
              src={HERO_ASSETS.banner}
              alt="Douceurs Maison artisan pastry showcase in Lyon"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-[#E5DACD]">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#9C6B38]">
                Presqu’île, Lyon
              </p>
              <p className="text-sm font-medium text-[#28221D]">
                8 Rue Mercière, 69002 Lyon, France
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C7D71]">
                Handcrafted With Care
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#28221D]">
                Small Pastry Business in the Heart of Lyon
              </h2>
            </div>

            <p className="text-base text-[#57493E] leading-relaxed">
              Douceurs Maison is a small pastry business specializing in custom cakes, cupcakes, celebration desserts, and handmade sweet treats. We believe that cakes and pastries hold a special place in life’s most cherished moments.
            </p>

            <p className="text-base text-[#57493E] leading-relaxed">
              Located on Rue Mercière in the 2nd arrondissement of Lyon, our workshop is dedicated to artisanal pastry craftsmanship. Each dessert is prepared with thoughtful care, balanced sweetness, and attention to detail.
            </p>

            <div className="pt-2 border-t border-[#EFE8DF] space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#85766A]">
                Our Four Core Specialties
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#3E342B]">
                {OFFERINGS.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9C6B38] shrink-0" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <TrustBadge variant="light" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Business Facts Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-bold text-[#28221D]">
            Business Information
          </h2>
          <p className="text-sm text-[#66574D]">
            Official business details for Douceurs Maison in Lyon, France.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Category & Specialization */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5DACD] space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#F5EEE5] flex items-center justify-center text-[#9C6B38]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#28221D]">
              Specialization
            </h3>
            <p className="text-xs uppercase tracking-wider font-semibold text-[#8C7D71]">
              Category: {BUSINESS.category}
            </p>
            <p className="text-sm text-[#615347] leading-relaxed">
              Custom cakes, cupcakes, celebration desserts, and handmade sweet treats crafted with care.
            </p>
          </div>

          {/* Card 2: Lyon Location */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5DACD] space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#F5EEE5] flex items-center justify-center text-[#9C6B38]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#28221D]">
              Address & Workshop
            </h3>
            <p className="text-xs uppercase tracking-wider font-semibold text-[#8C7D71]">
              Lyon 2e Arrondissement
            </p>
            <p className="text-sm text-[#615347] leading-relaxed">
              {BUSINESS.address}<br />
              {BUSINESS.postalCode} {BUSINESS.city}, {BUSINESS.country}
            </p>
          </div>

          {/* Card 3: Reputation */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5DACD] space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#F5EEE5] flex items-center justify-center text-[#9C6B38]">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#28221D]">
              Customer Reviews
            </h3>
            <p className="text-xs uppercase tracking-wider font-semibold text-[#8C7D71]">
              Google Rating
            </p>
            <p className="text-sm text-[#615347] leading-relaxed">
              Rated <strong className="font-semibold text-[#28221D]">{BUSINESS.rating}/5</strong> based on <strong className="font-semibold text-[#28221D]">{BUSINESS.reviewCount} customer reviews</strong> on Google.
            </p>
          </div>
        </div>
      </section>

      {/* Connection CTA */}
      <section className="bg-[#28221D] text-[#FAF7F2] rounded-2xl p-8 sm:p-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl font-bold text-[#FAF7F2]">
            Connect With Our Pastry Team
          </h2>
          <p className="text-sm sm:text-base text-[#D5C8BD] leading-relaxed">
            We are always happy to discuss your celebration plans. Call us at +33 4 72 64 18 35 or send an enquiry directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="about-cta-contact"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#28221D] font-medium text-sm hover:bg-[#EAE1D5] transition-colors"
          >
            <span>Send an Enquiry</span>
            <ArrowRight className="w-4 h-4 text-[#9C6B38]" />
          </button>
          <a
            id="about-cta-phone"
            href={BUSINESS.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3B322A] text-[#FAF7F2] border border-[#54483E] hover:border-[#C4883C] font-medium text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E5BE85]" />
            <span>Call +33 4 72 64 18 35</span>
          </a>
        </div>
      </section>
    </div>
  );
};
