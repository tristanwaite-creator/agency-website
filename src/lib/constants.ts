// ============================================================
// Pointe Web Co. — Single source of truth for all site content
// ============================================================

export const BUSINESS = {
  name: 'Pointe Web Co.',
  tagline: 'A local team that treats your business like our own.',
  location: 'Gloucester Point, Virginia',
  experience: '12 years',
  websitesBuilt: '100+',
  phone: '(804) 555-0127',
  email: 'hello@pointewebco.com',
  address: {
    street: 'Gloucester Point',
    city: 'Gloucester Point',
    state: 'VA',
    zip: '23062',
  },
  url: 'https://pointewebco.com',
} as const

export const SERVICE_AREAS = [
  'Gloucester Point',
  'Yorktown',
  'Hampton',
  'Newport News',
  'Hampton Roads',
  'Middle Peninsula',
  'Mathews County',
] as const

export const NAV_ITEMS = [
  { label: 'Work', href: '#portfolio' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
] as const

// Hero section
export const HERO = {
  headline: 'Professional Websites for Local Businesses',
  subheadline:
    'Pointe Web Co. is a Gloucester Point web design studio that builds custom websites for local businesses starting at $500. No contracts. No surprises.',
  primaryCta: 'See What We\u2019d Build for You',
  secondaryCta: 'See Our Work',
  trustLine: '12 years of web design expertise. 100+ websites built.',
  microCopy: 'Free preview \u2014 no commitment, no credit card.',
} as const

// Problem / Stakes
export const PROBLEMS = [
  {
    text: 'Your website looks outdated and doesn\u2019t generate leads.',
    stat: null,
  },
  {
    text: 'Your DIY site looks like every other template out there.',
    stat: null,
  },
  {
    text: 'Customers can\u2019t find you when they search online.',
    stat: '97% of consumers search online before visiting a local business.',
  },
  {
    text: 'You\u2019re relying on referrals and luck to grow.',
    stat: null,
  },
] as const

// Transformation
export const SOLUTIONS = [
  'Your website starts generating leads from day one.',
  'You look professional before the first conversation.',
  'Customers find you before they find your competitor.',
  'You have a 24/7 salesperson that never takes a day off.',
] as const

// How It Works
export const STEPS = [
  {
    number: 1,
    title: 'Tell us about your business',
    description:
      'Fill out a quick form or give us a call. We\u2019ll learn what makes your business special and what you need from your website.',
  },
  {
    number: 2,
    title: 'We design and build your site',
    description:
      'We create a custom website tailored to your business \u2014 not a template. You\u2019ll see a free preview before you pay a dime.',
  },
  {
    number: 3,
    title: 'Launch and start getting customers',
    description:
      'Your site goes live. We handle the tech. You focus on running your business while your website works for you around the clock.',
  },
] as const

// Portfolio projects
export const PORTFOLIO_PROJECTS = [
  {
    id: 'chesapeake-table',
    name: 'Chesapeake Table',
    type: 'Farm-to-Table Restaurant',
    description:
      'Online menu, reservation integration, food photography gallery, and mobile-first design.',
    tags: ['Restaurant', 'Mobile-First', 'Online Ordering'],
    image: '/images/portfolio/chesapeake-table-desktop.webp',
  },
  {
    id: 'tidewater-lawn',
    name: 'Tidewater Lawn & Landscape',
    type: 'Residential Landscaping',
    description:
      'Service pages, before/after project slider, seasonal promotions, and a free estimate form.',
    tags: ['Contractor', 'Lead Generation', 'Before/After'],
    image: '/images/portfolio/tidewater-lawn-desktop.webp',
  },
  {
    id: 'point-provisions',
    name: 'Point Provisions',
    type: 'Local Butcher Shop',
    description:
      'Product showcase, weekly specials, sourcing story, and online ordering integration.',
    tags: ['Retail', 'E-Commerce', 'Local Business'],
    image: '/images/portfolio/point-provisions-desktop.webp',
  },
  {
    id: 'coastal-concrete',
    name: 'Coastal Concrete Co.',
    type: 'Hardscaping & Concrete',
    description:
      'Project gallery, service descriptions, estimate calculator, and customer testimonials.',
    tags: ['Contractor', 'Gallery', 'Lead Generation'],
    image: '/images/portfolio/coastal-concrete-desktop.webp',
  },
  {
    id: 'gloucester-dental',
    name: 'Gloucester Point Dental',
    type: 'Professional Services',
    description:
      'Multi-page professional services site with appointment booking, team profiles, and patient resources.',
    tags: ['Healthcare', 'Multi-Page', 'Booking'],
    image: '/images/portfolio/gloucester-dental-desktop.webp',
  },
] as const

// Testimonials (placeholder until real ones exist)
export const TESTIMONIALS = [
  {
    quote:
      'They had our site up in a week. Already gotten 3 new clients from it.',
    name: 'Mike R.',
    business: 'Contractor, Gloucester Point',
    rating: 5,
  },
  {
    quote:
      'We went from zero online presence to the top of Google in our area. Worth every penny.',
    name: 'Sarah T.',
    business: 'Restaurant Owner, Yorktown',
    rating: 5,
  },
  {
    quote:
      'Finally a web team that picks up the phone. They treat my business like their own.',
    name: 'James K.',
    business: 'Landscaper, Hampton',
    rating: 5,
  },
] as const

// Pricing tiers
export const PRICING_TIERS = [
  {
    name: 'The Starter',
    price: 500,
    monthly: null,
    description: 'A professional website you own outright.',
    badge: null,
    features: [
      'Custom 5-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      'One round of revisions',
      'You manage hosting & updates',
    ],
    cta: 'Get Started',
  },
  {
    name: 'The Growth Plan',
    price: 500,
    monthly: 99,
    description: 'Your website, fully managed.',
    badge: null,
    features: [
      'Everything in Starter',
      'Managed hosting & SSL',
      'Daily backups',
      'Security monitoring',
      'Monthly content updates',
      'Email support',
    ],
    cta: 'Start Growing',
  },
  {
    name: 'The Full Package',
    price: 500,
    monthly: 149,
    description: 'A dedicated web team for your business.',
    badge: 'Recommended',
    features: [
      'Everything in Growth',
      'Priority support',
      'Monthly performance reports',
      'SEO monitoring & optimization',
      'Quarterly strategy calls',
      'Unlimited minor updates',
    ],
    cta: 'Get the Full Package',
  },
] as const

// FAQ items (objection-smashing from copy playbook)
export const FAQ_ITEMS = [
  {
    question: 'Is $500 really enough for a professional website?',
    answer:
      'The average small business website costs $2,000\u2013$9,000. We build yours for $500 because we\u2019ve streamlined our process \u2014 not our quality. If your website brings in just one new customer this year, it\u2019s already paid for itself.',
  },
  {
    question: 'Why not just use Wix or Squarespace?',
    answer:
      'You absolutely can \u2014 they\u2019re great tools. But here\u2019s what happens in real life: you spend 40+ hours fighting templates, your site looks like everyone else\u2019s, and when something breaks, you\u2019re Googling it yourself. We handle everything. You run your business.',
  },
  {
    question: 'My nephew already made me a website.',
    answer:
      'That\u2019s great. But we hear from a lot of business owners who went that route and ended up with a site that was never finished, can\u2019t be updated, or doesn\u2019t show up in Google. A website is a business tool, not a favor.',
  },
  {
    question: 'I already have a website. Why would I need a new one?',
    answer:
      'Is it working for you? Is it bringing in new customers? Does it load in under 3 seconds on a phone? 75% of consumers judge a business\u2019s credibility by its website design alone. Let us show you a free side-by-side comparison.',
  },
  {
    question: 'Is $99\u2013$149 per month for hosting too much?',
    answer:
      'DIY hosting plus SSL plus security plus backups plus content updates costs $100\u2013$300+ per month and your time. Hiring someone to handle even half of this costs $50\u2013$100 per hour. Our plan gives you a dedicated web team for less than $5 per day.',
  },
  {
    question: 'I don\u2019t need a website \u2014 I use Facebook.',
    answer:
      'Keep using social media \u2014 it\u2019s powerful. But Facebook can\u2019t show up when someone Googles your business name, can\u2019t give you a branded experience without competitor ads, and can\u2019t provide a booking form that feeds your pipeline. Your website is your digital home base.',
  },
  {
    question: 'You\u2019re a new agency. How do I know you\u2019re good?',
    answer:
      'We\u2019ve built 100+ websites over 12 years. We started Pointe Web Co. in Gloucester Point because local businesses deserve premium design without premium prices. Check out our portfolio, and we\u2019ll build you a free preview before you pay anything.',
  },
] as const

// Tech partner logos for social proof bar
export const TECH_LOGOS = [
  { name: 'Next.js', src: '/images/tech-logos/nextjs.svg' },
  { name: 'React', src: '/images/tech-logos/react.svg' },
  { name: 'WordPress', src: '/images/tech-logos/wordpress.svg' },
  { name: 'Shopify', src: '/images/tech-logos/shopify.svg' },
  { name: 'Tailwind CSS', src: '/images/tech-logos/tailwindcss.svg' },
  { name: 'TypeScript', src: '/images/tech-logos/typescript.svg' },
  { name: 'Vercel', src: '/images/tech-logos/vercel.svg' },
  { name: 'Cloudflare', src: '/images/tech-logos/cloudflare.svg' },
  { name: 'Stripe', src: '/images/tech-logos/stripe.svg' },
  { name: 'Figma', src: '/images/tech-logos/figma.svg' },
  { name: 'GitHub', src: '/images/tech-logos/github.svg' },
  { name: 'Google', src: '/images/tech-logos/google.svg' },
  { name: 'Squarespace', src: '/images/tech-logos/squarespace.svg' },
] as const
