/**
 * Design System - Spacing & Layout
 * Thống nhất spacing, breakpoints, container sizes
 */
export const spacing = {
  // Spacing scale (based on 4px)
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  // Section padding
  section: {
    py: 'py-16 md:py-24',
    px: 'px-4 sm:px-8 md:px-20',
  },
  // Container
  container: {
    maxWidth: 'max-w-7xl',
    padding: 'px-6 md:px-12',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type Spacing = typeof spacing;