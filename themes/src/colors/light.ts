import { ColorPalette } from "../types";

/**
 * Pittaya Light Theme - Color Palette
 * All colors are defined here for easy maintenance and consistency
 */
export const lightPalette: ColorPalette = {
  // Brand colors
  primary: "#d91656", // Pink - Keywords, tags, classes
  primaryLight: "#c2255c", // Medium pink - Constants, numbers
  secondary: "#2f9e44", // Green - Functions, methods
  secondaryLight: "#2b8a3e", // Dark green - Types, interfaces

  // Semantic colors
  accent: "#ae3ec9", // Purple - Decorators, special
  strings: "#d97900", // Orange - Strings
  constants: "#c2255c", // Medium pink - Numbers, constants
  comments: "#909090", // Gray - Comments
  punctuation: "#4a4a4a", // Dark gray - Operators, punctuation

  // UI colors
  background: "#fafafa", // Main background
  backgroundDark: "#f0f0f0", // Darker elements (titlebar, activity bar)
  backgroundLight: "#ffffff", // Lighter elements (inputs, widgets)
  foreground: "#2a2a2a", // Main text
  foregroundMuted: "#606060", // Secondary text
  foregroundSubtle: "#909090", // Subtle text

  // Border colors
  border: "#d0d0d0",
  borderLight: "#e0e0e0",

  // Selection colors
  selectionBackground: "#ff637e35",
  selectionBackgroundLight: "#ff637e18",

  // State colors
  error: "#ff3333",
  warning: "#ff9900",
  info: "#4d9fff",
  success: "#2f9e44",

  // Terminal colors (aligned with theme palette)
  terminalBlack: "#000000",
  terminalRed: "#d91656",
  terminalGreen: "#2f9e44",
  terminalYellow: "#d97900",
  terminalBlue: "#1864ab",
  terminalMagenta: "#ae3ec9",
  terminalCyan: "#0c8599",
  terminalWhite: "#2a2a2a",
  terminalBrightBlack: "#606060",
  terminalBrightRed: "#ff637e",
  terminalBrightGreen: "#50c878",
  terminalBrightYellow: "#ffaa00",
  terminalBrightBlue: "#4d9fff",
  terminalBrightMagenta: "#da77f2",
  terminalBrightCyan: "#15aabf",
  terminalBrightWhite: "#1a1a1a",
};
