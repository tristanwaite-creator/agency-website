import Image from 'next/image'
import { TECH_LOGOS } from '@/lib/constants'

const STATS = [
  { value: '12', label: 'Years of expertise', labelShort: 'Years' },
  { value: '100+', label: 'Websites delivered', labelShort: 'Sites built' },
  { value: '5.0', label: 'Google rating', labelShort: 'Google rating', stars: true },
]

export function SocialProofBar() {
  // Repeat logos enough times for seamless infinite scroll
  const marqueeLogos = [...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS]

  return (
    <section className="border-y border-border/40">
      {/* Stats row */}
      <div className="border-b border-border/40">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border/40">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center md:px-6 md:py-8">
              <div className="flex items-center justify-center gap-1.5">
                <span
                  className="font-heading text-2xl text-foreground md:text-3xl lg:text-4xl"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {stat.value}
                </span>
                {stat.stars && (
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="size-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
              <p className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">
                <span className="hidden sm:inline">{stat.label}</span>
                <span className="sm:hidden">{stat.labelShort}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite scrolling logo marquee */}
      <div className="relative overflow-hidden py-5">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-16">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5"
            >
              <div className="relative h-6 w-6 shrink-0">
                <Image
                  src={logo.src}
                  alt=""
                  fill
                  className="object-contain"
                  style={{ filter: 'grayscale(1) opacity(0.5)' }}
                />
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
