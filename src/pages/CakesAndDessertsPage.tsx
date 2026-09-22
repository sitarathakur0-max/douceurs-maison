import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, OFFERINGS } from '../data/business';

interface CakesAndDessertsPageProps {
  onNavigate: (page: PageId) => void;
}

export const CakesAndDessertsPage: React.FC<CakesAndDessertsPageProps> = ({ onNavigate }) => {
  return (
    <div id="page-cakes-and-desserts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C6B38]">
          Our Pastry Services
        </span>
        <h1
          id="cakes-desserts-heading"
          className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#28221D]"
        >
          Cakes & Desserts
        </h1>
        <p className="text-base sm:text-lg text-[#5E5146] leading-relaxed">
          Crafted with care in Lyon. Explore our four signature offering categories: Custom Cakes, Cupcakes, Celebration Desserts, and Handmade Sweet Treats.
        </p>
      </header>

      {/* Service Sections: Alternating layout with photography and factual descriptions */}
      <div className="space-y-16 sm:space-y-20">
        {OFFERINGS.map((offering, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <article
              key={offering.id}
              id={`service-section-${offering.id}`}
              className="bg-white rounded-2xl border border-[#E7DDD0] overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Image side */}
                <div
                  className={`lg:col-span-6 relative aspect-4/3 lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[380px] bg-[#F2ECE3] overflow-hidden ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={offering.image}
                    alt={offering.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#28221D] shadow-2xs border border-[#E7DDD0]">
                      {offering.category}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#9C6B38]">
                      Offering {idx + 1} of {OFFERINGS.length}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#28221D]">
                      {offering.title}
                    </h2>
                  </div>

                  <p className="text-base text-[#56493F] leading-relaxed">
                    {offering.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#7D6F63]">
                      Craft Highlights
                    </p>
                    <ul className="space-y-2 text-sm text-[#4E4238]">
                      {offering.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#9C6B38] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clear Enquiry CTAs */}
                  <div className="pt-4 border-t border-[#EFE8DF] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      id={`enquire-btn-${offering.id}`}
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#28221D] text-[#FAF7F2] text-sm font-medium hover:bg-[#3D332B] transition-colors"
                    >
                      <span>Inquire About {offering.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#E5BE85]" />
                    </button>
                    <a
                      href={BUSINESS.phoneTel}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-[#28221D] border border-[#DDD0C1] hover:border-[#9C6B38] text-sm font-medium transition-colors"
                      title={`Call ${BUSINESS.phone} to discuss ${offering.title}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-[#9C6B38]" />
                      <span>Call {BUSINESS.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Consultation & Order Prompt */}
      <section className="bg-[#FAF4EC] rounded-2xl border border-[#E3D6C6] p-8 sm:p-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl font-bold text-[#28221D]">
            Discuss Your Custom Pastry Project
          </h2>
          <p className="text-sm sm:text-base text-[#5F5145] leading-relaxed">
            All our cakes, cupcakes, and sweet treats are prepared with personal attention at 8 Rue Mercière in Lyon. Contact us to discuss your celebration date and ideas.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cakes-page-contact-cta"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#28221D] text-[#FAF7F2] font-medium text-sm hover:bg-[#3E342C] transition-colors"
          >
            <span>Go to Enquiry Form</span>
            <ArrowRight className="w-4 h-4 text-[#E5BE85]" />
          </button>
          <a
            href={BUSINESS.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#28221D] border border-[#D5C7B7] hover:border-[#9C6B38] font-medium text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#9C6B38]" />
            <span>Call +33 4 72 64 18 35</span>
          </a>
        </div>
      </section>
    </div>
  );
};
