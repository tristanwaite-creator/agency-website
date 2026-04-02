'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '@/lib/animations'
import { EASE, DURATION, STAGGER, SECTION_TRIGGER, REVEAL_FROM } from '@/lib/animations'

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'fade' | 'scale'
  stagger?: boolean
  delay?: number
}

export function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  stagger = false,
  delay = 0,
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const fromVars = {
        up: REVEAL_FROM.fadeUp,
        left: REVEAL_FROM.fadeLeft,
        right: REVEAL_FROM.fadeRight,
        fade: REVEAL_FROM.fadeIn,
        scale: REVEAL_FROM.scaleUp,
      }[direction]

      const targets = stagger
        ? gsap.utils.toArray<HTMLElement>('.animate-child', containerRef.current!)
        : containerRef.current!

      gsap.from(targets, {
        ...fromVars,
        duration: DURATION.normal,
        ease: EASE.sectionReveal,
        delay,
        ...(stagger ? { stagger: STAGGER.items } : {}),
        scrollTrigger: {
          trigger: containerRef.current,
          ...SECTION_TRIGGER,
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
