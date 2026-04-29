/**
 * Design System - Color Palette
 * Thống nhất toàn bộ màu sắc trong project
 */
export const colors = {
  // Primary colors
  primary: {
    cinnabar: '#FE4A3B',
    darkblue: '#292B36',
    ivory: '#EBECEE',
    olive: '#778349',
  },
  // Backgrounds
  background: {
    dark: '#1A1C23',
    light: '#f8f9fa',
    card: '#ffffff',
    overlay: 'rgba(30, 31, 38, 0.8)',
  },
  // Text
  text: {
    primary: '#1e1f26',
    secondary: '#ebecee',
    muted: '#9ca3af',
    accent: '#FE4A3B',
  },
  // Semantic
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  // Border
  border: {
    light: '#e5e7eb',
    dark: '#374151',
    accent: 'rgba(254, 74, 59, 0.3)',
  },
} as const;

export type Colors = typeof colors;