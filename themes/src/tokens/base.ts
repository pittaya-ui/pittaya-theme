import { ColorPalette, TokenColor } from "../types";

/**
 * Base token colors - Generic scopes used across all languages
 * Consolidated to remove duplications
 */
export function getBaseTokens(palette: ColorPalette): TokenColor[] {
  return [
    // ============================================
    // COMMENTS
    // ============================================
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: palette.comments,
        fontStyle: "italic",
      },
    },

    // ============================================
    // VARIABLES
    // ============================================
    {
      name: "Variables",
      scope: ["variable", "string constant.other.placeholder"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Block Level Variables",
      scope: "meta.block variable.other",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Language Variables (this, self)",
      scope: "variable.language",
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // CONSTANTS
    // ============================================
    {
      name: "Constants",
      scope: [
        "constant",
        "constant.numeric",
        "constant.language",
        "constant.character",
        "constant.other",
      ],
      settings: {
        foreground: palette.constants,
      },
    },
    {
      name: "Color Constants",
      scope: "constant.other.color",
      settings: {
        foreground: palette.foreground,
      },
    },

    // ============================================
    // INVALID
    // ============================================
    {
      name: "Invalid",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: palette.error,
      },
    },

    // ============================================
    // KEYWORDS (Consolidated)
    // ============================================
    {
      name: "Keywords",
      scope: [
        "keyword",
        "keyword.control",
        "keyword.control.conditional",
        "keyword.control.flow",
        "keyword.control.return",
        "keyword.control.loop",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: palette.primary,
      },
    },

    // ============================================
    // OPERATORS
    // ============================================
    {
      name: "Operators",
      scope: [
        "keyword.operator",
        "keyword.operator.assignment",
        "keyword.operator.arithmetic",
        "keyword.operator.comparison",
        "keyword.operator.logical",
        "punctuation.separator",
        "punctuation.terminator",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },
    {
      name: "Special Operators",
      scope: [
        "keyword.other.substitution",
        "meta.brace.round",
        "meta.brace.square",
        "punctuation.definition.parameters",
        "punctuation.definition.array",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },

    // ============================================
    // FUNCTIONS
    // ============================================
    {
      name: "Functions",
      scope: [
        "entity.name.function",
        "meta.function-call",
        "support.function",
        "keyword.other.special-method",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // CLASSES & TYPES (Consolidated)
    // ============================================
    {
      name: "Classes",
      scope: [
        "entity.name.class",
        "entity.name.type.class",
        "support.class",
        "entity.other.inherited-class",
      ],
      settings: {
        foreground: palette.primary,
      },
    },
    {
      name: "Types and Interfaces",
      scope: [
        "support.type",
        "entity.name.type",
        "entity.name.type.interface",
        "entity.name.type.alias",
      ],
      settings: {
        foreground: palette.secondaryLight,
      },
    },

    // ============================================
    // STRINGS
    // ============================================
    {
      name: "Strings",
      scope: [
        "string",
        "string.quoted",
        "string.template",
        "punctuation.definition.string",
      ],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "String Links",
      scope: "string.other.link",
      settings: {
        foreground: palette.info,
      },
    },

    // ============================================
    // REGULAR EXPRESSIONS
    // ============================================
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: palette.primaryLight,
      },
    },

    // ============================================
    // ESCAPE CHARACTERS
    // ============================================
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: palette.primary,
      },
    },

    // ============================================
    // TAGS
    // ============================================
    {
      name: "Tags",
      scope: ["entity.name.tag", "punctuation.definition.tag"],
      settings: {
        foreground: palette.primary,
      },
    },

    // ============================================
    // ATTRIBUTES
    // ============================================
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.secondaryLight,
        fontStyle: "italic",
      },
    },

    // ============================================
    // DECORATORS
    // ============================================
    {
      name: "Decorators",
      scope: [
        "meta.decorator",
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // URLS & LINKS
    // ============================================
    {
      name: "URL",
      scope: ["markup.underline.link", "meta.link"],
      settings: {
        fontStyle: "underline",
      },
    },

    // ============================================
    // MARKUP (Git Diff)
    // ============================================
    {
      name: "Inserted",
      scope: "markup.inserted",
      settings: {
        foreground: palette.success,
      },
    },
    {
      name: "Deleted",
      scope: "markup.deleted",
      settings: {
        foreground: palette.error,
      },
    },
    {
      name: "Changed",
      scope: "markup.changed",
      settings: {
        foreground: palette.warning,
      },
    },
  ];
}
