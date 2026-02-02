# Contributing to Pittaya Theme

Thank you for your interest in contributing to Pittaya Theme! 🎨

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- VS Code
- Git

### Setup

1. **Fork and clone** the repository:

   ```bash
   git clone https://github.com/pittaya-ui/pittaya-theme.git
   cd pittaya-theme
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build themes:**

   ```bash
   npm run build
   ```

4. **Test in VS Code:**
   - Press `F5` to launch Extension Development Host
   - Open Command Palette (`Ctrl+Shift+P`)
   - Run `Preferences: Color Theme`
   - Select `Pittaya Dark` or `Pittaya Light`

## Architecture Overview

Pittaya Theme uses a **TypeScript-based build system**. Theme files are **generated automatically** from source code.

**Important:** Do NOT edit `pittaya-dark.json` or `pittaya-light.json` directly!

### Project Structure

```
themes/
├── src/                      # ← Edit these files
│   ├── colors/               # Color palettes
│   ├── tokens/               # Language-specific tokens
│   ├── uiColors.ts           # UI element colors
│   ├── semanticTokens.ts     # Semantic highlighting
│   └── build.ts              # Build script
├── pittaya-dark.json         # Generated (don't edit)
└── pittaya-light.json        # Generated (don't edit)
```

See [ARCHITECTURE.md](ARCHITECTURE.md) for detailed documentation.

## Making Changes

### Changing Colors

**❌ Don't:** Edit JSON files directly

**✅ Do:** Edit palette files

```typescript
// themes/src/colors/dark.ts
export const darkPalette: ColorPalette = {
  primary: "#ff637e", // ← Change here
  // ...
};
```

Then run:

```bash
npm run build
```

### Adding Language Support

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
       // Add more token rules...
     ];
   }
   ```

2. **Export from index:**

   ```typescript
   // themes/src/tokens/index.ts
   export { getRustTokens } from "./rust";
   ```

3. **Add to build:**

   ```typescript
   // themes/src/build.ts
   import { getRustTokens } from './tokens';

   function buildTheme(...) {
     const tokenColors = [
       // ...
       ...getRustTokens(palette),
     ];
   }
   ```

4. **Build and test:**
   ```bash
   npm run build
   ```

### Improving Existing Tokens

Example: Enhance CSS support

```typescript
// themes/src/tokens/css.ts
export function getCSSTokens(palette: ColorPalette): TokenColor[] {
  return [
    // Existing rules...
    {
      name: "CSS Grid Properties",
      scope: [
        "support.type.property-name.grid.css",
        "support.type.property-name.grid-template.css",
      ],
      settings: {
        foreground: palette.secondary,
        fontStyle: "italic",
      },
    },
  ];
}
```

## Development Workflow

1. **Create a branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** in `themes/src/`

3. **Build themes:**

   ```bash
   npm run build
   ```

4. **Test thoroughly:**
   - Press `F5` to launch Extension Development Host
   - Test with various file types
   - Check both dark and light themes

5. **Commit changes:**

   ```bash
   git add .
   git commit -m "feat: add support for X language"
   ```

6. **Push and create PR:**
   ```bash
   git push origin feature/your-feature-name
   ```

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

**Examples:**

```
feat: add Rust syntax highlighting
fix: correct CSS pseudo-class colors
docs: update README with new features
refactor: consolidate duplicate token rules
```

## Finding Scope Names

To find the correct scope names for syntax highlighting:

1. **Use Scope Inspector:**
   - Press `Ctrl+Shift+P`
   - Run `Developer: Inspect Editor Tokens and Scopes`
   - Click on code to see scope names

2. **Check TextMate grammars:**
   - Look in VS Code extension folders
   - Search for `.tmLanguage.json` files

3. **Reference resources:**
   - [TextMate Language Grammar](https://macromates.com/manual/en/language_grammars)
   - [VS Code API](https://code.visualstudio.com/api)

## Testing Checklist

Before submitting a PR, verify:

- [ ] `npm run build` completes without errors
- [ ] Dark theme displays correctly
- [ ] Light theme displays correctly
- [ ] No duplicate scope warnings
- [ ] Changes tested with relevant file types
- [ ] Colors match Pittaya theme palette
- [ ] Semantic tokens work correctly
- [ ] No console errors in Extension Development Host

## Code Style

- Use **TypeScript** for all source files
- Follow existing code structure
- Use **descriptive names** for token rules
- **Group related tokens** together
- Add **comments** for complex logic
- Keep color definitions in **palette files only**

## Pull Request Guidelines

### Before Submitting

1. Update documentation if needed
2. Test both themes thoroughly
3. Ensure build passes without warnings
4. Follow commit message convention

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring

## Testing

- [ ] Tested in dark theme
- [ ] Tested in light theme
- [ ] Tested with relevant file types

## Screenshots (if applicable)

Add screenshots showing the changes
```

## Reporting Issues

### Bug Reports

Include:

- VS Code version
- Pittaya Theme version
- Theme variant (dark/light)
- File type experiencing issue
- Screenshot if possible
- Steps to reproduce

### Feature Requests

Include:

- Clear description of the feature
- Use case / motivation
- Example code or screenshots
- Language/framework if relevant

## Questions?

- **Documentation:** See [ARCHITECTURE.md](ARCHITECTURE.md)
- **Issues:** [GitHub Issues](https://github.com/pittaya-ui/pittaya-theme/issues)
- **Discussions:** [GitHub Discussions](https://github.com/pittaya-ui/pittaya-theme/discussions)

---

Thank you for contributing to Pittaya Theme! 💜
