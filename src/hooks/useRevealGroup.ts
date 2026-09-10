import { useEffect, useRef } from 'react'

export function useRevealGroup(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
            el.classList.add('revealed')
          })
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
