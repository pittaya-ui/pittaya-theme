import { ColorPalette, TokenColor } from "../types";

/**
 * TypeScript/JavaScript and JSX/React specific token colors
 */
export function getTypeScriptTokens(palette: ColorPalette): TokenColor[] {
  return [
    // ============================================
    // JSX COMPONENTS
    // ============================================
    {
      name: "JSX Components",
      scope: [
        "support.class.component.tsx",
        "support.class.component.jsx",
        "entity.name.tag.tsx",
        "entity.name.tag.jsx",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "bold",
      },
    },

    // ============================================
    // TYPESCRIPT TYPES
    // ============================================
    {
      name: "TypeScript Types and Interfaces",
      scope: [
        "entity.name.type.ts",
        "entity.name.type.tsx",
        "entity.name.type.interface.ts",
        "entity.name.type.interface.tsx",
        "support.type.primitive.ts",
        "support.type.primitive.tsx",
        "support.type.builtin.ts",
        "support.type.builtin.tsx",
      ],
      settings: {
        foreground: palette.secondaryLight,
      },
    },
    {
      name: "TypeScript Type Parameters",
      scope: [
        "entity.name.type.parameter.ts",
        "entity.name.type.parameter.tsx",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // TYPESCRIPT KEYWORDS
    // ============================================
    {
      name: "TypeScript Storage Keywords",
      scope: [
        "storage.type.ts",
        "storage.type.tsx",
        "keyword.control.as.ts",
        "keyword.control.as.tsx",
      ],
      settings: {
        foreground: palette.primary,
      },
    },
    {
      name: "TypeScript Import/Export",
      scope: [
        "keyword.control.import.ts",
        "keyword.control.import.tsx",
        "keyword.control.export.ts",
        "keyword.control.export.tsx",
        "keyword.control.from.ts",
        "keyword.control.from.tsx",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // JSX ATTRIBUTES
    // ============================================
    {
      name: "JSX Attributes",
      scope: [
        "entity.other.attribute-name.tsx",
        "entity.other.attribute-name.jsx",
      ],
      settings: {
        foreground: palette.secondaryLight,
        fontStyle: "italic",
      },
    },

    // ============================================
    // JSX EMBEDDED EXPRESSIONS
    // ============================================
    {
      name: "JSX Embedded Expressions",
      scope: [
        "punctuation.section.embedded.begin.tsx",
        "punctuation.section.embedded.end.tsx",
        "punctuation.section.embedded.begin.jsx",
        "punctuation.section.embedded.end.jsx",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // JSX TAG PUNCTUATION
    // ============================================
    {
      name: "JSX/TSX Tag Punctuation",
      scope: [
        "punctuation.definition.tag.end.tsx",
        "punctuation.definition.tag.end.jsx",
        "punctuation.definition.tag.begin.tsx",
        "punctuation.definition.tag.begin.jsx",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },

    // ============================================
    // TEMPLATE LITERALS
    // ============================================
    {
      name: "Template Literals",
      scope: [
        "string.template.ts",
        "string.template.tsx",
        "string.template.js",
        "string.template.jsx",
      ],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "Template Literal Expressions",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // ARROW FUNCTIONS
    // ============================================
    {
      name: "Arrow Functions",
      scope: [
        "storage.type.function.arrow.ts",
        "storage.type.function.arrow.tsx",
        "storage.type.function.arrow.js",
        "storage.type.function.arrow.jsx",
      ],
      settings: {
        foreground: palette.primary,
      },
    },

    // ============================================
    // OBJECT KEYS
    // ============================================
    {
      name: "Object Keys",
      scope: [
        "meta.object-literal.key.ts",
        "meta.object-literal.key.tsx",
        "meta.object-literal.key.js",
        "meta.object-literal.key.jsx",
      ],
      settings: {
        foreground: palette.foreground,
      },
    },

    // ============================================
    // JS METHODS
    // ============================================
    {
      name: "JavaScript Methods",
      scope: [
        "entity.name.method.js",
        "entity.name.method.ts",
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor",
      ],
      settings: {
        foreground: palette.secondary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // MODULE IMPORTS
    // ============================================
    {
      name: "Module Names",
      scope: [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js",
      ],
      settings: {
        foreground: palette.primary,
      },
    },

    // ============================================
    // ES7 BIND OPERATOR
    // ============================================
    {
      name: "ES7 Bind Operator",
      scope: "source.js constant.other.object.key.js string.unquoted.label.js",
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },
  ];
}
