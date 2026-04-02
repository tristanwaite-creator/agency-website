'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ScrollTriggerBridge() {
  useLenis(() => {
    ScrollTrigger.update()
  })
  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <ScrollTriggerBridge />
      {children}
    </ReactLenis>
  )
}
