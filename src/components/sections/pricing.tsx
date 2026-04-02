'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { AnimatedSection } from '@/components/shared/animated-section'
import { PRICING_TIERS } from '@/lib/constants'

export default function Pricing() {
  const recommended = PRICING_TIERS.find((t) => !!t.badge)
  const others = PRICING_TIERS.filter((t) => !t.badge)

  return (
    <SectionWrapper id="pricing">
      <AnimatedSection direction="up">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-display font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Transparent pricing. No surprises.
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            The average small business website costs{' '}
            <span className="text-foreground/50 line-through decoration-foreground/20">
              $2,000&ndash;$9,000
            </span>
            . We build yours for a fraction of that.
          </p>
        </div>
      </AnimatedSection>

      {/* Asymmetric layout: recommended dominates left, others stack right */}
      <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        {/* Recommended tier — large */}
        {recommended && (
          <AnimatedSection direction="up" delay={0.1}>
            <div className="group relative rounded-2xl bg-primary p-1.5 shadow-tinted-lg transition-premium hover:shadow-[0_12px_48px_-8px_rgba(27,107,138,0.18),0_4px_12px_-4px_rgba(27,107,138,0.1)]">
              <div className="py-2 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                {recommended.badge}
              </div>
              <div className="flex flex-col rounded-xl bg-card p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] lg:p-10">
                <div>
                  <h3 className="font-heading text-2xl text-foreground">
                    {recommended.name}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {recommended.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <div
                    className="flex items-baseline gap-1"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    <span className="font-heading text-5xl tracking-tight text-foreground lg:text-6xl">
                      ${recommended.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      one-time
                    </span>
                  </div>
                  {recommended.monthly && (
                    <div
                      className="flex items-baseline gap-1 rounded-full bg-primary/[0.07] px-4 py-1.5"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      <span className="font-heading text-xl text-primary">
                        +${recommended.monthly}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /mo managed
                      </span>
                    </div>
                  )}
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {recommended.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="cta"
                  size="xl"
                  className="group/btn mt-10 w-full rounded-full active:scale-[0.97]"
                  asChild
                >
                  <Link href="#contact">
                    {recommended.cta}
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Other tiers — stacked */}
        <div className="flex flex-col gap-5">
          {others.map((tier, i) => (
            <AnimatedSection key={tier.name} direction="up" delay={0.2 + i * 0.12}>
              <div className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-premium hover:border-primary/20 hover:shadow-tinted lg:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl text-foreground">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>
                  <div
                    className="text-right"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    <span className="font-heading text-3xl tracking-tight text-foreground">
                      ${tier.price}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      one-time
                    </span>
                    {tier.monthly && (
                      <p className="mt-0.5 text-sm font-medium text-primary">
                        +${tier.monthly}/mo managed
                      </p>
                    )}
                  </div>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="lg"
                  className="mt-6 w-full rounded-full active:scale-[0.97]"
                  asChild
                >
                  <Link href="#contact">{tier.cta}</Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Value reframe */}
      <AnimatedSection direction="fade" delay={0.5}>
        <p
          className="mt-12 text-center text-sm text-muted-foreground"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          $500 &divide; 365 = $1.37 per day &mdash; less than a cup of coffee
          for a 24/7 salesperson that never takes a day off.
        </p>
      </AnimatedSection>
    </SectionWrapper>
  )
}
