'use client'

import { SectionWrapper } from '@/components/shared/section-wrapper'
import { AnimatedSection } from '@/components/shared/animated-section'
import { PROBLEMS } from '@/lib/constants'

export default function ProblemStakes() {
  return (
    <SectionWrapper id="problem">
      <AnimatedSection direction="left">
        <div className="max-w-2xl">
          <h2 className="heading-display font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Sound familiar?
          </h2>
          <p className="mt-4 max-w-[50ch] text-lg text-muted-foreground" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            Most local business owners we talk to are dealing with the same
            problems.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" stagger delay={0.15}>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-border/40 md:grid-cols-2">
          {PROBLEMS.map((problem, i) => (
            <div
              key={i}
              className="animate-child group flex gap-4 bg-card p-7 transition-colors duration-300 hover:bg-card/80"
            >
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-500/[0.08] font-heading text-sm text-red-500/80"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                0{i + 1}
              </span>
              <div>
                <p className="text-[0.95rem] font-medium leading-snug text-foreground">
                  {problem.text}
                </p>
                {problem.stat && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {problem.stat}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}
