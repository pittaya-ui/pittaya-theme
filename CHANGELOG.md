# Changelog

All notable changes to Pittaya Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-02

### 🏗️ Major Architecture Refactor

**Breaking Changes:**

- Theme files are now **generated automatically** from TypeScript source code
- Direct JSON editing is **deprecated** — all changes must be made in `themes/src/`

### Added

- **TypeScript-based build system** — Themes are now generated programmatically
- **Modular architecture** with separated concerns:
  - `themes/src/colors/` — Color palette definitions (dark.ts, light.ts)
  - `themes/src/tokens/` — Language-specific token definitions
  - `themes/src/build.ts` — Automated build and validation script
- **Enhanced CSS support** with comprehensive syntax highlighting:
  - CSS selectors (element, class, ID, attribute)
  - Pseudo-classes and pseudo-elements (`:hover`, `::before`, etc.)
  - At-rules (`@media`, `@keyframes`, `@font-face`, `@supports`, `@import`, `@container`)
  - CSS functions (`calc()`, `var()`, `rgb()`, etc.)
  - CSS variables (custom properties)
  - Property values and units
  - `!important` keyword highlighting
- **Build scripts** in package.json:
  - `npm run build` — Generate theme files
  - `npm run validate` — Validate and build themes
- **Automatic validation** that detects:
  - Duplicate scopes
  - Missing required fields
  - Structural inconsistencies
- **TypeScript dependencies** for development:
  - `@types/node`, `ts-node`, `typescript`
- **tsconfig.json** for TypeScript compilation

### Changed

- **Consolidated token rules** — Reduced from 62+ rules with duplications to 91 clean, organized rules
- **Eliminated hardcoded colors** — All colors now referenced from centralized palette (e.g., `palette.primary` instead of `#ff637e` repeated 40+ times)
- **Consistent formatting** — All JSON output is now uniformly formatted via build script
- **Improved maintainability** — Changes to colors now propagate automatically to both themes
- **Simplified JSON levels** — Reduced deeply nested JSON scope patterns
- **Terminal colors aligned** with main theme palette for visual consistency

### Fixed

- **CSS at-rules consistency** — All at-rules (`@media`, `@import`, `@font-face`, `@supports`) now have consistent styling
- **Duplicate scope conflicts** — Eliminated overlapping and conflicting token scopes
- **URL scope interference** — Fixed generic `*url*` scope that was interfering with `@import url()`

### Technical Details

- Themes are built from 6 modular token files: base, CSS, TypeScript, Python, Markdown, JSON
- Color palettes centralized in separate files for easy theme variant creation
- Build system validates theme integrity and warns about potential issues
- All theme files now generated from single source of truth

### Migration Guide

**For contributors:**

1. Install dependencies: `npm install`
2. Make changes in `themes/src/` (not in JSON files directly)
3. Run `npm run build` to generate theme files
4. Test the generated themes in VS Code

**For users:**

- No action needed — themes work exactly as before
- Better consistency and fewer bugs going forward

## [Unreleased]

### Added

- **Open VSX Registry support** — Theme now available on Open VSX for Cursor, Windsurf, VSCodium and other VS Code alternatives
- Dynamic marketplace badges in README (Version, Downloads, Rating, Installs, Open VSX)
- Comprehensive CONTRIBUTING.md guide with detailed instructions for contributors
- Keywords for Cursor, Windsurf, and VSCodium in package.json for better discoverability
- Badges section in package.json for both VS Code Marketplace and Open VSX Registry
- Homepage, bugs URL in package.json

### Changed

- Updated README with clearer installation instructions for multiple IDEs
- Improved documentation structure with separate sections for VS Code and alternative IDEs
- Enhanced footer with links to both marketplaces

## [0.2.0] - 2026-01-21

### 🐍 Added - Extended Python Support

- **Comprehensive Python syntax highlighting** — Added detailed token colors matching the quality of TypeScript/TSX support
  - **Classes** — Bold pink highlighting for class definitions
  - **Functions** — Green color for function definitions and calls
  - **Decorators** — Italic pink for decorators like `@property`, `@staticmethod`, `@dataclass`
  - **Self/cls parameters** — Special italic pink highlighting
  - **Magic methods** — Distinct light pink with italic for `__init__`, `__str__`, etc.
  - **Built-in functions** — Green color for `print()`, `len()`, `range()`, etc.
  - **Built-in types** — Light green for `str`, `int`, `list`, `dict`, etc.
  - **Import statements** — Italic pink for `import` and `from` keywords
  - **Exception keywords** — Highlighted `try`, `except`, `raise`, `finally`
  - **String formatting** — Special color for f-strings and string interpolation
  - **F-string expressions** — Green highlighting for expressions inside f-strings
  - **Type hints** — Light green for PEP 484 type annotations
  - **Lambda expressions** — Pink highlighting for lambda functions
  - **Parameters** — Light pink for function parameters
  - **Constants** — Special color for `True`, `False`, `None`
  - **Operators** — Distinct colors for logical and comparison operators
  - **Docstrings** — Italic gray for documentation strings

### Changed

- Added Python to keywords in `package.json` for better marketplace discoverability
- Updated README to highlight Python support as a key feature
- All Python highlighting maintains consistency with existing TypeScript/TSX color palette

### Technical Details

- Added 20+ Python-specific scope rules to both Dark and Light themes
- Python support follows the same design philosophy as TypeScript/TSX support
- Colors chosen to maintain visual consistency across languages
- All syntax elements use semantic scopes for accurate highlighting

## [0.1.0] - 2026-01-20

### 🎨 Added

- **Pittaya Light Theme** — New light version of the theme with optimized colors for bright environments
  - Maintains the same vibrant Pittaya color identity
  - Optimized contrast for light backgrounds
  - Perfect for daytime coding or well-lit spaces
  - Background: `#fafafa` (ultra-light)
  - Adjusted pink: `#d91656` (darker for better contrast)
  - Adjusted green: `#2f9e44` (darker, optimized for light mode)
  - String color: `#d97900` (orange-yellow for readability)

### Changed

- Updated package description to reflect both dark and light versions
- Added "light" keyword to package.json for better discoverability
- Both themes now available in the theme selector

## [0.0.2] - 2026-01-19

### 🎉 Published

- **Theme is now live on VS Code Marketplace!** — Available at https://marketplace.visualstudio.com/items?itemName=pittaya-org.pittaya-theme
- Published under `pittaya-org` organization
- Renamed theme label to "Pittaya Dark" for future variant support

### Fixed

- **Control flow keywords now properly colored** — Fixed `if`, `else`, `return`, `for`, `while`, and other control flow keywords to use the signature Pittaya pink (`#ff637e`) instead of appearing in white/gray
- Added specific scope rules for `keyword.control.conditional`, `keyword.control.flow`, `keyword.control.return`, and `keyword.control.loop`
- Reordered tokenColor rules to prioritize control flow keywords over generic keyword.control scope

### Added

- **Semantic Token Colors** — Added comprehensive semantic highlighting support for better syntax accuracy
  - Variables: `#f0f0f0` (readonly: `#ffb3cc`)
  - Functions and methods: `#8fd460`
  - Classes: `#ff637e`
  - Interfaces and types: `#b8e986`
  - Parameters: `#ffb3cc`
  - And many more semantic tokens
- **Complete package.json metadata** for marketplace publishing
  - Publisher field
  - Repository links
  - Keywords for better discoverability
  - Gallery banner configuration
  - Build scripts
- **MIT License file** — Official license documentation
- **Extension icon** — Beautiful pitaya-inspired logo (128x128px)
- **Real screenshot** — Added actual theme preview in `assets/screenshot.png`

### Changed

- Updated `.vscodeignore` to optimize package size
- Description now in English for wider reach
- README now displays real screenshot instead of placeholder
- Theme file renamed from `Pittaya Theme-color-theme.json` to `pittaya-dark.json`
- Updated vscode engine requirement to `^1.80.0` for better compatibility

### Technical Details

- Created new "Control Flow Keywords" rule that takes precedence over the generic "Operator, Misc" rule
- This ensures better visual consistency with other keywords like `const`, `let`, `function`, etc.
- Semantic highlighting provides more accurate colors based on code context rather than just syntax

## [Unreleased]

### Added

- Modern README with comprehensive documentation
- Color palette reference table
- Project status indicators
- Local installation instructions
- Future plans roadmap section
- Contributing guidelines
- Enhanced TypeScript/TSX syntax highlighting
- Specific React/JSX component styling
- React Hooks highlighting
- TypeScript interfaces and types support
- Green accent color palette inspired by dragon fruit leaves

### Changed

- Updated tab styling for better visual clarity
- Active tab now features bottom border only (removed top border)
- Tab border color set to signature Pittaya color (`#ff637e`)
- Improved active/inactive tab contrast
- Enhanced unfocused tab behavior
- **Major readability improvements for TSX/React development**
- Functions now use vibrant green (`#8fd460`) for better visibility
- String colors changed to warm yellow (`#ffcc66`) for improved contrast
- Types and attributes use light green (`#b8e986`)
- Comments lightened to `#707070` for better readability
- Editor foreground brightened to `#e8e8e8`
- Variables now use `#f0f0f0` for clearer distinction
- Bracket matching uses green highlights for better visual feedback
- CSS properties now use green accent colors
- Punctuation and operators improved with `#c5c5c5`

### UI Improvements

- `tab.activeBorderTop` set to transparent for cleaner look
- `tab.unfocusedActiveBorder` maintains consistency
- `tab.unfocusedActiveBorderTop` set to transparent
- Bracket match background uses green accent (`#8fd46025`)
- Bracket match border changed to green (`#8fd460`)
- Indent guides now use green active color
- Better contrast for line highlights (`#252525`)
- Improved selection backgrounds with better opacity

## [0.0.1] - Initial Development

### Added

- Initial theme structure
- Dark color scheme with `#1a1a1a` background
- Signature Pittaya accent color (`#ff637e`)
- Complete syntax highlighting for major languages
- Editor UI theming
- Sidebar and activity bar styling
- Terminal color scheme
- Git decoration colors
- Status bar theming
- Panel and tab theming
- Badge and progress bar colors
- Input and dropdown styling
- Notification styling
- Peek view theming
- Editor widget styling
- Markdown syntax support
- JSON key level highlighting

### Theme Colors

- Primary background: `#1a1a1a`
- Editor foreground: `#e8e8e8` (improved from `#e0e0e0`)
- Primary accent: `#ff637e` (keywords, tags)
- Secondary accent (green): `#8fd460` (functions, methods)
- Tertiary accent (light green): `#b8e986` (types, attributes)
- Strings: `#ffcc66`
- Constants: `#ff9eb3`
- Comments: `#707070` (improved from `#606060`)

---

## Notes

- **Current Status**: ✅ Published on VS Code Marketplace
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=pittaya-org.pittaya-theme
- **Install Command**: `code --install-extension pittaya-org.pittaya-theme`

For the latest updates and to contribute, visit the [GitHub repository](https://github.com/pittaya-ui/pittaya-theme).
