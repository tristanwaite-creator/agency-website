# Pointe Web Co. — Agency Website

## Layer 1: Brand Identity (Locked)

These are non-negotiable. Every design decision must work within these constraints. Do not override, reinterpret, or "improve" these. They are the foundation.

### Color Palette

```
--color-primary: #1B6B8A        /* Deep teal — trustworthy, warm, coastal */
--color-accent: #F5A623         /* Warm amber — energy, approachability */
--color-text: #2D3436           /* Charcoal slate — readable, grounded */
--color-background: #F8F5F0     /* Warm off-white — not sterile, creamy */
--color-cta: #E07A5F            /* Coral-terracotta — action, warmth */
```

You may derive tints, shades, and opacity variants of these colors. You may not introduce new hues. If you need a neutral gray, derive it from charcoal slate. If you need a hover state, darken or lighten the base color. The palette stays closed.

### Brand Voice

Pointe Web Co. sounds like a knowledgeable neighbor, not a faceless agency. The tone is:

- **Confident but not arrogant.** We know what we're doing. We don't need to prove it with jargon.
- **Direct but warm.** Short sentences. No corporate fluff. But always friendly, never cold.
- **Local-first.** We reference Gloucester Point, the York River, Hampton Roads naturally. This is home, not a market.
- **Anti-agency.** We never sound like a big-city agency. No buzzwords. No "synergy." No "leverage your digital footprint." We say what we mean.

Example of correct voice: "We build websites for local businesses. No contracts. No surprises. Just a site that works and a team that picks up the phone."

Example of wrong voice: "We craft bespoke digital experiences that empower brands to maximize their online potential."

### Logo Concept

The logo is a combination mark — a custom wordmark plus a separable icon. Direction: compass or map-pin motif integrated into the lettermark. "Pointe" in heavier weight, "Web Co." lighter and smaller. The icon works alone as a favicon and social profile image.

Do not use techy motifs (binary, circuits, code brackets). Do not use script fonts. The logo should feel navigational and local, not Silicon Valley.

### Business Facts (Never alter these)

- **Name:** Pointe Web Co.
- **Location:** Gloucester Point, Virginia
- **Founders:** Husband-and-wife team
- **Experience:** 12 years of web development
- **Core offer:** $500 custom websites for local businesses
- **Monthly plan:** $99–149/mo managed hosting and maintenance
- **Tagline direction:** Something in the feel of "A local team that treats your business like our own"
- **Service area:** Gloucester Point, Yorktown, Hampton, Newport News, Hampton Roads, Middle Peninsula

---

## Layer 2: Design Freedom (Guided, Not Dictated)

These are the decisions you SHOULD make. Consult the installed skills. Be opinionated. Do not default to safe, generic choices. The skills exist to help you make distinctive, high-quality decisions — use them.

### Typography — YOUR CHOICE

Choose fonts that feel right for a coastal professional web agency. The brand is warm, confident, and premium without being stuffy. Consider the following guidance, but make your own selection:

- Headings should feel distinctive and memorable. Geometric sans, humanist sans, or a refined serif are all viable. Do not use Inter, Roboto, Arial, or Space Grotesk for headings.
- Body text should prioritize screen readability. A well-crafted sans-serif is the safe bet, but a readable serif could work if it fits the heading pairing.
- Consult **ui-ux-pro-max** for proven font pairings. Consult **frontend-design** for anti-generic typography rules.
- Load via next/font for zero CLS.

### Layout and Page Structure — YOUR CHOICE

The homepage needs to convert two types of visitors: warm leads who scanned a QR code and already know who we are, and cold organic traffic discovering us for the first time. Beyond that, the structure is yours to design.

Guidance (not rules):
- The hero must pass the 5-second test: what we offer, how it helps, what to do next.
- Portfolio work should dominate the visual hierarchy. We are a web design agency — our work IS the proof.
- Both founders should appear on the homepage, not buried on a subpage.
- Pricing should be transparent and visible, not hidden behind "contact us."
- A "how it works" section reduces perceived risk (3 simple steps).
- FAQ should handle real objections (price, DIY alternatives, contracts).

Consult **ui-ux-pro-max** for industry-specific homepage patterns for web agencies. Consult **web-design-guidelines** for conversion and UX best practices. Make your own decisions about section order, visual weight, and content hierarchy.

### Component Selection — YOUR CHOICE

Use shadcn/ui as the base component library. Beyond that, decide what the site needs:

- Evaluate whether Aceternity UI, Magic UI, or custom components best serve each section.
- Before/after sliders, testimonial carousels, pricing cards, FAQ accordions, portfolio grids — choose what fits the design, not what's easiest.
- Consult **frontend-design** for component-level design quality standards.

### Animation and Motion — YOUR CHOICE (within taste-skill dials)

The animation stack is GSAP + Lenis + ScrollTrigger + Motion (Framer Motion) v12+.

**taste-skill settings for this project:**

```
DESIGN_VARIANCE: 7
MOTION_INTENSITY: 7
VISUAL_DENSITY: 6
```

Within these intensity levels, decide:
- Which elements get scroll-triggered reveals and which appear statically.
- Whether the hero uses a text split animation, a parallax image, a video background, or something else entirely.
- How the portfolio section presents projects (scroll-through device frames, mosaic grid, full-width immersive sections, or another approach).
- Page transition behavior and hover micro-interactions.

Consult **gsap-skills** for correct implementation patterns. Consult **taste-skill** for intensity calibration. Only animate GPU-friendly properties: opacity, transform, filter, clipPath. Respect prefers-reduced-motion.

### Mobile Experience — YOUR CHOICE

Mobile-first is non-negotiable, but the implementation is your decision:

- Sticky header, floating header, or header that hides on scroll?
- Hamburger menu, slide-out drawer, bottom sheet, or something else?
- How do animations adapt on mobile? Simplified? Different? Removed?
- Touch targets minimum 44px, thumb-zone CTA placement.

Consult **web-design-guidelines** for mobile UX rules.

### Portfolio Display — YOUR CHOICE

The portfolio is the most important section on the site. How you present the work matters enormously. Options to consider:

- Full-page screenshots in device frames with GSAP scroll-through
- Single-scroll narrative where each project occupies a full-width immersive section
- Mosaic grid with varied tile sizes (good for making 3-5 projects look abundant)
- Video walkthroughs (H.264 MP4, under 2MB, loaded via IntersectionObserver)

Do NOT use iframes to embed live sites — they destroy performance. Use screenshots or video.

### SEO Strategy — FOLLOW THESE PATTERNS

- Title tag: primary keyword within 60 characters. "Web Design in Gloucester Point, VA | Pointe Web Co."
- Geographic embedding: weave location references into natural copy, not keyword stuffing.
- Question-based H2/H3 headings for GEO optimization: "How much does a small business website cost in Virginia?"
- Statistics every 150-200 words for AI search visibility.
- ProfessionalService schema in JSON-LD with areaServed covering all service area locations.
- FAQPage schema on service pages.
- NAP consistency: always "Pointe Web Co." — never "Pointe Web Company" or "PointeWeb."

---

## Layer 3: Skill Orchestration

This section tells you how to use the installed skills together. Each skill has a specific role. Do not use them interchangeably.

### When making DESIGN decisions (layout, visual direction, component selection):

1. **Start with frontend-design.** It sets the aesthetic direction and prevents generic output. Let it push you toward a bold, distinctive concept.
2. **Check ui-ux-pro-max for data.** Once you have a direction, consult its industry patterns, font pairing database, and UX guidelines to ground your choices in tested patterns.
3. **Validate with web-design-guidelines.** Before finalizing any design decision, check it against accessibility and UX rules. Catch problems before they're built.
4. **Set intensity with taste-skill.** Use the DESIGN_VARIANCE, MOTION_INTENSITY, and VISUAL_DENSITY dials above to calibrate how far to push the design.

### When BUILDING (writing code, creating components):

1. **Follow react-best-practices for all code.** Server vs. client components, data fetching patterns, bundle optimization, re-render prevention. This is the code quality baseline.
2. **Follow web-design-guidelines for accessibility.** WCAG AA contrast, alt text, keyboard navigation, semantic HTML, ARIA labels. Every component, every time.
3. **Follow frontend-design for implementation quality.** CSS variable usage, color system application, typography sizing and spacing, component polish.
4. **Follow gsap-skills for all animation code.** useGSAP hook, ScrollTrigger setup, cleanup patterns, timeline sequencing, GPU acceleration. Do not write GSAP code from memory — follow the skill's patterns exactly.

### When REVIEWING your own work:

1. **Use impeccable /audit** to score design quality across five dimensions.
2. **Use impeccable /polish** for final cleanup passes.
3. **Check web-design-guidelines** for any accessibility or UX violations you missed during building.
4. **Visually verify** on desktop (1440px) and mobile (375px). Does it look right? Does the brand feel consistent? Are the animations smooth?

### Conflict Resolution

If two skills give contradictory guidance:

- **Brand constraints (Layer 1) always win.** No skill can override the locked palette, voice, or logo direction.
- **Accessibility wins over aesthetics.** If a design choice looks great but fails WCAG AA, change the design.
- **Performance wins over animation.** If an animation drops Lighthouse below 85, simplify it. The site must be fast.
- **frontend-design wins over ui-ux-pro-max on taste.** frontend-design prevents generic output; ui-ux-pro-max provides options. If ui-ux-pro-max suggests a safe pattern and frontend-design pushes for something bolder, go bolder (within taste-skill dials).

---

## Technical Stack

- **Framework:** Next.js 15+, App Router, TypeScript strict mode
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui base + selected premium components
- **Animation:** GSAP, Lenis (lerp: 0.1, duration: 1.5), ScrollTrigger, Motion v12+
- **Images:** next/image with priority for above-fold, placeholder="blur", Sharp for optimization, WebP
- **Fonts:** next/font (your chosen pairing)
- **Deployment:** Vercel
- **Performance targets:** Lighthouse 90+ desktop, 75-85 mobile (mobile will always score lower with heavy animations — focus on real Core Web Vitals via Search Console rather than chasing 100)
- **JS budget:** Under 150KB first load. Dynamic imports (next/dynamic with ssr: false) for all animation-heavy components.

---

## Reference Documents

These files contain the strategic research behind this project. Do not load them all at once — read the relevant document just-in-time when you need it for a specific task.

### /reference/copy-playbook.pdf
**Read before writing ANY copy, headlines, CTAs, FAQ content, or page structure decisions.**

Contains: The StoryBrand-PAS hybrid framework for homepage copy. The 12-section homepage conversion order (hero, social proof bar, problem/stakes, transformation, how it works, portfolio, about, testimonials, pricing, FAQ, final CTA, footer). Warm vs. cold traffic hero strategies. CTA copy and micro-copy that converts (first-person CTAs, friction-reducing micro-copy). Seven objections with preemptive answers. Three-tier pricing psychology with decoy structure. GEO optimization copy patterns for AI search visibility. Real agency copy examples to model.

### /reference/brand-tech-stack.pdf
**Read before making design decisions, choosing animation approaches, or building the portfolio section.**

Contains: The 10 agency portfolios worth studying (Zig Zag Creative, Greaterthan Studio, Fiddle.Digital, Brass Hands, Blennd, etc.) with specific lessons from each. The coastal professional brand identity rationale. Typography pairing research. The husband-wife competitive advantage and how to position it. The GSAP + Lenis + ScrollTrigger technical stack with performance architecture. Portfolio display strategies for a small body of work (single-scroll narrative, mosaic grid). The five mock project concepts (Chesapeake Table, Tidewater Lawn & Landscape, Point Provisions, Coastal Concrete Co., dental/realty). Case study format (overview, challenge, process, solution, results).

### /reference/service-plan.docx
**Read before writing pricing content, service descriptions, or any client-facing copy about what we offer.**

Contains: The two service tiers (The Handoff at $500 one-time, The Full Package at $500 + $99-149/mo). Revenue projections and business model rationale. Upsell services and timing strategy. The drop-off outreach method. Client conversation scripts and objection handling. Technical notes on platform compatibility (Shopify, Square, booking systems). The growth roadmap from weeks 1-4 through year 2+.

### How to Use These

- **Writing the hero section?** Read the copy playbook's hero strategy section first. It has specific headline formulas and CTA copy for both warm and cold traffic.
- **Designing the portfolio layout?** Read the brand-tech-stack doc's portfolio section. It compares display strategies and explains why iframe embeds destroy performance.
- **Building the pricing section?** Read the service plan for exact tier structure, then the copy playbook for pricing psychology (decoy effect, value anchoring, comparison reframe).
- **Writing FAQ copy?** Read the copy playbook's seven objections. Each one is pre-written as a real prospect would phrase it, with the counter-argument.
- **Choosing animation approach?** Read the brand-tech-stack doc's technical stack section for the exact GSAP + Lenis architecture and performance targets.

