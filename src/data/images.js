/**
 * Maps the string image keys used in site.js to imported image assets,
 * so components can resolve `service.image` / `way.image` through astro:assets.
 */
import massage from '../assets/img/massage.png';
import towels from '../assets/img/towels.png';
import room from '../assets/img/room.png';
import spaHero from '../assets/img/spa-hero.png';
import lisa from '../assets/img/lisa.png';
// Lisa's own brow work (Oct 2026) — clients have agreed to website use.
import browsBeforeAfter1 from '../assets/img/brows-before-after-1.jpg';
import browsBeforeAfter2 from '../assets/img/brows-before-after-2.jpg';
import browsBeforeAfter3 from '../assets/img/brows-before-after-3.jpg';
import browsFinished1 from '../assets/img/brows-finished-1.jpg';
import browsFinished2 from '../assets/img/brows-finished-2.jpg';

export const images = {
  massage,
  towels,
  room,
  'spa-hero': spaHero,
  lisa,
  'brows-before-after-1': browsBeforeAfter1,
  'brows-before-after-2': browsBeforeAfter2,
  'brows-before-after-3': browsBeforeAfter3,
  'brows-finished-1': browsFinished1,
  'brows-finished-2': browsFinished2,
};

export const imageAlt = {
  massage: 'Client receiving a relaxing back massage',
  towels: 'Freshly rolled towels on a massage table',
  room: 'Peaceful massage treatment room',
  'spa-hero': 'Calming massage treatment setup with candles and towels',
  lisa: "Lisa, founder of Lisa's Relax & Restore Massage",
  'brows-before-after-1':
    'Brow lamination before and after — brows brushed up into a fuller, defined shape',
  'brows-before-after-2':
    'Brow lamination before and after — sparse brows transformed into a groomed, fuller arch',
  'brows-before-after-3':
    'Brow lamination and tint before and after — thin brows given shape, depth and definition',
  'brows-finished-1': 'Freshly laminated and tinted brows, neatly shaped and set',
  'brows-finished-2': 'Close-up of laminated brows with a soft, brushed-up finish',
};
