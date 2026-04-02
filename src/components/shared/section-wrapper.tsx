interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div'
}

export function SectionWrapper({
  id,
  children,
  className = '',
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={`px-6 py-24 md:py-32 lg:py-40 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </Tag>
  )
}
