import { BusinessInfo, Offering, GalleryItem, FaqItem } from '../types';

import heroBannerImg from '../assets/images/bakery_hero_banner_1789836335094.jpg';
import customCakeImg from '../assets/images/custom_cakes_detail_1789836352277.jpg';
import cupcakesImg from '../assets/images/cupcakes_collection_1789836369496.jpg';
import celebrationDessertImg from '../assets/images/celebration_desserts_1789836383444.jpg';
import sweetTreatsImg from '../assets/images/handmade_sweet_treats_1789836400267.jpg';

export const BUSINESS: BusinessInfo = {
  name: 'Douceurs Maison',
  category: 'Cakes & Desserts',
  address: '8 Rue Mercière',
  postalCode: '69002',
  city: 'Lyon',
  country: 'France',
  fullAddress: '8 Rue Mercière, 69002 Lyon, France',
  phone: '+33 4 72 64 18 35',
  phoneTel: 'tel:+33472641835',
  rating: 4.9,
  reviewCount: 28,
  ratingLabel: '4.9/5 — 28 Google Reviews',
  aboutShort:
    'Small pastry business specializing in custom cakes, cupcakes, celebration desserts and handmade sweet treats crafted with care in Lyon.',
};

export const HERO_ASSETS = {
  banner: heroBannerImg,
  customCake: customCakeImg,
  cupcakes: cupcakesImg,
  celebrationDessert: celebrationDessertImg,
  sweetTreats: sweetTreatsImg,
};

export const OFFERINGS: Offering[] = [
  {
    id: 'custom-cakes',
    title: 'Custom Cakes',
    category: 'Bespoke Pastry',
    summary:
      'Individually designed cakes crafted for your milestone moments, personalized to your celebration in Lyon.',
    description:
      'At Douceurs Maison, our custom cakes are tailored for birthdays, weddings, anniversaries, and special milestones. Every cake is handmade with attentive artisanal care right here at 8 Rue Mercière.',
    image: customCakeImg,
    alt: 'Handcrafted custom celebration cake with artisanal buttercream piping created at Douceurs Maison in Lyon',
    highlights: [
      'Tailored design for personal and milestone celebrations',
      'Handcrafted pastry technique and delicate decoration',
      'Artisanal assembly at our 8 Rue Mercière workshop',
    ],
  },
  {
    id: 'cupcakes',
    title: 'Cupcakes',
    category: 'Individual Delights',
    summary:
      'Artisanal cupcakes featuring delicate frosting swirls and refined finishes, ideal for gatherings or personal treats.',
    description:
      'Our cupcakes offer a refined single-serving dessert experience. Hand-piped with care and precision, they are ideal for party spreads, event dessert tables, or afternoon sweet moments in Lyon.',
    image: cupcakesImg,
    alt: 'Artisanal gourmet cupcakes with velvety piped buttercream swirls and fruit garnish',
    highlights: [
      'Delicate hand-piped frosting swirls',
      'Carefully crafted individual portions',
      'Perfect for gatherings, gifts, and dessert displays',
    ],
  },
  {
    id: 'celebration-desserts',
    title: 'Celebration Desserts',
    category: 'Special Events',
    summary:
      'Elegant dessert centerpieces designed to elevate your celebratory tables and special gatherings.',
    description:
      'Mark special occasions with centerpiece celebration desserts crafted to impress. Each piece reflects our passion for pastry craftsmanship and sweet celebratory moments in Lyon.',
    image: celebrationDessertImg,
    alt: 'Artisanal celebration dessert centerpiece with delicate pastry layers and fruit arrangement',
    highlights: [
      'Created specifically for memorable celebrations and events',
      'Balanced textures, beautiful presentation, and refined finish',
      'Handcrafted pastry centerpieces prepared in Lyon',
    ],
  },
  {
    id: 'handmade-sweet-treats',
    title: 'Handmade Sweet Treats',
    category: 'Artisan Confections',
    summary:
      'A delicate collection of handmade sweet confections crafted with care for everyday and special moments.',
    description:
      'From delicate macarons to assorted handcrafted confections, our sweet treats are made with traditional pastry care. Enjoy them as gifts, party favors, or an indulgent accompaniment to tea and coffee.',
    image: sweetTreatsImg,
    alt: 'Assortment of handmade artisan sweet treats and macarons arranged on marble surface',
    highlights: [
      'Handmade with small-batch artisan techniques',
      'Refined confections suited for gifting or dessert platters',
      'Authentic pastry craftsmanship in the heart of Lyon',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-cake-1',
    title: 'Artisan Custom Celebration Cake',
    category: 'custom-cakes',
    categoryLabel: 'Custom Cakes',
    image: customCakeImg,
    alt: 'Bespoke custom cake with elegant handcrafted buttercream textures and delicate finish',
    description:
      'A custom celebration cake designed and handmade at Douceurs Maison in Lyon.',
  },
  {
    id: 'g-cupcake-1',
    title: 'Velvety Frosted Gourmet Cupcakes',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    image: cupcakesImg,
    alt: 'Gourmet cupcakes featuring artisan swirl frosting and fresh berry touches',
    description:
      'Freshly piped cupcakes crafted for celebrations and afternoon treats.',
  },
  {
    id: 'g-dessert-1',
    title: 'French Celebration Patisserie Centerpiece',
    category: 'celebration-desserts',
    categoryLabel: 'Celebration Desserts',
    image: celebrationDessertImg,
    alt: 'Layered celebration dessert with glazed fruit and artisanal pastry presentation',
    description:
      'A celebratory dessert crafted to be the centerpiece of memorable gatherings.',
  },
  {
    id: 'g-treats-1',
    title: 'Handcrafted Sweet Treats & Macarons',
    category: 'sweet-treats',
    categoryLabel: 'Sweet Treats',
    image: sweetTreatsImg,
    alt: 'Delicate handmade macarons and pastry confections neatly presented',
    description:
      'Small-batch handmade confections and macarons crafted at our Lyon pastry shop.',
  },
  {
    id: 'g-hero-1',
    title: 'Douceurs Maison Bakery Showcase',
    category: 'custom-cakes',
    categoryLabel: 'Custom Cakes',
    image: heroBannerImg,
    alt: 'Bakery counter showcase with bespoke celebration cake, cupcakes, and artisan desserts',
    description:
      'An artisan showcase featuring our signature custom cakes and pastries in Lyon.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Where is Douceurs Maison located?',
    answer:
      'Douceurs Maison is located at 8 Rue Mercière, 69002 Lyon, France, in the vibrant Presqu’île district of central Lyon.',
    actionPrompt: 'View our location details',
    actionPage: 'contact',
  },
  {
    question: 'What types of desserts does Douceurs Maison make?',
    answer:
      'Douceurs Maison is a small pastry business specializing in four core offerings: Custom Cakes, Cupcakes, Celebration Desserts, and Handmade Sweet Treats.',
    actionPrompt: 'Explore our full dessert offerings',
    actionPage: 'cakes-and-desserts',
  },
  {
    question: 'How can I inquire about a custom cake or celebration dessert?',
    answer:
      'You can reach us directly by calling +33 4 72 64 18 35 or by submitting our contact enquiry form with your event details and requirements.',
    actionPrompt: 'Get in touch with us',
    actionPage: 'contact',
  },
  {
    question: 'What is Douceurs Maison’s telephone number?',
    answer:
      'You can contact us by phone at +33 4 72 64 18 35. You can also click the phone links throughout this website to call directly.',
    actionPrompt: 'Call +33 4 72 64 18 35',
  },
  {
    question: 'What are Douceurs Maison’s customer ratings?',
    answer:
      'Douceurs Maison has a Google Rating of 4.9/5 based on 28 customer reviews.',
  },
  {
    question: 'How do I check pricing, order lead times, or dietary accommodations?',
    answer:
      'Because every custom cake and celebration order has unique specifications, please contact us directly at +33 4 72 64 18 35 or send an enquiry. We will gladly discuss your specific date, design ideas, and requirements.',
    actionPrompt: 'Send an enquiry to discuss details',
    actionPage: 'contact',
  },
  {
    question: 'Do you offer delivery or in-store collection?',
    answer:
      'For details regarding collection from our address at 8 Rue Mercière, 69002 Lyon, or any specific logistics for your order, please speak with us directly by phone or via the enquiry form.',
    actionPrompt: 'Contact Douceurs Maison',
    actionPage: 'contact',
  },
];

export const NAV_LINKS = [
  { id: 'home' as const, label: 'Home' },
  { id: 'cakes-and-desserts' as const, label: 'Cakes & Desserts' },
  { id: 'gallery' as const, label: 'Gallery' },
  { id: 'about' as const, label: 'About' },
  { id: 'faq' as const, label: 'FAQ' },
  { id: 'contact' as const, label: 'Contact' },
];
