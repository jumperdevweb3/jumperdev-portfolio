import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    e: React.MouseEvent,
    id: string,
    offsetPercentage?: number,
  ) => {
    if (e) {
      e.preventDefault()
    }

    const element = document.getElementById(id)
    if (element) {
      const offset = offsetPercentage ? window.innerHeight * offsetPercentage / 100 : 0
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })

      // Update URL hash after scrolling without causing a jump
      window.history.pushState(null, '', `#${id}`)
    }
  }, [])

  return scrollToElement
} 