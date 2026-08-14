import { useReducedMotion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const useRevealVariants = () => {
  const reduce = useReducedMotion()
  const offset = reduce ? 0 : 16

  return {
    fadeUp: {
      hidden: { opacity: 0, y: offset },
      visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
    },
    staggerContainer: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.07 } },
    },
    slideFromLeft: {
      hidden: { opacity: 0, x: reduce ? 0 : -16 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    },
    slideFromRight: {
      hidden: { opacity: 0, x: reduce ? 0 : 16 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    },
  }
}

export const viewportOnce = { once: true, amount: 0.15 }
