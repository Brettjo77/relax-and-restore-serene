/**
 * Single source of truth for site content (spec §7, §9, §10).
 * Values in [brackets] are PLACEHOLDERS awaiting confirmation from Lisa.
 * Update PLACEHOLDER entries before launch — see CLAUDE.md / spec §16.
 */

export const business = {
  name: "Lisa's Relax & Restore Massage",
  wordmark: 'RELAX & RESTORE',
  tagline: 'Mobile Massage · Reading',
  areaServed:
    'Mobile across Wokingham, Bracknell, Sandhurst & Crowthorne — treatment room in Lower Earley, Reading',
  // Clean place-list for structured data / JSON-LD (no marketing punctuation):
  areaServedSchema:
    'Wokingham, Bracknell, Sandhurst, Crowthorne and Lower Earley, Reading, Berkshire',
  locality: 'Lower Earley',
  region: 'Reading',
  // Confirmed by Lisa (2026-06-28):
  phone: '07867 303361',
  phoneHref: 'tel:+447867303361',
  email: 'lisarelax@outlook.com',
  emailHref: 'mailto:lisarelax@outlook.com',
  instagramHandle: '@relax.restore1',
  instagramUrl: 'https://www.instagram.com/relax.restore1/',
  // PLACEHOLDERS — Lisa to send links/details (keep visible, don't fabricate):
  facebookUrl: '[facebook-url]',    // PLACEHOLDER — set Lisa's Facebook page URL
  tiktokUrl: '[tiktok-url]',        // PLACEHOLDER — set Lisa's TikTok URL
  hours: 'Mon–Fri 9am–8pm · Sat 9am–5pm · Sun by appointment', // PLACEHOLDER — confirm
  offer: '10% off your first treatment for new clients',
  // Prices confirmed by email enquiry. Add the "from £XX" floor once Lisa sends her price list,
  // e.g. 'Prices from £35 · confirmed by email enquiry'. Keep it readable until then (no bare dash).
  pricingNote: 'Prices confirmed by email enquiry',
};

// Lisa's professional credentials (spec §16 trust). Facts + logos only — NO certificate
// image and NO surname. Insurance line is a PLACEHOLDER until Lisa confirms — don't assert it.
export const credentials = {
  qualification: 'Diploma in Swedish Body Massage',
  issuer: 'The Beauty Academy',
  accreditation: 'ABT (Associated Beauty Therapists) accredited',
  insurance: '[Fully insured — confirm with Lisa]', // PLACEHOLDER
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#services' },
  { label: 'How it works', href: '#ways' },
];

// Lisa's current treatment list (supersedes the old "exactly two treatments" spec rule).
// No per-treatment prices — "prices from" guide + quote by email (business.pricingNote).
// Pedicures & Lymphatic Drainage launch ~mid-July 2026 — shown as `comingSoon`.
export const services = [
  {
    num: '01',
    name: 'Swedish Full Body Massage',
    durations: '60 min · 90 min',
    description:
      'A flowing, full-body massage for deep relaxation, improved circulation and total stress relief.',
    comingSoon: false,
    image: 'massage',
  },
  {
    num: '02',
    name: 'Back, Neck & Shoulder Massage',
    durations: '30 min',
    description:
      'Targeted relief for tension and aches where you carry stress the most — perfect for a busy week.',
    comingSoon: false,
    image: 'towels',
  },
  {
    num: '03',
    name: 'Pedicures',
    durations: 'Coming soon',
    description:
      'A relaxing, restorative pedicure to leave your feet feeling cared for. Launching mid-July — get in touch to register your interest.',
    comingSoon: true,
  },
  {
    num: '04',
    name: 'Lymphatic Drainage',
    durations: 'Coming soon',
    description:
      'A gentle, rhythmic treatment that encourages natural drainage to reduce puffiness and support wellbeing. Launching mid-July — get in touch to register your interest.',
    comingSoon: true,
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
    body: 'Relax in the comfort of your own home without having to travel — mobile across Wokingham, Bracknell, Sandhurst and Crowthorne. I bring everything needed for a professional treatment to you.',
    image: 'room',
  },
  {
    icon: 'lotus',
    title: 'Treatment room',
    body: 'Escape to a peaceful, calming space in Lower Earley dedicated entirely to your wellbeing.',
    image: 'towels',
  },
];

// Array so more can be added later. All are Lisa's own clients (cleared to use).
export const testimonials = [
  {
    name: 'Julie Harris',
    rating: 5,
    quote:
      'Such a lovely massage! The treatment was relaxing, professional, and left me feeling completely refreshed. The atmosphere was calm and welcoming. Highly recommend and will definitely be returning.',
  },
  {
    name: 'Hannah Oatley',
    rating: 5,
    quote:
      'Just home from a wonderfully relaxing full body massage with Lisa. The tension has gone from my neck and shoulders and I feel totally chilled. I would thoroughly recommend.',
  },
  {
    name: 'Lisa Harrison',
    rating: 5,
    quote:
      'Thank you Lisa for a great back, neck and shoulder massage yesterday. My back feels so much better. I’ve booked in for my next one.',
  },
];

// Contact form select options — match the live + coming-soon treatments.
export const treatmentOptions = [
  'Swedish Full Body Massage',
  'Back, Neck & Shoulder Massage',
  'Pedicures (coming soon)',
  'Lymphatic Drainage (coming soon)',
  'Not sure yet',
];

export const locationOptions = [
  { value: 'mobile', label: 'Mobile — at my home' },
  { value: 'room', label: 'Treatment room (Lower Earley)' },
];

export const timeOptions = ['Morning', 'Afternoon', 'Evening'];
