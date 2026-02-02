import { ColorPalette, SemanticTokenColor } from "./types";

/**
 * Semantic Token Colors - Provides richer coloring for modern editors
 */
export function getSemanticTokenColors(
  palette: ColorPalette,
): Record<string, SemanticTokenColor> {
  return {
    // Variables
    variable: {
      foreground: palette.foreground,
    },
    "variable.readonly": {
      foreground: palette.constants,
    },
    "variable.defaultLibrary": {
      foreground: palette.primary,
    },

    // Parameters
    parameter: {
      foreground: palette.constants,
    },

    // Functions
    function: {
      foreground: palette.secondary,
    },
    "function.defaultLibrary": {
      foreground: palette.secondary,
    },
    method: {
      foreground: palette.secondary,
    },

    // Classes
    class: {
      foreground: palette.primary,
    },
    "class.defaultLibrary": {
      foreground: palette.primary,
    },

    // Types
    interface: {
      foreground: palette.secondaryLight,
    },
    type: {
      foreground: palette.secondaryLight,
    },
    typeParameter: {
      foreground: palette.secondary,
    },

    // Enums
    enum: {
      foreground: palette.primary,
    },
    enumMember: {
      foreground: palette.constants,
    },

    // Properties
    property: {
      foreground: palette.foreground,
    },
    "property.readonly": {
      foreground: palette.constants,
    },

    // Namespaces & Macros
    namespace: {
      foreground: palette.primary,
    },
    macro: {
      foreground: palette.primary,
    },

    // Keywords & Operators
    keyword: {
      foreground: palette.primary,
    },
    operator: {
      foreground: palette.punctuation,
    },

    // Literals
    string: {
      foreground: palette.strings,
    },
    number: {
      foreground: palette.constants,
    },
    regexp: {
      foreground: palette.primaryLight,
    },

    // Comments
    comment: {
      foreground: palette.comments,
      fontStyle: "italic",
    },

    // Decorators
    decorator: {
      foreground: palette.primary,
    },

    // Labels
    label: {
      foreground: palette.strings,
    },
  };
}
