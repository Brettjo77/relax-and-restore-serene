/**
 * Maps the string image keys used in site.js to imported image assets,
 * so components can resolve `service.image` / `way.image` through astro:assets.
 */
import massage from '../assets/img/massage.png';
import towels from '../assets/img/towels.png';
import room from '../assets/img/room.png';
import spaHero from '../assets/img/spa-hero.png';
import lisa from '../assets/img/lisa.png';

export const images = {
  massage,
  towels,
  room,
  'spa-hero': spaHero,
  lisa,
};

export const imageAlt = {
  massage: 'Client receiving a relaxing back massage',
  towels: 'Freshly rolled towels on a massage table',
  room: 'Peaceful massage treatment room',
  'spa-hero': 'Calming massage treatment setup with candles and towels',
  lisa: 'Lisa, founder of Relax & Restore Massage',
};
