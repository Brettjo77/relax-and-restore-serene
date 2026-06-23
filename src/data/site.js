/**
 * Single source of truth for site content (spec §7, §9, §10).
 * Values in [brackets] are PLACEHOLDERS awaiting confirmation from Lisa.
 * Update PLACEHOLDER entries before launch — see CLAUDE.md / spec §16.
 */

export const business = {
  name: 'Relax & Restore Massage',
  wordmark: 'RELAX & RESTORE',
  tagline: 'Mobile Massage · Reading',
  areaServed: 'Lower Earley, Reading — serving Reading & surrounding areas',
  locality: 'Lower Earley',
  region: 'Reading',
  // PLACEHOLDERS — confirm with Lisa (spec §10):
  phone: '[07XXX XXX XXX]',
  phoneHref: 'tel:+44',          // PLACEHOLDER — set real tel: link
  email: '[hello@relaxandrestore.co.uk]',
  emailHref: 'mailto:hello@relaxandrestore.co.uk', // PLACEHOLDER
  instagramHandle: '@relax.restore1',
  instagramUrl: 'https://www.instagram.com/relax.restore1/',
  hours: 'Mon–Fri 9am–8pm · Sat 9am–5pm · Sun by appointment', // PLACEHOLDER — confirm
  offer: '10% off your first treatment for new clients',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#services' },
  { label: 'How it works', href: '#ways' },
];

// Spec §7.4 — exactly two treatments. Prices are `from £—` placeholders.
export const services = [
  {
    num: '01',
    name: 'Full Body Swedish Massage',
    durations: '60 min · 90 min',
    description:
      'A flowing, full-body massage for deep relaxation, improved circulation and total stress relief.',
    price: 'from £—', // PLACEHOLDER — confirm per duration
    image: 'massage',
  },
  {
    num: '02',
    name: 'Back, Neck & Shoulders',
    durations: '30 min · 45 min',
    description:
      'Targeted relief for tension and aches where you carry stress the most — perfect for a busy week.',
    price: 'from £—', // PLACEHOLDER — confirm per duration
    image: 'towels',
  },
];

// Spec §7.5 — benefits of Swedish massage (icon key + label).
export const benefits = [
  { icon: 'muscle', label: 'Relieves muscle tension & stiffness' },
  { icon: 'circulation', label: 'Improves circulation & oxygen flow' },
  { icon: 'calm', label: 'Reduces stress & anxiety' },
  { icon: 'sleep', label: 'Improves sleep quality' },
  { icon: 'flex', label: 'Enhances flexibility & range of motion' },
  { icon: 'heal', label: 'Supports natural healing & wellness' },
];

// Spec §7.6 — two ways to enjoy a treatment.
export const ways = [
  {
    icon: 'home',
    title: 'Mobile to you',
    body: 'Relax in the comfort of your own home without having to travel. I bring everything needed for a professional treatment to you.',
    image: 'room',
  },
  {
    icon: 'lotus',
    title: 'Treatment room',
    body: 'Escape to a peaceful, calming space in Lower Earley dedicated entirely to your wellbeing.',
    image: 'towels',
  },
];

// Spec §7.7 — built as an array so more can be added later.
export const testimonials = [
  {
    name: 'Julie Harris',
    rating: 5,
    quote:
      'Such a lovely massage! The treatment was relaxing, professional, and left me feeling completely refreshed. The atmosphere was calm and welcoming. Highly recommend and will definitely be returning.',
  },
];

// Spec §9 — contact form select options.
export const treatmentOptions = [
  'Full Body Swedish Massage',
  'Back, Neck & Shoulders',
  'Not sure yet',
];

export const locationOptions = [
  { value: 'mobile', label: 'Mobile — at my home' },
  { value: 'room', label: 'Treatment room (Lower Earley)' },
];

export const timeOptions = ['Morning', 'Afternoon', 'Evening'];
