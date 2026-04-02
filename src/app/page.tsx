import dynamic from 'next/dynamic'
import { SocialProofBar } from '@/components/sections/social-proof-bar'
import { About } from '@/components/sections/about'
import { Footer } from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Hero from '@/components/sections/hero'
import {
  generateProfessionalServiceSchema,
  generateFAQSchema,
  generateOrganizationSchema,
} from '@/lib/schema'

// Below-fold sections: dynamic imports for code-splitting (still SSR, but JS lazy-loads)
const ProblemStakes = dynamic(() => import('@/components/sections/problem-stakes'))
const Transformation = dynamic(() => import('@/components/sections/transformation'))
const HowItWorks = dynamic(() => import('@/components/sections/how-it-works'))
const Portfolio = dynamic(() => import('@/components/sections/portfolio'))
const Testimonials = dynamic(() => import('@/components/sections/testimonials'))
const Pricing = dynamic(() => import('@/components/sections/pricing'))
const FAQ = dynamic(() => import('@/components/sections/faq'))
const FinalCTA = dynamic(() => import('@/components/sections/final-cta'))

export default function Home() {
  const schemas = [
    generateProfessionalServiceSchema(),
    generateFAQSchema(),
    generateOrganizationSchema(),
  ]

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <SocialProofBar />
        <ProblemStakes />
        <Transformation />
        <HowItWorks />
        <Portfolio />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
