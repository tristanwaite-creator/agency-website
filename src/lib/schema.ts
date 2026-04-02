import { BUSINESS, SERVICE_AREAS, FAQ_ITEMS } from './constants'

export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BUSINESS.name,
    description:
      'Custom websites for local businesses starting at $500. Serving Gloucester Point, Yorktown, Hampton, Newport News, and Hampton Roads.',
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Virginia',
      },
    })),
    priceRange: '$500 - $149/mo',
    openingHours: 'Mo-Fr 09:00-17:00',
    sameAs: [],
  }
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: `${BUSINESS.url}/logo/pointe-web-co-full.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    founders: [
      {
        '@type': 'Person',
        name: 'Founders',
        jobTitle: 'Co-Founder',
      },
    ],
  }
}
