import Image from 'next/image'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { BUSINESS } from '@/lib/constants'

export function About() {
  return (
    <SectionWrapper id="about" className="bg-surface-alt">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Team photo placeholder */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border/30">
            <Image
              src="/images/team/founders.jpg"
              alt="Tristan and partner — the husband-and-wife team behind Pointe Web Co."
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
