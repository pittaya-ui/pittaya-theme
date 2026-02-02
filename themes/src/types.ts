// Type definitions for VS Code theme generation

export interface ColorPalette {
  // Brand colors
  primary: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;

  // Semantic colors
  accent: string;
  strings: string;
  constants: string;
  comments: string;
  punctuation: string;

  // UI colors
  background: string;
  backgroundDark: string;
  backgroundLight: string;
  foreground: string;
  foregroundMuted: string;
  foregroundSubtle: string;

  // Border colors
  border: string;
  borderLight: string;

  // Selection colors
  selectionBackground: string;
  selectionBackgroundLight: string;

  // State colors
  error: string;
  warning: string;
  info: string;
  success: string;

  // Terminal colors
  terminalBlack: string;
  terminalRed: string;
  terminalGreen: string;
  terminalYellow: string;
  terminalBlue: string;
  terminalMagenta: string;
  terminalCyan: string;
  terminalWhite: string;
  terminalBrightBlack: string;
  terminalBrightRed: string;
  terminalBrightGreen: string;
  terminalBrightYellow: string;
  terminalBrightBlue: string;
  terminalBrightMagenta: string;
  terminalBrightCyan: string;
  terminalBrightWhite: string;
}

export interface TokenColorSettings {
  foreground?: string;
  fontStyle?: string;
}

export interface TokenColor {
  name: string;
  scope: string | string[];
  settings: TokenColorSettings;
}

export interface SemanticTokenColor {
  foreground?: string;
  fontStyle?: string;
}

export interface Theme {
  name: string;
  type: "dark" | "light";
  semanticHighlighting: boolean;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
  semanticTokenColors: Record<string, SemanticTokenColor>;
}
