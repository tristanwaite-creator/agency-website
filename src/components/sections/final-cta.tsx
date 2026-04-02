'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AnimatedSection } from '@/components/shared/animated-section'
import { BUSINESS } from '@/lib/constants'

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="contact"
      className="bg-primary px-6 py-24 text-primary-foreground md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Copy */}
          <AnimatedSection direction="up">
            <div>
              <h2 className="heading-display font-heading text-3xl sm:text-4xl lg:text-5xl">
                Ready to stop losing customers to competitors with better
                websites?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-primary-foreground/70">
                Tell us about your business and we&rsquo;ll build you a free
                preview site. No commitment. No credit card. Just a website that
                works.
              </p>
              <div className="mt-8 space-y-3 text-sm text-primary-foreground/60">
                <p className="flex items-center gap-2.5">
                  <span className="inline-block size-1.5 rounded-full bg-accent" />
                  Free preview before you pay anything
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="inline-block size-1.5 rounded-full bg-accent" />
                  No contracts &mdash; cancel anytime
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="inline-block size-1.5 rounded-full bg-accent" />
                  We respond within 1 business day
                </p>
              </div>
              <p className="mt-6 text-sm text-primary-foreground/50">
                Or call us directly:{' '}
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="underline transition-colors hover:text-primary-foreground/80"
                >
                  {BUSINESS.phone}
                </a>
              </p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="up" delay={0.15}>
            <div className="rounded-2xl bg-card p-6 text-foreground shadow-[0_8px_40px_-8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.8)] ring-1 ring-white/10 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl text-foreground">
                    You&rsquo;re in good hands
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    We&rsquo;ll review your info and get back to you within 1
                    business day with ideas for your site.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-5"
                >
                  <h3 className="font-heading text-xl text-foreground">
                    Get your free preview
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Just 3 quick fields &mdash; we&rsquo;ll get back to you
                    within 24 hours.
                  </p>

                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Maria Gonzalez"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business">Business name</Label>
                    <Input
                      id="business"
                      name="business"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Bayside Bakery"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Email or phone</Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      placeholder="maria@baysidebakery.com"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full rounded-full active:scale-[0.97]"
                  >
                    Send My Free Preview
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
