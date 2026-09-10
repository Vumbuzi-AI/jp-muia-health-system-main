import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setValue(target)
      return
    }

    const start = performance.now()
    let raf: number

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [trigger, target, duration])

  return value
}
