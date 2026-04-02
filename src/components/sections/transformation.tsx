'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion, EASE, DURATION } from '@/lib/animations'
import { SOLUTIONS } from '@/lib/constants'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Transformation() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.transform-headline', {
        autoAlpha: 0,
        y: 30,
        duration: DURATION.normal,
        ease: EASE.sectionReveal,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.transform-item', {
        autoAlpha: 0,
        y: 40,
        duration: DURATION.normal,
        ease: EASE.sectionReveal,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.transform-list',
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="transformation"
      ref={sectionRef}
      className="bg-primary px-6 py-24 text-primary-foreground md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <p className="transform-headline invisible text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
          Now imagine this instead
        </p>

        <div className="transform-list mt-10 space-y-0">
          {SOLUTIONS.map((solution, i) => (
            <div
              key={i}
              className="transform-item invisible flex items-baseline gap-4 border-t border-primary-foreground/15 py-8 md:gap-5 md:py-10"
            >
              <span className="shrink-0 text-lg text-accent/70">&#10003;</span>
              <p className="font-heading text-2xl leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                {solution}
              </p>
            </div>
          ))}
          <div className="border-t border-primary-foreground/15" />
        </div>
      </div>
    </section>
  )
}
