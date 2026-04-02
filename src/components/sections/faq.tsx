'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { AnimatedSection } from '@/components/shared/animated-section'
import { FAQ_ITEMS, BUSINESS } from '@/lib/constants'

export default function FAQ() {
  return (
    <SectionWrapper id="faq" className="bg-surface-alt">
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        {/* Accordion — main column */}
        <div>
          <AnimatedSection direction="up">
            <div>
              <h2 className="heading-display font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
                Questions? We&rsquo;ve got answers.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Real questions from real business owners. Here&rsquo;s the
                straight truth.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <Accordion type="single" collapsible className="mt-12">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border/40"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground transition-premium hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>

        {/* Sidebar — sticky contact card (desktop) */}
        <div className="hidden lg:block">
          <AnimatedSection direction="right" delay={0.25}>
            <div className="sticky top-32 rounded-2xl border border-border/60 bg-card p-7 shadow-tinted">
              <p className="font-heading text-lg text-foreground">
                Still have questions?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We&rsquo;re real people. Call or email us and we&rsquo;ll get
                back to you within a day.
              </p>
              <div className="mt-5 space-y-2.5 text-sm">
                <p className="flex items-center gap-2.5">
                  <Phone className="size-3.5 text-primary" />
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-primary transition-premium hover:text-primary/80"
                  >
                    {BUSINESS.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="size-3.5 text-primary" />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-primary transition-premium hover:text-primary/80"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
              </div>
              <Button
                variant="cta"
                size="default"
                className="group mt-6 w-full rounded-full active:scale-[0.97]"
                asChild
              >
                <Link href="#contact">
                  Get a Free Preview
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Mobile contact card — below accordion */}
      <div className="mt-12 lg:hidden">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-6 text-center shadow-tinted">
            <p className="font-heading text-lg text-foreground">
              Still have questions?
            </p>
            <p className="text-sm text-muted-foreground">
              We&rsquo;re real people &mdash; call, email, or request a free
              preview.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-1.5 text-primary transition-premium hover:text-primary/80"
              >
                <Phone className="size-3.5" />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-1.5 text-primary transition-premium hover:text-primary/80"
              >
                <Mail className="size-3.5" />
                {BUSINESS.email}
              </a>
            </div>
            <Button
              variant="cta"
              size="lg"
              className="group w-full rounded-full active:scale-[0.97] sm:w-auto"
              asChild
            >
              <Link href="#contact">
                Get a Free Preview
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
