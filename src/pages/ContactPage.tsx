import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Sparkles, Clock } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { ContactFormState } from '../types';
import { TrustBadge } from '../components/TrustBadge';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormState> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject or dessert category.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your celebration or request.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message of at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate brief processing for realistic client-side interaction
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div id="page-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C6B38]">
          Get in Touch
        </span>
        <h1
          id="contact-main-heading"
          className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#28221D]"
        >
          Contact Douceurs Maison
        </h1>
        <p className="text-base sm:text-lg text-[#5F5146] leading-relaxed">
          We would love to hear about your celebration. Reach us by telephone or send an enquiry using the form below.
        </p>
      </header>

      {/* Main Grid: Contact Details & Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Official Business Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-[#E6DCD0] p-6 sm:p-8 space-y-6 shadow-2xs">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#28221D] block">
                {BUSINESS.name}
              </span>
              <p className="text-xs uppercase tracking-wider text-[#9C6B38] font-semibold mt-1">
                Category: {BUSINESS.category}
              </p>
            </div>

            <p className="text-sm text-[#5D4F44] leading-relaxed">
              {BUSINESS.aboutShort}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#EFE8DF] text-sm">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#FAF4ED] text-[#9C6B38] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8A7B6F]">
                    Our Address
                  </h2>
                  <p className="font-medium text-[#28221D] mt-0.5">
                    {BUSINESS.address}
                  </p>
                  <p className="text-[#64564C]">
                    {BUSINESS.postalCode} {BUSINESS.city}, {BUSINESS.country}
                  </p>
                  <p className="text-xs text-[#8F8176] mt-1">
                    Located in central Lyon (2nd arrondissement)
                  </p>
                </div>
              </div>

              {/* Clickable Phone */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="p-2 rounded-lg bg-[#FAF4ED] text-[#9C6B38] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8A7B6F]">
                    Telephone
                  </h2>
                  <a
                    id="contact-phone-direct-link"
                    href={BUSINESS.phoneTel}
                    className="font-semibold text-lg text-[#28221D] hover:text-[#9C6B38] transition-colors underline underline-offset-4 block mt-0.5"
                    title={`Click to call ${BUSINESS.name}`}
                  >
                    {BUSINESS.phone}
                  </a>
                  <p className="text-xs text-[#8F8176] mt-1">
                    Click to place a call directly from your device.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Rating verification */}
            <div className="pt-4 border-t border-[#EFE8DF]">
              <TrustBadge variant="light" size="md" />
            </div>
          </div>

          {/* Quick Notice Card */}
          <div className="bg-[#FAF5EF] rounded-xl border border-[#E5DACD] p-5 space-y-2 text-xs text-[#63554B]">
            <p className="font-semibold text-[#28221D] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#9C6B38]" />
              <span>Planning Ahead</span>
            </p>
            <p className="leading-relaxed">
              Because all custom cakes, celebration desserts, and sweet treats are handmade with artisanal care, we encourage getting in touch as soon as your celebration date is determined.
            </p>
          </div>
        </div>

        {/* Right Column: Professional Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-[#E6DCD0] p-6 sm:p-10 shadow-2xs space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#28221D]">
                Send an Enquiry
              </h2>
              <p className="text-sm text-[#615247]">
                Fill in the details below to inquire about custom cakes, cupcakes, or celebration desserts.
              </p>
            </div>

            {submitted ? (
              <div
                id="contact-success-banner"
                className="bg-[#FAF7F2] rounded-xl border border-[#D8C7B4] p-6 sm:p-8 space-y-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE4D6] text-[#9C6B38] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#28221D]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#5C4F44] leading-relaxed max-w-md mx-auto">
                    Your enquiry details have been recorded in this client preview.
                  </p>
                </div>

                {/* Factual submission preview summary */}
                <div className="bg-white rounded-lg p-4 text-left border border-[#E5DACD] text-xs space-y-1.5 text-[#594B40]">
                  <p><strong className="text-[#28221D]">Name:</strong> {formData.name}</p>
                  <p><strong className="text-[#28221D]">Email:</strong> {formData.email}</p>
                  <p><strong className="text-[#28221D]">Subject:</strong> {formData.subject}</p>
                  <p><strong className="text-[#28221D]">Message:</strong> {formData.message}</p>
                </div>

                <div className="p-3 bg-[#F2ECE3] rounded-md text-xs text-[#706155] text-left">
                  <strong>Notice:</strong> This preview provides client-side form validation and feedback. For immediate orders or questions, please call <a href={BUSINESS.phoneTel} className="font-bold underline text-[#28221D]">{BUSINESS.phone}</a>.
                </div>

                <button
                  id="contact-send-another-btn"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#28221D] text-[#FAF7F2] text-xs font-medium hover:bg-[#3D332B] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                id="contact-enquiry-form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#5A4D42]"
                  >
                    Your Name <span className="text-[#9C6B38]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Claire Dupont"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28221D] placeholder:text-[#9A8D81] bg-[#FAF7F2] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#9C6B38] transition-all ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#DDD1C2]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#5A4D42]"
                  >
                    Email Address <span className="text-[#9C6B38]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. claire@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28221D] placeholder:text-[#9A8D81] bg-[#FAF7F2] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#9C6B38] transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#DDD1C2]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject / Offering selector */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#5A4D42]"
                  >
                    Subject / Dessert Category <span className="text-[#9C6B38]">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28221D] bg-[#FAF7F2] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#9C6B38] transition-all ${
                      errors.subject ? 'border-red-400 bg-red-50/20' : 'border-[#DDD1C2]'
                    }`}
                  >
                    <option value="">Select a topic...</option>
                    <option value="Custom Cakes Inquiry">Custom Cakes</option>
                    <option value="Cupcakes Order Inquiry">Cupcakes</option>
                    <option value="Celebration Desserts Inquiry">Celebration Desserts</option>
                    <option value="Handmade Sweet Treats Inquiry">Handmade Sweet Treats</option>
                    <option value="General Question">General Question</option>
                  </select>
                  {errors.subject && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#5A4D42]"
                  >
                    Your Message / Event Details <span className="text-[#9C6B38]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us about your event, preferred dessert style, or questions..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28221D] placeholder:text-[#9A8D81] bg-[#FAF7F2] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#9C6B38] transition-all resize-y ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#DDD1C2]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2 space-y-3">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#28221D] text-[#FAF7F2] text-sm font-medium hover:bg-[#3D332B] disabled:opacity-50 transition-all shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38]"
                  >
                    {submitting ? (
                      <span>Validating & Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#E5BE85]" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#786A5F] text-center leading-relaxed">
                    * Note: This website provides client-side form validation. For immediate telephone consultations or urgent orders, please call <a href={BUSINESS.phoneTel} className="underline font-semibold text-[#28221D]">{BUSINESS.phone}</a>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
