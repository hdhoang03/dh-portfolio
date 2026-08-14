interface SectionTitleProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ label, title, subtitle, align = 'left' }: SectionTitleProps) {
  const isCenter = align === 'center'
  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : ''}`}>
      <span className="tag mb-3 inline-block">{label}</span>
      <h2
        className="text-3xl sm:text-4xl font-bold font-['Outfit'] mb-2 leading-tight"
        style={{ color: 'var(--color-text)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm mt-2 leading-relaxed ${isCenter ? 'max-w-lg mx-auto' : 'max-w-lg'}`} style={{ color: 'var(--color-muted)' }}>
          {subtitle}
        </p>
      )}
      <div className={`divider ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  )
}
