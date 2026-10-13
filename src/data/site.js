/**
 * Single source of truth for site content (spec §7, §9, §10).
 * Values in [brackets] are PLACEHOLDERS awaiting confirmation from Lisa.
 * Update PLACEHOLDER entries before launch — see CLAUDE.md / spec §16.
 */

export const business = {
  name: "Lisa's Relax & Restore Massage",
  wordmark: "LISA'S RELAX & RESTORE",
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
  facebookUrl: 'https://www.facebook.com/profile.php?id=61590344507741',
  // PLACEHOLDER — Lisa to send link (keep visible, don't fabricate):
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
  insurance: 'Fully insured for all treatments offered', // Confirmed by Lisa, Oct 2026 (ABT)
};

/**
 * Google Ads conversion tracking (requested by Lisa, Sep 2026).
 *
 * The tag is loaded with Consent Mode v2 set to DENIED by default and is only
 * granted once the visitor accepts in the consent banner (UK PECR / GDPR) —
 * see ConsentBanner.astro and the head script in Base.astro.
 *
 * `id` is the Ads account tag. Each conversion needs its own LABEL, found in
 * Google Ads → Goals → Conversions → (action) → Tag setup → "Install the tag
 * yourself". A label looks like `AbC-D_efGhIjKlMn`; the full send_to value is
 * `AW-18414389158/AbC-D_efGhIjKlMn`.
 *
 * PLACEHOLDERS until Lisa sends them. An unset [bracketed] label simply does
 * not fire — the site works, that conversion is just not recorded yet.
 */
export const analytics = {
  googleAdsId: 'AW-18414389158',
  conversions: {
    enquiry: '[enquiry-conversion-label]', // PLACEHOLDER — form successfully sent
    phone: '[phone-conversion-label]',     // PLACEHOLDER — tapped the phone number
    email: '[email-conversion-label]',     // PLACEHOLDER — clicked the email address
  },
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#services' },
  { label: 'How it works', href: '#ways' },
];

// Lisa's current treatment list (supersedes the old "exactly two treatments" spec rule).
// No per-treatment prices — "prices from" guide + quote by email (business.pricingNote).
// Grouped massage treatments first (01-05), then beauty treatments (06-09). Nine entries
// fills the 3-across pillar grid exactly (3 + 3 + 3) — see Intro.astro before changing the
// count. Waxing / Tinting / Brow Lamination / Hot Stone added Oct 2026 at Lisa's request.
export const services = [
  {
    num: '01',
    name: 'Swedish Full Body Massage',
    durations: '60 min · 90 min',
    description:
      'A flowing, full-body massage for deep relaxation, improved circulation and total stress relief.',
    image: 'massage',
    icon: 'lotus',
  },
  {
    num: '02',
    name: 'Back, Neck & Shoulder Massage',
    durations: '30 min',
    description:
      'Targeted relief for tension and aches where you carry stress the most — perfect for a busy week.',
    image: 'towels',
    icon: 'muscle',
  },
  {
    num: '03',
    name: 'Hot Stone Massage',
    durations: 'By appointment',
    description:
      'Smooth, warmed stones melt away deep-held tension, easing tight muscles and leaving you completely unwound.',
    icon: 'stones',
  },
  {
    num: '04',
    name: 'Indian Head Massage',
    durations: 'By appointment',
    description:
      'Release tension, calm the mind, and ease headaches with a relaxing massage focused on the scalp, neck, and shoulders.',
    icon: 'calm',
  },
  {
    num: '05',
    name: 'Lymphatic Drainage',
    durations: 'By appointment',
    description:
      'A gentle, rhythmic treatment to reduce puffiness and support natural wellbeing.',
    icon: 'circulation',
  },
  {
    num: '06',
    name: 'Brow Lamination',
    durations: 'By appointment',
    description:
      'Brows brushed up and set into a fuller, groomed shape that lasts for weeks — polished, with no daily effort.',
    icon: 'brow',
  },
  {
    num: '07',
    name: 'Tinting',
    durations: 'By appointment',
    description:
      'A tint to deepen and define brows or lashes, adding lasting definition and softening the need for make-up.',
    icon: 'droplet',
  },
  {
    num: '08',
    name: 'Waxing',
    durations: 'By appointment',
    description:
      'Gentle, professional waxing for smooth, long-lasting results — carried out with care and your comfort in mind.',
    icon: 'smooth',
  },
  {
    num: '09',
    name: 'Pedicures',
    durations: 'By appointment',
    description:
      'A relaxing, restorative pedicure to leave your feet feeling cared for.',
    icon: 'flex',
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

// Array so more can be added later. All are Lisa's own clients (cleared to use);
// the later entries are her public Facebook recommendations, lightly tidied
// (emoji and typos removed) so they read consistently with the rest.
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
  {
    name: 'Hayleigh Robinson',
    rating: 5,
    quote:
      'WOW!! I don’t know how else to explain the back, neck and shoulder massage I had with Lisa. Beautiful set up, lovely and relaxing and made me feel so relaxed afterwards.',
  },
  {
    name: 'Catherine Targett',
    rating: 5,
    quote:
      'Just had the most amazing massage done by Lisa! I will 100% be booking back in with her! Her hands are like magic.',
  },
  {
    name: 'Shauna Moors',
    rating: 5,
    quote:
      'Absolutely fantastic massage and relaxation. Was professional, welcoming, and made me feel completely relaxed from start to finish. The treatment was exactly what I needed, and I left feeling refreshed and rejuvenated. Highly recommend, and I’ll definitely be returning!',
  },
  {
    name: 'Shannon Saunders',
    rating: 5,
    quote:
      'Fantastic service! Very professional and friendly, will definitely be returning and recommending.',
  },
];

// Contact form select options.
// Mirrors `services` order — keep the two in step when treatments change.
export const treatmentOptions = [
  'Swedish Full Body Massage',
  'Back, Neck & Shoulder Massage',
  'Hot Stone Massage',
  'Indian Head Massage',
  'Lymphatic Drainage',
  'Brow Lamination',
  'Tinting',
  'Waxing',
  'Pedicures',
  'Not sure yet',
];

export const locationOptions = [
  { value: 'mobile', label: 'Mobile — at my home' },
  { value: 'room', label: 'Treatment room (Lower Earley)' },
];

export const timeOptions = ['Morning', 'Afternoon', 'Evening'];
