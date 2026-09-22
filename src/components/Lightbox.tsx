import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Container to prevent backdrop click closing when clicking inside content */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with count and close */}
        <div className="w-full flex items-center justify-between text-white/80 pb-3 px-2">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-[#FAF7F2]">
              {currentItem.categoryLabel}
            </span>
            <span className="text-xs text-white/60">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Frame with Prev/Next buttons */}
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-lg bg-black/40">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-md shadow-2xl transition-all duration-200"
          />

          {/* Previous Button */}
          {items.length > 1 && (
            <button
              id="lightbox-prev-btn"
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {items.length > 1 && (
            <button
              id="lightbox-next-btn"
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption */}
        <div className="w-full text-center text-white pt-4 px-4">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
            {currentItem.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl mx-auto">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
