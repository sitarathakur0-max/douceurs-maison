import React, { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, FAQ_ITEMS } from '../data/business';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  // All accordion items collapsed by default or first open
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div id="page-faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <header className="text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C6B38]">
          Questions & Answers
        </span>
        <h1
          id="faq-main-heading"
          className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#28221D]"
        >
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#605247] leading-relaxed max-w-2xl mx-auto">
          Helpful information regarding Douceurs Maison. For specific order details, dates, or bespoke requests, we invite you to get in touch with us directly.
        </p>
      </header>

      {/* Accordion FAQ List */}
      <div id="faq-accordion-list" className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              id={`faq-item-${index}`}
              className="bg-white rounded-xl border border-[#E6DCD0] overflow-hidden shadow-2xs transition-all duration-200"
            >
              <button
                type="button"
                id={`faq-question-btn-${index}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#FAF7F2] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]"
              >
                <span className="font-serif text-lg sm:text-xl font-bold text-[#28221D] pr-4">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-full bg-[#F3EDE5] text-[#28221D] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#E8DDD1]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-btn-${index}`}
                  className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#5C4F44] leading-relaxed border-t border-[#F2ECE3] space-y-3"
                >
                  <p>{item.answer}</p>
                  {item.actionPage ? (
                    <button
                      onClick={() => onNavigate(item.actionPage!)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C6B38] hover:text-[#28221D] underline underline-offset-4 transition-colors"
                    >
                      <span>{item.actionPrompt}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    item.actionPrompt && (
                      <a
                        href={BUSINESS.phoneTel}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C6B38] hover:text-[#28221D] underline underline-offset-4 transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{item.actionPrompt}</span>
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions prompt */}
      <section className="bg-[#FAF4ED] rounded-2xl border border-[#E5DACD] p-8 sm:p-10 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#F2ECE3] flex items-center justify-center mx-auto text-[#9C6B38]">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#28221D]">
          Have a specific question about your order?
        </h2>
        <p className="text-sm text-[#63554A] max-w-lg mx-auto leading-relaxed">
          Because our pastry work is custom and handmade, speaking with us directly is the fastest way to get accurate answers for your celebration.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            id="faq-contact-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#28221D] text-[#FAF7F2] text-sm font-medium hover:bg-[#3E342C] transition-colors"
          >
            <span>Send Us an Enquiry</span>
            <ArrowRight className="w-4 h-4 text-[#E5BE85]" />
          </button>
          <a
            href={BUSINESS.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#28221D] border border-[#DDD0C1] hover:border-[#9C6B38] text-sm font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#9C6B38]" />
            <span>Call {BUSINESS.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
