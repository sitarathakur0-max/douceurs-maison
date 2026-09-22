import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS } from '../data/business';

interface TrustBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'light' | 'dark' | 'card';
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  size = 'md',
  className = '',
  variant = 'light',
}) => {
  const isDark = variant === 'dark';
  const isCard = variant === 'card';

  return (
    <div
      id="trust-badge"
      className={`inline-flex items-center gap-2.5 rounded-full transition-all ${
        isCard
          ? 'bg-white/90 backdrop-blur-xs border border-[#E8DFD5] px-4 py-2 shadow-xs'
          : isDark
          ? 'bg-[#352C26] text-[#FAF7F2] px-3.5 py-1.5 border border-[#4A3E37]'
          : 'bg-[#F3ECE4] text-[#28221D] px-3.5 py-1.5 border border-[#E5DACD]'
      } ${className}`}
      aria-label={`${BUSINESS.name} is rated 4.9 out of 5 based on 28 Google reviews`}
    >
      <div className="flex items-center gap-0.5 text-[#C4883C]" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} fill-current`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
        <span className="font-semibold tracking-tight">{BUSINESS.rating}/5</span>
        <span className="text-stone-400" aria-hidden="true">•</span>
        <span className={`${isDark ? 'text-stone-300' : 'text-[#655950]'}`}>
          {BUSINESS.reviewCount} Google Reviews
        </span>
      </div>
    </div>
  );
};
