import { ColorPalette, TokenColor } from "../types";

/**
 * CSS/SCSS/Less specific token colors
 */
export function getCSSTokens(palette: ColorPalette): TokenColor[] {
  return [
    // ============================================
    // CSS PROPERTY NAMES
    // ============================================
    {
      name: "CSS Property Names",
      scope: [
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // CSS SELECTORS
    // ============================================
    {
      name: "CSS Element Selectors",
      scope: [
        "entity.name.tag.css",
        "entity.name.tag.scss",
        "entity.name.tag.less",
      ],
      settings: {
        foreground: palette.primary,
      },
    },
    {
      name: "CSS Class Selectors",
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.scss",
        "entity.other.attribute-name.class.less",
      ],
      settings: {
        foreground: palette.secondaryLight,
      },
    },
    {
      name: "CSS ID Selectors",
      scope: [
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.id.scss",
        "entity.other.attribute-name.id.less",
      ],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "CSS Attribute Selectors",
      scope: [
        "entity.other.attribute-name.attribute.css",
        "meta.attribute-selector.css",
      ],
      settings: {
        foreground: palette.strings,
      },
    },

    // ============================================
    // CSS PSEUDO CLASSES & ELEMENTS
    // ============================================
    {
      name: "CSS Pseudo Classes and Elements",
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "entity.other.attribute-name.pseudo-class.scss",
        "entity.other.attribute-name.pseudo-element.scss",
      ],
      settings: {
        foreground: palette.accent,
      },
    },

    // ============================================
    // CSS VALUES
    // ============================================
    {
      name: "CSS Property Values",
      scope: [
        "support.constant.property-value.css",
        "support.constant.property-value.scss",
        "support.constant.property-value.less",
      ],
      settings: {
        foreground: palette.constants,
      },
    },
    {
      name: "CSS Units",
      scope: [
        "keyword.other.unit.css",
        "keyword.other.unit.scss",
        "keyword.other.unit.less",
        "keyword.other.unit.percentage.css",
        "keyword.other.unit.px.css",
        "keyword.other.unit.em.css",
        "keyword.other.unit.rem.css",
      ],
      settings: {
        foreground: palette.constants,
      },
    },

    // ============================================
    // CSS FUNCTIONS
    // ============================================
    {
      name: "CSS Functions",
      scope: [
        "support.function.css",
        "support.function.scss",
        "support.function.less",
        "support.function.calc.css",
        "support.function.var.css",
      ],
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // CSS VARIABLES
    // ============================================
    {
      name: "CSS Variables",
      scope: [
        "variable.css",
        "variable.scss",
        "variable.argument.css",
        "variable.parameter.css",
      ],
      settings: {
        foreground: palette.info,
      },
    },

    // ============================================
    // CSS AT-RULES (Consolidated)
    // ============================================
    {
      name: "CSS At-Rules",
      scope: [
        "keyword.control.at-rule.css",
        "keyword.control.at-rule.scss",
        "keyword.control.at-rule.less",
        "keyword.control.at-rule.media.css",
        "keyword.control.at-rule.keyframes.css",
        "keyword.control.at-rule.import.css",
        "keyword.control.at-rule.fontface.css",
        "keyword.control.at-rule.font-face.css",
        "keyword.control.at-rule.supports.css",
        "keyword.control.at-rule.container.css",
        "keyword.control.at-rule.charset.css",
        "keyword.control.at-rule.namespace.css",
        "keyword.control.at-rule.page.css",
        "keyword.control.at-rule.layer.css",
      ],
      settings: {
        foreground: palette.primary,
        fontStyle: "italic",
      },
    },

    // ============================================
    // CSS IMPORTANT
    // ============================================
    {
      name: "CSS Important",
      scope: ["keyword.other.important.css", "keyword.other.important.scss"],
      settings: {
        foreground: palette.primary,
        fontStyle: "bold",
      },
    },

    // ============================================
    // CSS COMBINATORS
    // ============================================
    {
      name: "CSS Combinators",
      scope: "keyword.operator.combinator.css",
      settings: {
        foreground: palette.punctuation,
      },
    },
  ];
}
