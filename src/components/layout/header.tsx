'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { NAV_ITEMS, BUSINESS } from '@/lib/constants'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Track which section is in view for active nav highlighting
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''))

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    }

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 md:px-6 md:pt-5">
      <nav
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full px-6 md:px-7 backdrop-blur-xl transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-background/85 shadow-[0_2px_24px_-4px_rgba(27,107,138,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] ring-1 ring-border/50'
            : 'bg-background/50 shadow-none ring-1 ring-border/20'
        }`}
      >
        {/* Logo / Wordmark */}
        <Link href="/" className="font-heading text-xl text-primary">
          <span className="font-bold">Pointe</span>{' '}
          <span className="font-normal text-foreground/70">Web Co.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium transition-premium ${
                  isActive
                    ? 'text-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-primary transition-all duration-300 ease-out ${
                    isActive
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
          <Button variant="cta" size="default" className="rounded-full active:scale-[0.97]" asChild>
            <Link href="#contact">See What We&rsquo;d Build</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu" className="rounded-full">
              <Menu className={`size-5 transition-transform duration-300 ${open ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
              <X className={`absolute size-5 transition-transform duration-300 ${open ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-heading text-lg text-primary">
              {BUSINESS.name}
            </SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-base font-medium text-foreground/70 transition-premium hover:bg-secondary/50 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="cta" size="lg" className="mt-4 rounded-full" asChild>
                <Link href="#contact" onClick={() => setOpen(false)}>
                  See What We&rsquo;d Build
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
