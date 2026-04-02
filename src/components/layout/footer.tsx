import Link from 'next/link'
import { BUSINESS, NAV_ITEMS, SERVICE_AREAS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#1a1f22] text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + NAP */}
          <div>
            <p className="font-heading text-2xl">
              <span className="font-bold text-background">
                {BUSINESS.name.split(' ')[0]}
              </span>{' '}
              <span className="text-background/50">Web Co.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/50">
              {BUSINESS.tagline}
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-background/50">
              <p>{BUSINESS.location}</p>
              <p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="transition-colors hover:text-background"
                >
                  {BUSINESS.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-background"
                >
                  {BUSINESS.email}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/30">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/50 transition-colors hover:text-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/30">
              Serving
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              {SERVICE_AREAS.map((area) => (
                <span key={area} className="text-sm text-background/50">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-background/[0.06] pt-8 text-xs text-background/30 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-background/50"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-background/50"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
