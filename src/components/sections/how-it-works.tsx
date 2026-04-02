'use client'

import { SectionWrapper } from '@/components/shared/section-wrapper'
import { AnimatedSection } from '@/components/shared/animated-section'
import { STEPS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-surface-alt">
      <AnimatedSection direction="up">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-display font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Three steps. That&rsquo;s it.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&rsquo;ve built over 100 websites. We know what works and
            we&rsquo;ve made the process simple.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" stagger delay={0.1}>
        <div className="relative mt-16 space-y-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="animate-child grid items-start gap-6 border-t border-border/60 py-10 md:grid-cols-[5rem_1fr_1.5fr] md:gap-10"
            >
              {/* Oversized step number */}
              <span
                className="font-heading text-6xl tracking-tighter text-primary/25 md:text-7xl"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                0{step.number}
              </span>
              <h3 className="font-heading text-xl text-foreground lg:text-2xl">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}
