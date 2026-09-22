import React from 'react';
import { ArrowRight, Phone, Sparkles, MapPin, Heart, ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, OFFERINGS, HERO_ASSETS } from '../data/business';
import { TrustBadge } from '../components/TrustBadge';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="page-home" className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-[#FAF7F2] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-[#EDE4D8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Trust Badge and Location Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <TrustBadge variant="card" size="md" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#EFE8DE] text-[#554940] border border-[#E1D6C7]">
                  <MapPin className="w-3.5 h-3.5 text-[#9C6B38]" />
                  <span>8 Rue Mercière, Lyon</span>
                </span>
              </div>

              {/* Exact Requested Headline */}
              <h1
                id="hero-main-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#28221D] leading-[1.12]"
              >
                Beautiful Cakes Made for Sweet Moments
              </h1>

              {/* Exact Requested Supporting Copy */}
              <p
                id="hero-supporting-copy"
                className="text-lg sm:text-xl text-[#5C5046] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
              >
                Custom cakes, cupcakes, celebration desserts and handmade sweet treats crafted with care in Lyon.
              </p>

              {/* Prominent CTAs: Explore Our Desserts & Get in Touch */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero-cta-explore"
                  onClick={() => onNavigate('cakes-and-desserts')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#28221D] text-[#FAF7F2] font-medium text-base shadow-sm hover:bg-[#3E342C] transition-all hover:gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]"
                >
                  <span>Explore Our Desserts</span>
                  <ArrowRight className="w-4 h-4 text-[#E5BE85]" />
                </button>

                <button
                  id="hero-cta-contact"
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#28221D] font-medium text-base border border-[#D5C9BB] hover:border-[#9C6B38] hover:bg-[#F9F5EE] transition-all shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]"
                >
                  <span>Get in Touch</span>
                </button>
              </div>

              {/* Quick direct phone line reference */}
              <div className="pt-2 text-xs sm:text-sm text-[#73655B] flex items-center justify-center lg:justify-start gap-2">
                <span>Prefer to call directly?</span>
                <a
                  href={BUSINESS.phoneTel}
                  className="font-semibold text-[#28221D] hover:text-[#9C6B38] underline underline-offset-4"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#E6D7C3] via-[#FAF7F2] to-[#E3D1BC] opacity-70 -rotate-1 pointer-events-none" />
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#E3D5C5] bg-white">
                  <img
                    src={HERO_ASSETS.banner}
                    alt="Bespoke celebration cake and gourmet cupcakes displayed at Douceurs Maison in Lyon"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto aspect-4/3 sm:aspect-16/11 object-cover hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle caption overlay */}
                  <div className="p-4 bg-white/95 border-t border-[#EDE4D8] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9C6B38]">
                        Artisan Pâtisserie
                      </p>
                      <p className="text-sm font-medium text-[#28221D]">
                        Crafted at 8 Rue Mercière, Lyon
                      </p>
                    </div>
                    <span className="text-xs text-[#706257] font-medium bg-[#F3EDE5] px-2.5 py-1 rounded-md">
                      Lyon 2e
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION: 4.9/5 — 28 Google Reviews */}
      <section
        id="trust-section"
        aria-label="Customer Trust & Reviews"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl bg-[#F4EDE4] border border-[#E5D9CC] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 space-y-2 text-center md:text-left">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#8C7A6D]">
                Customer Satisfaction
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#28221D]">
                {BUSINESS.ratingLabel}
              </h2>
              <p className="text-sm text-[#63554B]">
                Trusted by customers across Lyon for handcrafted pastry and celebration centerpieces.
              </p>
            </div>

            <div className="md:col-span-7 flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
              <div className="bg-white rounded-xl p-4 border border-[#E2D6C8] text-center shadow-2xs min-w-[130px]">
                <span className="block font-serif text-2xl font-bold text-[#28221D]">4.9</span>
                <span className="text-xs text-[#786A5F] font-medium">Average Rating</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#E2D6C8] text-center shadow-2xs min-w-[130px]">
                <span className="block font-serif text-2xl font-bold text-[#28221D]">28</span>
                <span className="text-xs text-[#786A5F] font-medium">Google Reviews</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#E2D6C8] text-center shadow-2xs min-w-[130px]">
                <span className="block font-serif text-2xl font-bold text-[#28221D]">100%</span>
                <span className="text-xs text-[#786A5F] font-medium">Handcrafted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE OFFERINGS SECTION */}
      <section
        id="core-offerings-section"
        aria-labelledby="offerings-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#9C6B38]">
            What We Create
          </p>
          <h2
            id="offerings-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-[#28221D]"
          >
            Our Core Offerings
          </h2>
          <p className="text-sm sm:text-base text-[#65584E]">
            Specializing in custom cakes, cupcakes, celebration desserts and handmade sweet treats crafted with care in Lyon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERINGS.map((offering) => (
            <div
              key={offering.id}
              id={`offering-card-${offering.id}`}
              className="flex flex-col bg-white rounded-xl overflow-hidden border border-[#E5DACD] hover:border-[#9C6B38] shadow-2xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#F3EDE5]">
                <img
                  src={offering.image}
                  alt={offering.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/95 text-[#28221D] shadow-2xs border border-[#E7DDD1]">
                    {offering.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#28221D] group-hover:text-[#9C6B38] transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66584E] leading-relaxed">
                    {offering.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#EFE8DF] flex items-center justify-between">
                  <button
                    id={`btn-explore-${offering.id}`}
                    onClick={() => onNavigate('cakes-and-desserts')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#28221D] group-hover:text-[#9C6B38] transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    id={`btn-inquire-${offering.id}`}
                    onClick={() => onNavigate('contact')}
                    className="text-xs text-[#7B6D62] hover:text-[#28221D] underline underline-offset-2"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link under offerings */}
        <div className="text-center mt-10">
          <button
            id="view-all-desserts-btn"
            onClick={() => onNavigate('cakes-and-desserts')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EFE8DE] text-[#28221D] hover:bg-[#E5DACD] text-sm font-medium transition-colors"
          >
            <span>Learn More About Our Offerings & Service Approach</span>
            <ArrowRight className="w-4 h-4 text-[#9C6B38]" />
          </button>
        </div>
      </section>

      {/* 4. ABOUT TEASER / LYON HERITAGE */}
      <section
        id="about-teaser-section"
        aria-label="About Douceurs Maison in Lyon"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#FAF5EE] rounded-2xl border border-[#E5DACD] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9C6B38]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Handmade in Lyon</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#28221D]">
                Artisanal Pastry at 8 Rue Mercière
              </h2>
              <p className="text-sm sm:text-base text-[#615347] leading-relaxed">
                Douceurs Maison is a small pastry business located in the heart of Lyon. We focus on personal care, thoughtful preparation, and creating custom cakes, cupcakes, celebration desserts, and handmade sweet treats that turn ordinary days and special milestones into sweet memories.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="teaser-about-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#28221D] text-[#FAF7F2] text-sm font-medium hover:bg-[#3F352E] transition-colors"
                >
                  <span>Read About Our Pastry Business</span>
                  <ArrowRight className="w-4 h-4 text-[#E5BE85]" />
                </button>
                <button
                  id="teaser-gallery-btn"
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#28221D] border border-[#DDD1C2] hover:border-[#9C6B38] text-sm font-medium transition-colors"
                >
                  <span>Browse Our Photo Gallery</span>
                </button>
              </div>
            </div>

            {/* Quick business fact summary card */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#E2D5C6] shadow-2xs space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#28221D]">
                Business Information
              </h3>
              <div className="space-y-3 text-sm text-[#5B4E44]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9C6B38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#28221D]">Address: </span>
                    <span>8 Rue Mercière, 69002 Lyon, France</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#9C6B38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#28221D]">Telephone: </span>
                    <a href={BUSINESS.phoneTel} className="text-[#28221D] underline hover:text-[#9C6B38]">
                      +33 4 72 64 18 35
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#9C6B38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#28221D]">Category: </span>
                    <span>Cakes & Desserts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section
        id="home-contact-cta-section"
        aria-label="Get in Touch"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#28221D] text-[#FAF7F2] rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF7F2]">
              Planning a Celebration in Lyon?
            </h2>
            <p className="text-sm sm:text-base text-[#D4C8BC] leading-relaxed">
              Whether you need a bespoke custom cake, a spread of gourmet cupcakes, or handmade sweet treats, we are here to help bring your celebration to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-send-enquiry-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7F2] text-[#28221D] font-medium text-sm hover:bg-[#EBE2D7] transition-all shadow-xs"
            >
              <span>Send an Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#9C6B38]" />
            </button>
            <a
              id="cta-call-direct-btn"
              href={BUSINESS.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#3D342C] text-[#FAF7F2] border border-[#52463C] hover:border-[#C4883C] font-medium text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#E5BE85]" />
              <span>Call +33 4 72 64 18 35</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
