'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '@/lib/animations'

gsap.registerPlugin(useGSAP)

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      // Compass — slow infinite rotation
      gsap.to('.compass-rose', {
        rotation: 360,
        duration: 90,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
      })

      // Compass inner ring — counter-rotation
      gsap.to('.compass-inner', {
        rotation: -360,
        duration: 120,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
      })

      // Wave paths — horizontal drift at different speeds
      gsap.to('.wave-1', {
        x: 80,
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.wave-2', {
        x: -60,
        duration: 12,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.wave-3', {
        x: 50,
        duration: 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(27,107,138,0.06),transparent)]" />

      {/* Compass rose — positioned right side, overlapping the device frame area */}
      <svg
        className="compass-rose absolute -right-20 top-1/2 -translate-y-1/2 h-[700px] w-[700px] opacity-[0.04] lg:opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.3" className="text-primary" />

        {/* Cardinal points — N, S, E, W */}
        <path d="M200 10 L210 80 L200 60 L190 80 Z" fill="currentColor" className="text-primary" />
        <path d="M200 390 L210 320 L200 340 L190 320 Z" fill="currentColor" className="text-primary" />
        <path d="M390 200 L320 210 L340 200 L320 190 Z" fill="currentColor" className="text-primary" />
        <path d="M10 200 L80 210 L60 200 L80 190 Z" fill="currentColor" className="text-primary" />

        {/* Diagonal points — NE, NW, SE, SW */}
        <path d="M334 66 L290 110 L300 95 L285 105 Z" fill="currentColor" className="text-primary" opacity="0.6" />
        <path d="M66 66 L110 110 L95 100 L105 115 Z" fill="currentColor" className="text-primary" opacity="0.6" />
        <path d="M334 334 L290 290 L300 305 L285 295 Z" fill="currentColor" className="text-primary" opacity="0.6" />
        <path d="M66 334 L110 290 L95 300 L105 285 Z" fill="currentColor" className="text-primary" opacity="0.6" />

        {/* Inner compass ring with tick marks */}
        <g className="compass-inner">
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180
            const r1 = i % 9 === 0 ? 130 : 135
            const r2 = 140
            return (
              <line
                key={i}
                x1={Math.round((200 + r1 * Math.sin(angle)) * 1000) / 1000}
                y1={Math.round((200 - r1 * Math.cos(angle)) * 1000) / 1000}
                x2={Math.round((200 + r2 * Math.sin(angle)) * 1000) / 1000}
                y2={Math.round((200 - r2 * Math.cos(angle)) * 1000) / 1000}
                stroke="currentColor"
                strokeWidth={i % 9 === 0 ? '0.8' : '0.3'}
                className="text-primary"
              />
            )
          })}
        </g>

        {/* Center dot */}
        <circle cx="200" cy="200" r="3" fill="currentColor" className="text-primary" />
        <circle cx="200" cy="200" r="8" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
      </svg>

      {/* Flowing wave lines — bottom half */}
      <svg
        className="absolute bottom-0 left-0 h-[400px] w-full opacity-[0.04]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-1 text-primary"
          d="M-100 300 C200 250, 400 350, 700 280 C1000 210, 1200 320, 1540 270"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className="wave-2 text-accent"
          d="M-100 340 C250 300, 450 370, 750 320 C1050 270, 1250 360, 1540 310"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          className="wave-3 text-primary"
          d="M-100 370 C300 340, 500 390, 800 355 C1100 320, 1300 380, 1540 350"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
