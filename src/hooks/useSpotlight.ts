import { useCallback } from 'react'

/**
 * Returns an onMouseMove handler that writes the pointer position into
 * `--mx` / `--my` CSS custom properties on the target element, driving the
 * `.spotlight` radial glow.
 */
export function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])
}
