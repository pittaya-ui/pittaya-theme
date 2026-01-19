# Changelog

All notable changes to Pittaya Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.2] - 2026-01-19

### Fixed
- **Control flow keywords now properly colored** — Fixed `if`, `else`, `return`, `for`, `while`, and other control flow keywords to use the signature Pittaya pink (`#ff637e`) instead of appearing in white/gray
- Added specific scope rules for `keyword.control.conditional`, `keyword.control.flow`, `keyword.control.return`, and `keyword.control.loop`
- Reordered tokenColor rules to prioritize control flow keywords over generic keyword.control scope

### Technical Details
- Created new "Control Flow Keywords" rule that takes precedence over the generic "Operator, Misc" rule
- This ensures better visual consistency with other keywords like `const`, `let`, `function`, etc.

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

- **Current Status**: Work in Progress (WIP)
- **Marketplace**: Not yet published
- **Version**: Pre-release development

For the latest updates and to contribute, visit the [GitHub repository](https://github.com).
