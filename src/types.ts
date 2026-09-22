export type PageId = 'home' | 'cakes-and-desserts' | 'gallery' | 'about' | 'faq' | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  fullAddress: string;
  phone: string;
  phoneTel: string;
  rating: number;
  reviewCount: number;
  ratingLabel: string;
  aboutShort: string;
}

export interface Offering {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'custom-cakes' | 'cupcakes' | 'celebration-desserts' | 'sweet-treats';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  actionPrompt?: string;
  actionPage?: PageId;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
