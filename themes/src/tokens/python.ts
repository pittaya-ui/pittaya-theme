import { ColorPalette, TokenColor } from "../types";

/**
 * Python specific token colors
 */
export function getPythonTokens(palette: ColorPalette): TokenColor[] {
  return [
    // ============================================
    // PYTHON FUNCTIONS
    // ============================================
    {
      name: "Python Function Definitions",
      scope: ["entity.name.function.python", "meta.function-call.python"],
      settings: {
        foreground: palette.secondary,
      },
    },
    {
      name: "Python Magic Methods",
      scope: "support.function.magic.python",
      settings: {
        foreground: palette.secondary,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Built-in Functions",
      scope: "support.function.builtin.python",
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // PYTHON CLASSES
    // ============================================
    {
      name: "Python Class Definitions",
      scope: ["entity.name.type.class.python", "meta.class.python"],
      settings: {
        foreground: palette.primary,
      },
    },
    {
      name: "Python Inheritance",
      scope: "entity.other.inherited-class.python",
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // PYTHON KEYWORDS
    // ============================================
    {
      name: "Python Keywords",
      scope: [
        "keyword.control.python",
        "keyword.control.flow.python",
        "keyword.control.import.python",
        "keyword.control.from.python",
      ],
      settings: {
        foreground: palette.primary,
      },
    },
    {
      name: "Python Operators",
      scope: [
        "keyword.operator.python",
        "keyword.operator.logical.python",
        "keyword.operator.comparison.python",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },

    // ============================================
    // PYTHON DECORATORS
    // ============================================
    {
      name: "Python Decorators",
      scope: [
        "entity.name.function.decorator.python",
        "meta.function.decorator.python",
        "punctuation.definition.decorator.python",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // PYTHON STRINGS
    // ============================================
    {
      name: "Python Strings",
      scope: [
        "string.quoted.single.python",
        "string.quoted.double.python",
        "string.quoted.docstring.python",
      ],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "Python F-Strings",
      scope: ["meta.fstring.python", "string.interpolated.python"],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "Python F-String Expressions",
      scope: [
        "meta.embedded.line.python",
        "meta.fstring.python source.python.embedded",
      ],
      settings: {
        foreground: palette.foreground,
      },
    },

    // ============================================
    // PYTHON TYPES
    // ============================================
    {
      name: "Python Type Hints",
      scope: [
        "meta.function.parameters.python support.type.python",
        "meta.function.return-type.python support.type.python",
      ],
      settings: {
        foreground: palette.secondaryLight,
      },
    },
    {
      name: "Python Built-in Types",
      scope: "support.type.python",
      settings: {
        foreground: palette.secondaryLight,
      },
    },

    // ============================================
    // PYTHON PARAMETERS
    // ============================================
    {
      name: "Python Parameters",
      scope: [
        "variable.parameter.function.python",
        "variable.parameter.function.language.python",
      ],
      settings: {
        foreground: palette.constants,
      },
    },
    {
      name: "Python Self/Cls",
      scope: [
        "variable.parameter.function.language.special.self.python",
        "variable.parameter.function.language.special.cls.python",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // PYTHON CONSTANTS
    // ============================================
    {
      name: "Python Constants",
      scope: ["constant.language.python", "constant.numeric.python"],
      settings: {
        foreground: palette.constants,
      },
    },
  ];
}
