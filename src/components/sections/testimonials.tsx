'use client'

import { SectionWrapper } from '@/components/shared/section-wrapper'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS

  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-xl">
        <h2 className="heading-display font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
          Don&rsquo;t take our word for it
        </h2>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Featured testimonial — large card */}
        <div className="flex flex-col justify-between rounded-2xl bg-primary p-8 text-primary-foreground lg:p-10">
          <div>
            <div className="flex text-amber-300">
              {Array.from({ length: featured.rating }).map((_, j) => (
                <svg key={j} className="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-6 font-heading text-2xl leading-snug lg:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
          </div>
          <div className="mt-8 border-t border-primary-foreground/15 pt-5">
            <p className="font-semibold">{featured.name}</p>
            <p className="text-sm text-primary-foreground/70">{featured.business}</p>
          </div>
        </div>

        {/* Supporting testimonials — stacked, borderless */}
        <div className="flex flex-col gap-0">
          {rest.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col justify-between border-t border-border/50 py-7 first:border-t-0 first:pt-0 lg:py-8"
            >
              <div>
                <div className="flex text-amber-500">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <svg key={j} className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-3 leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
