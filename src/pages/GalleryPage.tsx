import React, { useState, useMemo } from 'react';
import { Maximize2, Sparkles, Filter, ArrowRight } from 'lucide-react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/business';
import { Lightbox } from '../components/Lightbox';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

type FilterCategory = 'all' | 'custom-cakes' | 'cupcakes' | 'celebration-desserts' | 'sweet-treats';

const CATEGORIES: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Creations' },
  { id: 'custom-cakes', label: 'Custom Cakes' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'celebration-desserts', label: 'Celebration Desserts' },
  { id: 'sweet-treats', label: 'Sweet Treats' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setActiveImageIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  return (
    <div id="page-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C6B38]">
          Visual Portfolio
        </span>
        <h1
          id="gallery-heading"
          className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#28221D]"
        >
          Bakery Gallery
        </h1>
        <p className="text-base sm:text-lg text-[#5D5045] leading-relaxed">
          Explore a selection of our handcrafted custom cakes, velvety cupcakes, celebration desserts, and artisanal sweet treats prepared with care in Lyon.
        </p>
      </header>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count =
            cat.id === 'all'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

          return (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9C6B38] ${
                isActive
                  ? 'bg-[#28221D] text-[#FAF7F2] shadow-xs'
                  : 'bg-white text-[#56493F] border border-[#DDD1C2] hover:bg-[#F5EDE3]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-[#FAF7F2]' : 'bg-[#EFE8DF] text-[#706256]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div
        id="gallery-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`gallery-card-${item.id}`}
            onClick={() => handleOpenLightbox(item)}
            className="group relative bg-white rounded-xl overflow-hidden border border-[#E4D7CA] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            tabIndex={0}
            role="button"
            aria-label={`View enlarged photo of ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenLightbox(item);
              }
            }}
          >
            {/* Image Box */}
            <div className="relative aspect-4/3 overflow-hidden bg-[#F2ECE3]">
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#28221D] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-5 h-5 text-[#9C6B38]" />
                </span>
              </div>

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#28221D] shadow-xs border border-[#E7DDD0]">
                  {item.categoryLabel}
                </span>
              </div>
            </div>

            {/* Description Below Image */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#28221D] group-hover:text-[#9C6B38] transition-colors">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#66574D] line-clamp-2">
                {item.description}
              </p>
              <div className="pt-2 text-xs font-medium text-[#9C6B38] flex items-center gap-1">
                <span>Click to enlarge photo</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
      />

      {/* Gallery Callout / Inquire */}
      <section className="bg-[#FAF4ED] rounded-2xl border border-[#E5DACD] p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#28221D]">
          Inspired by Our Pastry Creations?
        </h2>
        <p className="text-sm sm:text-base text-[#65584D] max-w-2xl mx-auto leading-relaxed">
          Every custom cake and dessert order is individually planned and handmade with care. Let us know what you have in mind for your upcoming celebration.
        </p>
        <div className="pt-2">
          <button
            id="gallery-enquire-btn"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#28221D] text-[#FAF7F2] text-sm font-medium hover:bg-[#3E342C] transition-colors"
          >
            <span>Inquire About a Custom Creation</span>
            <ArrowRight className="w-4 h-4 text-[#E5BE85]" />
          </button>
        </div>
      </section>
    </div>
  );
};
