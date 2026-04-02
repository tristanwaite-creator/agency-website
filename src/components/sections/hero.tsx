'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'
import { HERO, BUSINESS } from '@/lib/constants'
import { prefersReducedMotion, EASE, DURATION } from '@/lib/animations'
import { HeroBackground } from '@/components/shared/hero-background'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(['.hero-eyebrow', '.hero-headline', '.hero-sub', '.hero-ctas', '.hero-trust', '.hero-micro', '.hero-device'], { autoAlpha: 1 })
        return
      }

      const tl = gsap.timeline({
        defaults: { ease: EASE.heroEntrance, duration: DURATION.normal },
      })

      tl.from('.hero-eyebrow', { autoAlpha: 0, y: 20, duration: 0.5 })
        .from('.hero-headline', { autoAlpha: 0, y: 40, duration: 1 }, '-=0.2')
        .from('.hero-sub', { autoAlpha: 0, y: 20 }, '-=0.5')
        .from('.hero-ctas', { autoAlpha: 0, y: 20 }, '-=0.4')
        .from('.hero-trust', { autoAlpha: 0 }, '-=0.2')
        .from('.hero-micro', { autoAlpha: 0 }, '-=0.2')
        .from('.hero-device', { autoAlpha: 0, x: 40, duration: 1 }, '-=1')
    },
    { scope: containerRef }
  )

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20"
    >
      <HeroBackground />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
        {/* Copy */}
        <div>
          <span className="hero-eyebrow invisible inline-flex items-center rounded-full bg-primary/[0.07] px-3.5 py-1 text-xs font-semibold tracking-wide text-primary">
            {BUSINESS.location} Web Design Studio
          </span>

          <h1 className="hero-headline invisible heading-display mt-6 font-heading text-[2.75rem] leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {HERO.headline}
          </h1>

          <p className="hero-sub invisible mt-6 max-w-md text-[1.05rem] leading-relaxed text-foreground/75" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            {HERO.subheadline}
          </p>

          {/* CTAs */}
          <div className="hero-ctas invisible mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="cta" size="xl" className="group rounded-full active:scale-[0.97]" asChild>
              <Link href="#contact">
                {HERO.primaryCta}
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="ghost" size="xl" className="group/sec rounded-full text-muted-foreground hover:text-foreground" asChild>
              <Link href="#portfolio">
                {HERO.secondaryCta}
                <span className="ml-0.5 inline-block transition-transform group-hover/sec:translate-x-0.5">&darr;</span>
              </Link>
            </Button>
          </div>

          {/* Trust signal */}
          <div className="hero-trust invisible mt-8 flex items-center gap-3">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="size-[18px]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{HERO.trustLine}</p>
          </div>
          <p className="hero-micro invisible mt-1.5 text-sm text-muted-foreground">
            {HERO.microCopy}
          </p>
        </div>

        {/* Hero image */}
        <div className="hero-device invisible relative hidden lg:block">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-tinted-lg ring-1 ring-border/30">
            <Image
              src="/images/hero-workspace.png"
              alt="A coastal workspace with laptop and monitor overlooking the waterfront"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary/[0.04]" />
        </div>
      </div>
    </section>
  )
}
