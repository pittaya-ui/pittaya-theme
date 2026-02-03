import { ColorPalette, TokenColor } from "../types";

/**
 * Python specific token colors
 * Enhanced support for Python syntax highlighting
 */
export function getPythonTokens(palette: ColorPalette): TokenColor[] {
  return [
    // ============================================
    // PYTHON FUNCTIONS
    // ============================================
    {
      name: "Python Function Definitions",
      scope: [
        "entity.name.function.python",
        "meta.function.python entity.name.function",
        "support.function.python",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },
    {
      name: "Python Function Calls",
      scope: ["meta.function-call.python", "meta.function-call.generic.python"],
      settings: {
        foreground: palette.secondary,
      },
    },
    {
      name: "Python Magic Methods",
      scope: [
        "support.function.magic.python",
        "entity.name.function.magic.python",
      ],
      settings: {
        foreground: palette.accent,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Built-in Functions",
      scope: [
        "support.function.builtin.python",
        "meta.function-call.python support.function.builtin",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // PYTHON CLASSES
    // ============================================
    {
      name: "Python Class Definitions",
      scope: [
        "entity.name.type.class.python",
        "meta.class.python entity.name.type.class",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Python Inheritance",
      scope: "entity.other.inherited-class.python",
      settings: {
        foreground: palette.secondaryLight,
        fontStyle: "italic",
      },
    },

    // ============================================
    // PYTHON KEYWORDS
    // ============================================
    {
      name: "Python Control Keywords",
      scope: [
        "keyword.control.python",
        "keyword.control.flow.python",
        "keyword.control.conditional.python",
        "keyword.control.loop.python",
        "keyword.control.exception.python",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Python Import Keywords",
      scope: [
        "keyword.control.import.python",
        "keyword.control.import.from.python",
      ],
      settings: {
        foreground: palette.accent,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Storage Keywords",
      scope: [
        "storage.type.function.python",
        "storage.modifier.declaration.python",
        "storage.type.class.python",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Python Operators",
      scope: [
        "keyword.operator.python",
        "keyword.operator.logical.python",
        "keyword.operator.comparison.python",
        "keyword.operator.arithmetic.python",
        "keyword.operator.assignment.python",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },
    {
      name: "Python Word Operators",
      scope: ["keyword.operator.wordlike.python"],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
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
        foreground: palette.accent,
        fontStyle: "italic",
      },
    },

    // ============================================
    // PYTHON STRINGS
    // ============================================
    {
      name: "Python Strings",
      scope: ["string.quoted.single.python", "string.quoted.double.python"],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "Python Docstrings",
      scope: [
        "string.quoted.docstring.multi.python",
        "string.quoted.docstring.raw.python",
      ],
      settings: {
        foreground: palette.comments,
        fontStyle: "italic",
      },
    },
    {
      name: "Python F-Strings",
      scope: [
        "meta.fstring.python",
        "string.interpolated.python",
        "string.quoted.single.python.fstring",
        "string.quoted.double.python.fstring",
      ],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "Python F-String Expressions",
      scope: [
        "meta.embedded.line.python",
        "meta.fstring.python source.python.embedded",
        "meta.interpolation.python",
      ],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Python F-String Braces",
      scope: [
        "punctuation.definition.interpolation.begin.python",
        "punctuation.definition.interpolation.end.python",
      ],
      settings: {
        foreground: palette.primary,
      },
    },
    {
      name: "Python Raw Strings",
      scope: ["string.quoted.raw.python", "storage.type.string.python"],
      settings: {
        foreground: palette.strings,
      },
    },

    // ============================================
    // PYTHON TYPES & ANNOTATIONS
    // ============================================
    {
      name: "Python Type Hints",
      scope: [
        "meta.function.parameters.python support.type.python",
        "meta.function.return-type.python support.type.python",
        "meta.type.annotation.python",
      ],
      settings: {
        foreground: palette.secondaryLight,
      },
    },
    {
      name: "Python Built-in Types",
      scope: ["support.type.python", "support.type.metaclass.python"],
      settings: {
        foreground: palette.secondaryLight,
      },
    },
    {
      name: "Python Type Operators",
      scope: [
        "keyword.operator.type.python",
        "punctuation.separator.annotation.python",
        "punctuation.separator.parameters.python",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },

    // ============================================
    // PYTHON PARAMETERS & VARIABLES
    // ============================================
    {
      name: "Python Parameters",
      scope: [
        "variable.parameter.function.python",
        "variable.parameter.function.language.python",
        "meta.function.parameters.python variable.parameter",
      ],
      settings: {
        foreground: palette.constants,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Self/Cls",
      scope: [
        "variable.parameter.function.language.special.self.python",
        "variable.parameter.function.language.special.cls.python",
        "variable.language.special.self.python",
        "variable.language.special.cls.python",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Variables",
      scope: ["variable.other.python", "meta.indexed-name.python"],
      settings: {
        foreground: palette.foreground,
      },
    },

    // ============================================
    // PYTHON CONSTANTS & LITERALS
    // ============================================
    {
      name: "Python Boolean Constants",
      scope: ["constant.language.boolean.python"],
      settings: {
        foreground: palette.constants,
        fontStyle: "bold",
      },
    },
    {
      name: "Python None/Null",
      scope: ["constant.language.python"],
      settings: {
        foreground: palette.constants,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Numeric Constants",
      scope: [
        "constant.numeric.python",
        "constant.numeric.integer.python",
        "constant.numeric.float.python",
        "constant.numeric.complex.python",
        "constant.numeric.bin.python",
        "constant.numeric.oct.python",
        "constant.numeric.hex.python",
      ],
      settings: {
        foreground: palette.constants,
      },
    },
    {
      name: "Python Escape Characters",
      scope: [
        "constant.character.escape.python",
        "constant.character.escape.newline.python",
      ],
      settings: {
        foreground: palette.accent,
      },
    },

    // ============================================
    // PYTHON IMPORTS & MODULES
    // ============================================
    {
      name: "Python Module Names",
      scope: [
        "meta.import.python entity.name.namespace",
        "meta.import-from.python entity.name.namespace",
        "meta.qualified-name.python",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },
    {
      name: "Python Import Names",
      scope: [
        "meta.import.python variable.other",
        "meta.import-from.python variable.other",
        "meta.import-name.python",
        "meta.generic-name.python",
      ],
      settings: {
        foreground: palette.secondaryLight,
      },
    },
    {
      name: "Python Import Alias",
      scope: [
        "meta.import.python meta.generic-name.python",
        "meta.import-from.python meta.generic-name.python",
        "variable.other.readwrite.alias.python",
      ],
      settings: {
        foreground: palette.foreground,
        fontStyle: "italic",
      },
    },

    // ============================================
    // PYTHON PUNCTUATION
    // ============================================
    {
      name: "Python Parentheses/Brackets",
      scope: [
        "punctuation.definition.arguments.begin.python",
        "punctuation.definition.arguments.end.python",
        "punctuation.definition.list.begin.python",
        "punctuation.definition.list.end.python",
        "punctuation.definition.dict.begin.python",
        "punctuation.definition.dict.end.python",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },
    {
      name: "Python Separators",
      scope: [
        "punctuation.separator.colon.python",
        "punctuation.separator.element.python",
        "punctuation.separator.arguments.python",
      ],
      settings: {
        foreground: palette.punctuation,
      },
    },

    // ============================================
    // PYTHON SPECIAL
    // ============================================
    {
      name: "Python Lambda",
      scope: [
        "keyword.declaration.function.lambda.python",
        "storage.type.function.lambda.python",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Comprehensions",
      scope: ["keyword.control.flow.python.comprehension"],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },
    {
      name: "Python Format Specifiers",
      scope: [
        "storage.type.format.python",
        "constant.character.format.placeholder.other.python",
      ],
      settings: {
        foreground: palette.accent,
      },
    },
  ];
}
