import { ColorPalette } from "../types";

/**
 * Pittaya Dark Theme - Color Palette
 * All colors are defined here for easy maintenance and consistency
 */
export const darkPalette: ColorPalette = {
  // Brand colors
  primary: "#ff637e", // Pink - Keywords, tags, classes
  primaryLight: "#ffb3cc", // Light pink - Constants, numbers
  secondary: "#8fd460", // Green - Functions, methods
  secondaryLight: "#b8e986", // Light green - Types, interfaces

  // Semantic colors
  accent: "#ff79c6", // Magenta - Decorators, special
  strings: "#ffcc66", // Yellow - Strings
  constants: "#ffb3cc", // Light pink - Numbers, constants
  comments: "#707070", // Gray - Comments
  punctuation: "#c5c5c5", // Light gray - Operators, punctuation

  // UI colors
  background: "#1a1a1a", // Main background
  backgroundDark: "#0f0f0f", // Darker elements (titlebar, activity bar)
  backgroundLight: "#242424", // Lighter elements (inputs, widgets)
  foreground: "#e8e8e8", // Main text
  foregroundMuted: "#b0b0b0", // Secondary text
  foregroundSubtle: "#606060", // Subtle text

  // Border colors
  border: "#2a2a2a",
  borderLight: "#2d2d2d",

  // Selection colors
  selectionBackground: "#ff637e35",
  selectionBackgroundLight: "#ff637e18",

  // State colors
  error: "#ff3333",
  warning: "#ffaa33",
  info: "#4d9fff",
  success: "#50fa7b",

  // Terminal colors (aligned with theme palette)
  terminalBlack: "#1a1a1a",
  terminalRed: "#ff637e",
  terminalGreen: "#8fd460",
  terminalYellow: "#ffcc66",
  terminalBlue: "#4d9fff",
  terminalMagenta: "#ff79c6",
  terminalCyan: "#8be9fd",
  terminalWhite: "#e0e0e0",
  terminalBrightBlack: "#606060",
  terminalBrightRed: "#ff637e",
  terminalBrightGreen: "#8fd460",
  terminalBrightYellow: "#ffcc66",
  terminalBrightBlue: "#4d9fff",
  terminalBrightMagenta: "#ff79c6",
  terminalBrightCyan: "#8be9fd",
  terminalBrightWhite: "#ffffff",
};
