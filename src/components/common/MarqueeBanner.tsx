interface MarqueeBannerProps {
  text: string
  /** Number of times to repeat the text in one loop */
  repeat?: number
  reverse?: boolean
}

export function MarqueeBanner({ text, repeat = 8, reverse = false }: MarqueeBannerProps) {
  const items = Array.from({ length: repeat }, (_, i) => i)

  return (
    <div
      className="w-full overflow-hidden py-3 border-y select-none"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee${reverse ? '-reverse' : ''} 28s linear infinite`,
          willChange: 'transform',
        }}
      >
        {/* Render twice for seamless loop */}
        {[0, 1].map((group) => (
          <span key={group} className="flex items-center shrink-0">
            {items.map((i) => (
              <span
                key={i}
                className="flex items-center px-8 text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: 'var(--color-muted)' }}
              >
                {text}
              </span>
            ))}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
