import { ColorPalette, TokenColor } from "../types";

/**
 * Markdown specific token colors
 */
export function getMarkdownTokens(palette: ColorPalette): TokenColor[] {
  return [
    // ============================================
    // MARKDOWN PLAIN TEXT
    // ============================================
    {
      name: "Markdown Plain",
      scope: [
        "text.html.markdown",
        "punctuation.definition.list_item.markdown",
      ],
      settings: {
        foreground: palette.foreground,
      },
    },

    // ============================================
    // MARKDOWN HEADINGS
    // ============================================
    {
      name: "Markdown Headings",
      scope: [
        "markup.heading",
        "entity.name.section.markdown",
        "markup.heading.markdown punctuation.definition.heading.markdown",
      ],
      settings: {
        foreground: palette.primary,
      },
    },

    // ============================================
    // MARKDOWN TEXT STYLES
    // ============================================
    {
      name: "Markdown Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: {
        foreground: palette.strings,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown Italic",
      scope: "markup.italic",
      settings: {
        foreground: palette.accent,
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown Bold-Italic",
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
      ],
      settings: {
        foreground: palette.strings,
        fontStyle: "bold italic",
      },
    },
    {
      name: "Markdown Underline",
      scope: "markup.underline",
      settings: {
        foreground: palette.strings,
        fontStyle: "underline",
      },
    },
    {
      name: "Markdown Strikethrough",
      scope: "markup.strikethrough",
      settings: {
        foreground: palette.foregroundMuted,
        fontStyle: "strikethrough",
      },
    },

    // ============================================
    // MARKDOWN QUOTES
    // ============================================
    {
      name: "Markdown Blockquote",
      scope: "markup.quote punctuation.definition.blockquote.markdown",
      settings: {
        foreground: palette.comments,
      },
    },
    {
      name: "Markdown Quote",
      scope: "markup.quote",
      settings: {
        fontStyle: "italic",
      },
    },

    // ============================================
    // MARKDOWN LINKS
    // ============================================
    {
      name: "Markdown Link",
      scope: "string.other.link.title.markdown",
      settings: {
        foreground: palette.info,
      },
    },
    {
      name: "Markdown Link Description",
      scope: "string.other.link.description.title.markdown",
      settings: {
        foreground: palette.info,
      },
    },
    {
      name: "Markdown Link Anchor",
      scope: "constant.other.reference.link.markdown",
      settings: {
        foreground: palette.strings,
      },
    },

    // ============================================
    // MARKDOWN CODE
    // ============================================
    {
      name: "Markdown Inline Code",
      scope: "text.html.markdown markup.inline.raw.markdown",
      settings: {
        foreground: palette.secondary,
      },
    },
    {
      name: "Markdown Inline Code Punctuation",
      scope:
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
      settings: {
        foreground: palette.comments,
      },
    },
    {
      name: "Markdown Fenced Code Block",
      scope: [
        "markup.fenced_code.block.markdown",
        "punctuation.definition.markdown",
      ],
      settings: {
        foreground: palette.strings,
      },
    },
    {
      name: "Markdown Fenced Code Block Language",
      scope: "fenced_code.block.language.markdown",
      settings: {
        foreground: palette.secondary,
      },
    },

    // ============================================
    // MARKDOWN SEPARATORS
    // ============================================
    {
      name: "Markdown Separator",
      scope: "meta.separator",
      settings: {
        foreground: palette.comments,
        fontStyle: "bold",
      },
    },
  ];
}
