import { SectionWrapper } from '@/components/shared/section-wrapper'
import { BUSINESS } from '@/lib/constants'

function FoundersPlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.04] p-8">
      {/* Two person silhouettes */}
      <div className="flex items-end gap-4">
        {/* Person 1 */}
        <div className="flex flex-col items-center">
          <div className="size-16 rounded-full bg-primary/15" />
          <div className="mt-2 h-20 w-14 rounded-t-2xl bg-primary/10" />
        </div>
        {/* Person 2 */}
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full bg-accent/20" />
          <div className="mt-2 h-18 w-12 rounded-t-2xl bg-accent/10" />
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm font-medium text-primary/40">Your local web team</p>
        <p className="mt-0.5 text-xs text-muted-foreground/50">{BUSINESS.location}</p>
      </div>
    </div>
  )
}

export function About() {
  return (
    <SectionWrapper id="about" className="bg-surface-alt">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Team photo placeholder */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border/30">
            <FoundersPlaceholder />
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Meet the team
          </p>
          <h2 className="heading-display mt-3 font-heading text-3xl text-foreground sm:text-4xl">
            A husband-and-wife team that gets it
          </h2>
          <p className="mt-5 leading-relaxed text-foreground/70">
            We understand small business because we are one. After{' '}
            {BUSINESS.experience} building websites across industries, we
            founded {BUSINESS.name} in {BUSINESS.location} because local
            businesses deserve premium web design without the premium price tag.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            When you work with us, you work directly with the people building
            your site. No account managers. No outsourced teams. Just two people
            who care about your business almost as much as you do.
          </p>
          <div className="mt-10 flex gap-10 border-t border-border/50 pt-8">
            <div className="border-l-2 border-primary pl-4">
              <p className="font-heading text-4xl text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {BUSINESS.experience}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">of experience</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <p className="font-heading text-4xl text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {BUSINESS.websitesBuilt}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">websites built</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
