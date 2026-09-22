import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { BUSINESS } from './data/business';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CakesAndDessertsPage } from './pages/CakesAndDessertsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

const PAGE_METADATA: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Douceurs Maison | Artisan Cakes & Desserts in Lyon',
    description:
      'Beautiful Cakes Made for Sweet Moments. Custom cakes, cupcakes, celebration desserts and handmade sweet treats crafted with care in Lyon at 8 Rue Mercière.',
  },
  'cakes-and-desserts': {
    title: 'Cakes & Desserts | Douceurs Maison Lyon',
    description:
      'Explore our handcrafted Custom Cakes, Cupcakes, Celebration Desserts, and Handmade Sweet Treats in Lyon. Inquire for your special moments.',
  },
  gallery: {
    title: 'Bakery Gallery | Douceurs Maison Lyon',
    description:
      'View our artisan portfolio of bespoke custom cakes, velvety cupcakes, celebration patisserie, and handmade sweet treats.',
  },
  about: {
    title: 'About Us | Douceurs Maison Lyon',
    description:
      'Learn about Douceurs Maison, a small pastry business specializing in custom cakes and handmade sweet treats at 8 Rue Mercière, Lyon.',
  },
  faq: {
    title: 'Frequently Asked Questions | Douceurs Maison Lyon',
    description:
      'Find answers regarding our pastry offerings, ordering process, and contact information for Douceurs Maison in Lyon.',
  },
  contact: {
    title: 'Contact Us | Douceurs Maison Lyon',
    description:
      'Get in touch with Douceurs Maison at 8 Rue Mercière, 69002 Lyon, France or call +33 4 72 64 18 35 for your cake and dessert inquiries.',
  },
};

export default function App() {
  // Determine initial page from URL hash, fallback to 'home'
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validPages: PageId[] = ['home', 'cakes-and-desserts', 'gallery', 'about', 'faq', 'contact'];
    return validPages.includes(hash as PageId) ? (hash as PageId) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  // Sync hash changes (e.g. browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const newPage = getPageFromHash();
      setCurrentPage(newPage);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and meta description dynamically
  useEffect(() => {
    const meta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;
    document.title = meta.title;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', meta.description);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="app-root-layout" className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#28221D]">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#28221D] text-[#FAF7F2] rounded-md font-medium text-sm shadow-md"
      >
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'cakes-and-desserts' && (
          <CakesAndDessertsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
