'use client'

import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/shared/animated-section'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'

/* -------------------------------------------------------------------
   CSS-only website mockups — one per project, each visually distinct
   and themed to the business type. No external images needed.
   ------------------------------------------------------------------- */

function RestaurantMockup() {
  return (
    <div className="flex h-full flex-col bg-[#1a1a1a] p-4 text-white">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-24 rounded-sm bg-amber-400/60" />
        <div className="flex gap-3">
          <div className="h-2 w-8 rounded-sm bg-white/20" />
          <div className="h-2 w-8 rounded-sm bg-white/20" />
          <div className="h-2 w-12 rounded-sm bg-amber-400/40" />
        </div>
      </div>
      {/* Hero with warm tones */}
      <div className="mt-4 flex flex-1 items-center gap-4">
        <div className="flex-1 space-y-2">
          <div className="h-3.5 w-3/4 rounded-sm bg-white/80" />
          <div className="h-3.5 w-1/2 rounded-sm bg-amber-400/50" />
          <div className="mt-3 h-2 w-full rounded-sm bg-white/15" />
          <div className="h-2 w-3/4 rounded-sm bg-white/15" />
          <div className="mt-3 h-5 w-28 rounded-full bg-amber-500/60" />
        </div>
        <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-amber-900/40 to-amber-700/20 ring-1 ring-white/10" />
      </div>
      {/* Menu cards */}
      <div className="mt-3 flex gap-2">
        <div className="h-14 flex-1 rounded-md bg-white/[0.06] p-2 ring-1 ring-white/10">
          <div className="h-2 w-2/3 rounded-sm bg-white/20" />
          <div className="mt-1.5 h-1.5 w-full rounded-sm bg-white/10" />
        </div>
        <div className="h-14 flex-1 rounded-md bg-white/[0.06] p-2 ring-1 ring-white/10">
          <div className="h-2 w-1/2 rounded-sm bg-white/20" />
          <div className="mt-1.5 h-1.5 w-full rounded-sm bg-white/10" />
        </div>
        <div className="h-14 flex-1 rounded-md bg-white/[0.06] p-2 ring-1 ring-white/10">
          <div className="h-2 w-3/4 rounded-sm bg-white/20" />
          <div className="mt-1.5 h-1.5 w-full rounded-sm bg-white/10" />
        </div>
      </div>
    </div>
  )
}

function LandscapingMockup() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#f5f7f3] to-[#eef1ea] p-4">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-28 rounded-sm bg-green-800/30" />
        <div className="flex gap-3">
          <div className="h-2 w-8 rounded-sm bg-green-900/15" />
          <div className="h-2 w-8 rounded-sm bg-green-900/15" />
          <div className="h-5 w-20 rounded-full bg-green-700/25" />
        </div>
      </div>
      {/* Hero — split with green tones */}
      <div className="mt-3 flex flex-1 gap-3">
        <div className="flex flex-1 flex-col justify-center space-y-2">
          <div className="h-3 w-4/5 rounded-sm bg-green-900/25" />
          <div className="h-3 w-2/3 rounded-sm bg-green-900/25" />
          <div className="mt-2 h-2 w-full rounded-sm bg-green-900/10" />
          <div className="h-2 w-3/4 rounded-sm bg-green-900/10" />
          <div className="mt-2 h-5 w-24 rounded-full bg-green-700/30" />
        </div>
        {/* Before/After slider hint */}
        <div className="relative w-32 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/15 to-green-600/10" />
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-green-700/30" />
          <div className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-2 ring-green-700/30" />
        </div>
      </div>
      {/* Service cards */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="rounded-lg bg-white/60 p-2 ring-1 ring-green-900/[0.06]">
            <div className="h-8 rounded bg-green-800/[0.06]" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded-sm bg-green-900/15" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ButcherMockup() {
  return (
    <div className="flex h-full flex-col bg-[#faf6f1] p-4">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-24 rounded-sm bg-red-900/30" />
        <div className="flex gap-3">
          <div className="h-2 w-8 rounded-sm bg-red-900/15" />
          <div className="h-2 w-8 rounded-sm bg-red-900/15" />
          <div className="h-2 w-8 rounded-sm bg-red-900/15" />
        </div>
      </div>
      {/* Hero — craft/artisan feel */}
      <div className="mt-3 flex flex-1 items-center">
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded-sm bg-red-900/20" />
          <div className="h-3 w-1/2 rounded-sm bg-red-900/15" />
          <div className="mt-2 h-2 w-full rounded-sm bg-red-900/8" />
          <div className="h-2 w-4/5 rounded-sm bg-red-900/8" />
          <div className="mt-3 flex gap-2">
            <div className="h-5 w-24 rounded-full bg-red-800/25" />
            <div className="h-5 w-20 rounded-full ring-1 ring-red-900/15" />
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="aspect-square rounded-md bg-gradient-to-br from-red-900/[0.06] to-red-800/[0.03] ring-1 ring-red-900/[0.06]" />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="h-2 w-20 rounded-sm bg-red-900/15" />
        <div className="h-2 w-16 rounded-sm bg-red-900/10" />
      </div>
    </div>
  )
}

function ConcreteMockup() {
  return (
    <div className="flex h-full flex-col bg-[#2a2d30] p-4 text-white">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-28 rounded-sm bg-yellow-500/40" />
        <div className="flex gap-3">
          <div className="h-2 w-8 rounded-sm bg-white/15" />
          <div className="h-2 w-8 rounded-sm bg-white/15" />
          <div className="h-5 w-24 rounded-full bg-yellow-500/30" />
        </div>
      </div>
      {/* Hero — industrial feel */}
      <div className="mt-3 flex flex-1 items-center gap-4">
        <div className="flex-1 space-y-2">
          <div className="h-4 w-4/5 rounded-sm bg-white/60" />
          <div className="h-3 w-2/3 rounded-sm bg-yellow-400/40" />
          <div className="mt-2 h-2 w-full rounded-sm bg-white/10" />
          <div className="h-2 w-3/4 rounded-sm bg-white/10" />
          <div className="mt-3 h-5 w-28 rounded-full bg-yellow-500/40" />
        </div>
        <div className="h-24 w-28 rounded-lg bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10" />
      </div>
      {/* Stats bar */}
      <div className="mt-3 flex divide-x divide-white/10 rounded-lg bg-white/[0.06] ring-1 ring-white/10">
        {['15+', '200+', '5.0'].map((stat) => (
          <div key={stat} className="flex-1 py-2 text-center">
            <div className="mx-auto h-3 w-8 rounded-sm bg-yellow-400/30" />
            <div className="mx-auto mt-1 h-1.5 w-12 rounded-sm bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  )
}

const MOCKUP_COMPONENTS: Record<string, React.ComponentType> = {
  'chesapeake-table': RestaurantMockup,
  'tidewater-lawn': LandscapingMockup,
  'point-provisions': ButcherMockup,
  'coastal-concrete': ConcreteMockup,
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection direction="right">
          <div className="flex flex-col items-end text-right max-w-2xl ml-auto">
            <h2 className="heading-display font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Work that speaks for itself
            </h2>
            <p className="mt-4 max-w-[50ch] text-lg text-foreground/75">
              Custom websites built for real local businesses. Every site is
              designed to convert visitors into customers.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 space-y-16">
          {PORTFOLIO_PROJECTS.slice(0, 4).map((project, i) => {
            const MockupComponent = MOCKUP_COMPONENTS[project.id]
            return (
              <AnimatedSection
                key={project.id}
                direction={i % 2 === 0 ? 'left' : 'right'}
              >
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    i % 2 !== 0
                      ? 'md:[direction:rtl] md:[&>*]:[direction:ltr]'
                      : ''
                  }`}
                >
                  {/* Device frame with CSS mockup */}
                  <div className="group relative">
                    <div className="rounded-[1.25rem] bg-foreground/[0.04] p-1.5 ring-1 ring-foreground/[0.06] transition-shadow duration-500 group-hover:shadow-tinted-lg">
                      <div className="overflow-hidden rounded-[calc(1.25rem-0.375rem)] bg-card shadow-tinted ring-1 ring-border/40">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-2">
                          <span className="size-2 rounded-full bg-foreground/10" />
                          <span className="size-2 rounded-full bg-foreground/10" />
                          <span className="size-2 rounded-full bg-foreground/10" />
                          <span className="ml-2 h-3.5 flex-1 rounded bg-muted/30 px-2 text-[9px] leading-3.5 text-muted-foreground/40">
                            {project.id.replace(/-/g, '')}.pointewebco.com
                          </span>
                        </div>
                        {/* CSS Mockup */}
                        <div className="relative aspect-[16/10]">
                          {MockupComponent ? <MockupComponent /> : (
                            <div className="flex h-full items-center justify-center bg-muted/20">
                              <span className="text-sm text-muted-foreground/40">Preview</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div>
                    <span className="inline-flex items-center rounded-full bg-primary/[0.07] px-3 py-0.5 text-xs font-semibold tracking-wide text-primary">
                      {project.type}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl text-foreground lg:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground/70">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
