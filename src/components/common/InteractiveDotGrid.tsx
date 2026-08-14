import { useEffect, useRef } from 'react'

/**
 * Full-bleed dot grid background that illuminates near the cursor.
 * Uses a canvas for performance — no DOM nodes per dot.
 */
export function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const GAP = 28         // spacing between dots
    const BASE_R = 1.2     // base dot radius
    const GLOW_R = 4.5     // max radius near cursor
    const GLOW_DIST = 110  // influence radius in px
    const DOT_COLOR = '#c4b5fd'
    const GLOW_COLOR = '#7c3aed'

    let W = 0, H = 0

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * devicePixelRatio
      canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const { x: mx, y: my } = mouseRef.current

      for (let gx = GAP / 2; gx < W; gx += GAP) {
        for (let gy = GAP / 2; gy < H; gy += GAP) {
          const dist = Math.hypot(gx - mx, gy - my)
          const t = Math.max(0, 1 - dist / GLOW_DIST)    // 0..1
          const r = BASE_R + (GLOW_R - BASE_R) * t * t    // ease-in

          // Interpolate color: base → glow
          const alpha = 0.25 + 0.65 * t * t

          ctx.beginPath()
          ctx.arc(gx, gy, r, 0, Math.PI * 2)
          ctx.fillStyle = t > 0.05 ? GLOW_COLOR : DOT_COLOR
          ctx.globalAlpha = alpha
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
