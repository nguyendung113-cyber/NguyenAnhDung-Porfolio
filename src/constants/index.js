/**
 * Design System - Index
 * Export all design system modules
 */
export { colors } from "./colors";
export { typography } from "./typography";
export { spacing, breakpoints } from "./spacing";

// Re-export as default
import { colors } from "./colors";
import { typography } from "./typography";
import { spacing, breakpoints } from "./spacing";

export const designSystem = {
  colors,
  typography,
  spacing,
  breakpoints,
};

export default designSystem;
