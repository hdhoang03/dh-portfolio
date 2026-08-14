import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tech {
  name: string
  icon: string
  bg: string   // pastel background for the icon badge
  rotate: number // slight tilt for sticker effect
}

const techStack: Tech[] = [
  { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',             bg: '#fff3e0', rotate: -4 },
  { name: 'Spring',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',          bg: '#e8f5e9', rotate:  3 },
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',            bg: '#e3f2fd', rotate: -2 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',  bg: '#e8eaf6', rotate:  4 },
  { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',          bg: '#e1f5fe', rotate: -3 },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',            bg: '#fce4ec', rotate:  2 },
  { name: 'Redis',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',            bg: '#fbe9e7', rotate: -5 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',  bg: '#ede7f6', rotate:  3 },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',               bg: '#fff8e1', rotate: -2 },
]

const BOUNCE_EASE: [number, number, number, number] = [0.34, 1.56, 0.64, 1]

const iconVariants = {
  hidden: { opacity: 0, scale: 0.3, y: 16 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.35,
      ease: BOUNCE_EASE,
    },
  }),
}

export function TechStackFolder() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="relative select-none cursor-pointer"
      style={{ width: 300, height: 360 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      animate={{ y: open ? -8 : 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      {/* Drop shadow layer */}
      <motion.div
        className="absolute rounded-3xl"
        style={{ inset: 0, background: '#b8aef0', zIndex: 0 }}
        animate={{ y: open ? 10 : 5, opacity: open ? 0.45 : 0.2 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      />

      {/* Folder body */}
      <motion.div
        className="absolute rounded-b-3xl rounded-tr-3xl overflow-hidden"
        style={{ inset: 0, zIndex: 1, border: '1.5px solid #c4b5fd' }}
        animate={{
          background: open
            ? 'linear-gradient(160deg, #ede9fe 0%, #ddd6fe 100%)'
            : 'linear-gradient(160deg, #f5f3ff 0%, #ede9fe 100%)',
          boxShadow: open
            ? '0 24px 60px rgba(91,79,207,0.22)'
            : '0 6px 20px rgba(91,79,207,0.08)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Folder tab */}
        <motion.div
          className="absolute -top-[22px] left-0 w-28 h-[24px] rounded-t-xl"
          style={{ background: '#a78bfa', transformOrigin: 'bottom left' }}
          animate={{ rotateX: open ? -40 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        />

        {/* ── Closed state ── */}
        <AnimatePresence>
          {!open && (
            <motion.div
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-5"
            >
              {/* Peeking icons (3 icons fanned out) */}
              <div className="relative h-20 w-44 flex items-end justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                    style={{
                      background: techStack[i * 3].bg,
                      border: '2px solid white',
                      left: `${i * 44}px`,
                      bottom: 0,
                      rotate: `${(i - 1) * 14}deg`,
                      zIndex: i === 1 ? 3 : 1,
                    }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2 + i * 0.4, ease: 'easeInOut', delay: i * 0.3 }}
                  >
                    <img src={techStack[i * 3].icon} alt={techStack[i * 3].name} className="w-8 h-8 object-contain" loading="lazy" />
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm font-bold" style={{ color: '#6d28d9' }}>My Tech Stack</p>
                <p className="text-xs mt-1" style={{ color: '#a78bfa' }}>hover to explore ✦</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Open state: sticker grid ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 p-6 pt-10 flex flex-col justify-center"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-5 text-center" style={{ color: '#7c3aed' }}>
                Tech Stack
              </p>
              <div className="grid grid-cols-3 gap-3 place-items-center">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    custom={i}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.18, rotate: 0, transition: { duration: 0.15 } }}
                    className="flex flex-col items-center gap-1.5"
                    style={{ rotate: tech.rotate }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: tech.bg,
                        border: '2.5px solid white',
                        boxShadow: '0 3px 10px rgba(91,79,207,0.15)',
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-7 h-7 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span
                      className="text-[9px] font-bold text-center leading-tight"
                      style={{ color: '#6d28d9' }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
