import gsap from 'gsap'

// Reduced motion check
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Project-wide GSAP defaults — coastal premium: smooth, confident, not flashy
gsap.defaults({
  duration: 0.8,
  ease: 'power2.out',
})

// Easing presets
export const EASE = {
  // Section entrances — smooth deceleration
  sectionReveal: 'power2.out',
  // Hero headline — slightly more dramatic
  heroEntrance: 'power3.out',
  // Stagger items — gentle, consistent
  staggerIn: 'power2.out',
  // Smooth scroll-linked (scrub) — no ease needed, but for snapping:
  snap: 'power1.inOut',
  // Hover/micro-interactions — quick and responsive
  hover: 'power1.out',
  // SVG line draw — steady, confident
  draw: 'power2.inOut',
} as const

// Default stagger config
export const STAGGER = {
  // Section items (pain points, features, steps)
  items: { each: 0.12, ease: 'power1.out' },
  // Hero elements (headline chars)
  chars: { each: 0.03, from: 'start' as const },
  // Pricing cards
  cards: { each: 0.15, from: 'center' as const },
} as const

// Default ScrollTrigger config for section reveals
export const SECTION_TRIGGER = {
  start: 'top 85%',
  end: 'top 20%',
  toggleActions: 'play none none none' as const,
} as const

// Section reveal animation defaults
export const REVEAL_FROM = {
  fadeUp: { autoAlpha: 0, y: 40 },
  fadeLeft: { autoAlpha: 0, x: -40 },
  fadeRight: { autoAlpha: 0, x: 40 },
  fadeIn: { autoAlpha: 0 },
  scaleUp: { autoAlpha: 0, scale: 0.95 },
} as const

// Duration presets
export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  heroSequence: 1.6,
} as const
