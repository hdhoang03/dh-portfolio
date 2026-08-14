import { motion, type Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  alt?: boolean
}

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export function SectionWrapper({ id, children, className = '', alt = false }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`section-padding ${className}`}
      style={alt ? { background: 'var(--color-surface)' } : {}}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
