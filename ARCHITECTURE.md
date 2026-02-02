# Architecture Documentation

## Overview

Pittaya Theme uses a **TypeScript-based build system** to generate VS Code theme files automatically. This architecture ensures consistency, maintainability, and eliminates manual JSON editing errors.

## Philosophy

Instead of manually editing massive JSON files with repeated color codes, we:

1. **Define colors once** in centralized palettes
2. **Organize tokens by language** in modular files
3. **Generate themes automatically** via build script
4. **Validate consistency** with automated checks

## Project Structure

```
pittaya-theme/
├── themes/
│   ├── src/                          # Source code (edit these)
│   │   ├── types.ts                  # TypeScript type definitions
│   │   ├── colors/
│   │   │   ├── index.ts              # Color exports
│   │   │   ├── dark.ts               # Dark theme palette
│   │   │   └── light.ts              # Light theme palette
│   │   ├── tokens/
│   │   │   ├── index.ts              # Token exports
│   │   │   ├── base.ts               # Generic tokens
│   │   │   ├── css.ts                # CSS/SCSS/Less
│   │   │   ├── typescript.ts         # TypeScript/JSX
│   │   │   ├── python.ts             # Python
│   │   │   ├── markdown.ts           # Markdown
│   │   │   └── json.ts               # JSON
│   │   ├── uiColors.ts               # VS Code UI elements
│   │   ├── semanticTokens.ts         # Semantic highlighting
│   │   └── build.ts                  # Build script
│   ├── pittaya-dark.json             # Generated (don't edit)
│   └── pittaya-light.json            # Generated (don't edit)
├── package.json
├── tsconfig.json
└── README.md
```

## Core Concepts

### 1. Color Palettes

**Location:** `themes/src/colors/`

Each theme variant has a dedicated palette file that defines all colors in one place.

**Example:** `colors/dark.ts`

```typescript
export const darkPalette: ColorPalette = {
  // Brand colors
  primary: "#ff637e", // Pink - Keywords, classes
  primaryLight: "#ffb3cc", // Light pink - Constants
  secondary: "#8fd460", // Green - Functions
  secondaryLight: "#b8e986", // Light green - Types

  // Semantic colors
  strings: "#ffcc66", // Yellow
  comments: "#707070", // Gray
  punctuation: "#c5c5c5", // Light gray

  // UI colors
  background: "#1a1a1a",
  foreground: "#e8e8e8",
  // ...
};
```

**Benefits:**

- ✅ Change `primary` color → affects keywords, tags, classes, cursor, tabs, etc.
- ✅ No more hunting for `#ff637e` across 1000+ lines
- ✅ Guaranteed consistency between themes

### 2. Token Colors by Language

**Location:** `themes/src/tokens/`

Each file exports a function that returns token rules for a specific language.

**Structure:**

```typescript
export function getCSSTokens(palette: ColorPalette): TokenColor[] {
  return [
    {
      name: "CSS Class Selectors",
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.scss",
      ],
      settings: {
        foreground: palette.secondaryLight, // ← Uses palette
      },
    },
    // ...
  ];
}
```

**Files:**

- **`base.ts`** — Generic tokens (comments, strings, keywords, operators, etc.)
- **`css.ts`** — CSS selectors, pseudo-classes, at-rules, properties, functions
- **`typescript.ts`** — JSX components, TypeScript types, decorators, arrow functions
- **`python.ts`** — Decorators, type hints, f-strings, magic methods
- **`markdown.ts`** — Headings, bold, italic, links, code blocks
- **`json.ts`** — JSON key levels with alternating colors

### 3. UI Colors

**Location:** `themes/src/uiColors.ts`

Defines colors for VS Code interface elements (editor, sidebar, tabs, etc.)

**Sections:**

- Editor (background, selection, line highlight, cursor)
- Sidebar (background, foreground, section headers)
- Activity Bar (icons, badges)
- Status Bar
- Title Bar
- Tabs
- Breadcrumbs
- Lists
- Buttons & Inputs
- Panels
- Terminal (ANSI colors aligned with theme)
- Git Decorations
- Notifications
- Badges
- Progress Bar
- Scrollbar
- Widgets (autocomplete, hover)
- Peek View

### 4. Semantic Tokens

**Location:** `themes/src/semanticTokens.ts`

Provides advanced syntax highlighting based on semantic analysis.

```typescript
export function getSemanticTokenColors(palette: ColorPalette) {
  return {
    variable: { foreground: palette.foreground },
    "variable.readonly": { foreground: palette.constants },
    function: { foreground: palette.secondary },
    class: { foreground: palette.primary },
    // ...
  };
}
```

### 5. Build System

**Location:** `themes/src/build.ts`

Orchestrates theme generation and validation.

**Process:**

1. Import color palettes (dark, light)
2. Combine all token rules from each language
3. Add UI colors and semantic tokens
4. Validate for duplicates and missing fields
5. Write formatted JSON files

**Commands:**

```bash
npm run build      # Generate themes
npm run validate   # Validate + generate
```

## Build Flow

```
┌─────────────────────┐
│  Dark Palette       │
│  (colors/dark.ts)   │
└──────────┬──────────┘
           │
           ├──> Base Tokens
           ├──> CSS Tokens
           ├──> TypeScript Tokens
           ├──> Python Tokens       ┌───────────────────┐
           ├──> Markdown Tokens ───>│  buildTheme()     │
           ├──> JSON Tokens         │  (build.ts)       │
           ├──> UI Colors           └────────┬──────────┘
           └──> Semantic Tokens              │
                                             │
                                   validateTheme()
                                             │
                                   ┌─────────▼──────────┐
                                   │ pittaya-dark.json  │
                                   └────────────────────┘
```

Same process for Light theme with `lightPalette`.

## Type System

**Location:** `themes/src/types.ts`

```typescript
export interface ColorPalette {
  primary: string;
  secondary: string;
  // ... all color definitions
}

export interface TokenColor {
  name: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export interface Theme {
  name: string;
  type: "dark" | "light";
  semanticHighlighting: boolean;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
  semanticTokenColors: Record<string, SemanticTokenColor>;
}
```

**Benefits:**

- ✅ Type safety during development
- ✅ IntelliSense for color names
- ✅ Compile-time error detection

## Validation

The build script performs several checks:

### Required Fields

- Theme name, type, colors, tokenColors must exist

### Duplicate Scope Detection

```typescript
const allScopes = new Set<string>();
theme.tokenColors.forEach((token) => {
  if (allScopes.has(scope)) {
    console.warn(`⚠️  Duplicate scope: ${scope}`);
  }
});
```

Warns about conflicting rules that might cause unpredictable behavior.

## How to Make Changes

### Change a Color

**❌ Before (manual JSON editing):**
Find and replace `#ff637e` in 40+ locations across 2 files

**✅ Now:**

```typescript
// themes/src/colors/dark.ts
export const darkPalette: ColorPalette = {
  primary: "#ff0066", // ← Change here only
  // ...
};
```

```bash
npm run build
```

### Add New Language Support

1. **Create token file:**

   ```typescript
   // themes/src/tokens/rust.ts
   import { ColorPalette, TokenColor } from "../types";

   export function getRustTokens(palette: ColorPalette): TokenColor[] {
     return [
       {
         name: "Rust Structs",
         scope: "entity.name.type.struct.rust",
         settings: { foreground: palette.primary },
       },
       // ...
     ];
   }
   ```

2. **Add to build:**

   ```typescript
   // themes/src/build.ts
   import { getRustTokens } from './tokens/rust';

   function buildTheme(...) {
     const tokenColors = [
       ...getBaseTokens(palette),
       ...getRustTokens(palette),  // ← Add here
       // ...
     ];
   }
   ```

3. **Build:**
   ```bash
   npm run build
   ```

### Add New Theme Variant

1. **Create palette:**

   ```typescript
   // themes/src/colors/midnight.ts
   export const midnightPalette: ColorPalette = {
     primary: "#9d7cbf", // Purple
     background: "#0a0a0f", // Almost black
     // ...
   };
   ```

2. **Add to build:**

   ```typescript
   // themes/src/build.ts
   import { midnightPalette } from "./colors/midnight";

   function main() {
     // ...
     const midnightTheme = buildTheme(
       "Pittaya Midnight",
       "dark",
       midnightPalette,
     );
     validateTheme(midnightTheme);
     writeTheme(midnightTheme, "pittaya-midnight.json");
   }
   ```

3. **Register in package.json:**
   ```json
   {
     "contributes": {
       "themes": [
         {
           "label": "Pittaya Midnight",
           "uiTheme": "vs-dark",
           "path": "./themes/pittaya-midnight.json"
         }
       ]
     }
   }
   ```

## Dependencies

```json
{
  "devDependencies": {
    "@types/node": "^20.0.0", // Node.js types
    "ts-node": "^10.9.2", // Execute TypeScript
    "typescript": "^5.0.0" // TypeScript compiler
  }
}
```

## Testing

After building:

1. Press `F5` in VS Code to launch Extension Development Host
2. Open Command Palette (`Ctrl+Shift+P`)
3. Run `Preferences: Color Theme`
4. Select `Pittaya Dark` or `Pittaya Light`
5. Test various file types (CSS, TypeScript, Python, etc.)

## Performance

**Build time:** ~1-2 seconds

**Generated file size:**

- Dark theme: ~50KB
- Light theme: ~50KB

**Token rules:** 91 (down from 62+ with duplications removed)

## Advantages Over Manual JSON Editing

| Manual JSON                               | Build System                         |
| ----------------------------------------- | ------------------------------------ |
| ❌ Color `#ff637e` repeated 40+ times     | ✅ Defined once as `palette.primary` |
| ❌ 1000+ line JSON files hard to navigate | ✅ Modular files by concern          |
| ❌ Easy to create duplicates              | ✅ Validation detects conflicts      |
| ❌ Inconsistent formatting                | ✅ Automated formatting              |
| ❌ Hard to sync dark/light themes         | ✅ Same code, different palette      |
| ❌ No type safety                         | ✅ TypeScript types catch errors     |
| ❌ Manual testing required                | ✅ Build validates structure         |

## Future Enhancements

- [ ] Theme preview generation
- [ ] Color contrast checker (WCAG compliance)
- [ ] Interactive theme builder CLI
- [ ] Hot reload during development
- [ ] Unit tests for token rules
- [ ] Documentation generator from source

## Resources

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Scopes](https://macromates.com/manual/en/language_grammars)
- [Semantic Highlighting Guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)

---

**Questions or suggestions?** Open an issue on [GitHub](https://github.com/pittaya-ui/pittaya-theme/issues)
