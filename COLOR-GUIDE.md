# 🎨 Pittaya Theme - Color Guide

## Theme Philosophy

**Pittaya Theme** is inspired by the vibrant colors of dragon fruit (pitaya), combining the characteristic pink of the pulp with the refreshing green of the leaves and cacti. This theme has been specially optimized for **React/TypeScript** development, providing maximum readability and a pleasant visual experience during long coding sessions.

---

## Main Color Palette

### 🌑 Background Colors
- **Primary Background**: `#1a1a1a` - Deep dark background that reduces eye strain
- **Line Background**: `#252525` - Subtle highlight for current line
- **Secondary Background**: `#151515` - Used in sidebar and panels

### 🔤 Text Colors
- **Primary Text**: `#e8e8e8` - Clear and readable text
- **Variables**: `#f0f0f0` - Variables with extra emphasis
- **Comments**: `#707070` - Discreet but readable comments

---

## Semantic Colors by Element

### 🌸 Pittaya Pink (`#ff637e`)
**Usage**: Main elements and keywords
- Keywords (`import`, `export`, `const`, `let`, `var`, `function`, `async`, `await`)
- Control flow keywords (`if`, `else`, `return`, `for`, `while`, `do`, `break`, `continue`)
- JSX/HTML Tags (`<div>`, `<Component>`)
- React classes and components
- Storage types
- Decorators
- Editor cursor
- Active tab borders
- Links and interactive elements

**Why?** Pink is the characteristic color of pitaya and serves as the main emphasis color of the theme, drawing attention to important structural elements.

### 🍃 Pittaya Green (`#8fd460`)
**Usage**: Functions, methods and functional expressions
- Function and method names
- Function calls
- React Hooks (`useState`, `useEffect`, etc.)
- Arrow functions
- Template literal expressions
- Bracket matching
- CSS properties
- Active indent guides

**Why?** Inspired by the leaves and cacti of the pitaya plant, green provides a pleasant and natural contrast, perfect for highlighting the functional logic of the code.

### 🌿 Light Green (`#b8e986`)
**Usage**: Types, interfaces and attributes
- TypeScript Types and Interfaces
- HTML/JSX attributes
- React component props
- Type parameters
- Primitive types
- Support types

**Why?** A softer variation of green, ideal for typing elements that need to be visible but not dominant.

### 🌕 Golden Yellow (`#ffcc66`)
**Usage**: Strings and literal texts
- String literals
- Template strings
- Quoted text
- Object keys (in some contexts)

**Why?** Offers excellent contrast with the dark background and is easily distinguishable from other elements, making strings immediately identifiable.

### 🌸 Light Pink (`#ffb3cc`)
**Usage**: Constants and numeric values
- Numbers
- Constants (`true`, `false`, `null`, `undefined`)
- Constants
- Function parameters
- Escape characters

**Why?** A soft variation of the main pink, ideal for literal values that need to stand out without competing with keywords.

### ⚪ Light Gray (`#c5c5c5`)
**Usage**: Punctuation and operators
- General punctuation
- Operators
- Brackets, parentheses, braces
- Separators

**Why?** Keeps the structure visible without distracting from the code logic.

---

## Practical Examples

### TypeScript/React Component

```tsx
import React, { useState } from 'react';
//     ↑ pink      ↑ light green   ↑ green

interface UserProps {
// ↑ pink     ↑ light green
  name: string;
  //    ↑ light green
  age: number;
  //   ↑ light green
}

export function UserCard({ name, age }: UserProps) {
//↑ pink  ↑ pink   ↑ green      ↑ white  ↑ light green
  const [isActive, setIsActive] = useState(true);
  // ↑ pink  ↑ white    ↑ white      ↑ green    ↑ light pink

  if (isActive) {
  // ↑ pink
    return (
    // ↑ pink
      <div className="card">
        <h1>{name}</h1>
        //  ↑ green (expression)
        <p>Age: {age}</p>
      </div>
    );
  }
  return null;
  // ↑ pink
}
```

### CSS/Tailwind

```tsx
<div className="bg-gradient-to-br from-purple-500 to-pink-500">
//   ↑ light green  ↑ yellow (string)
```

### Constants and Configuration

```tsx
const API_BASE_URL = 'https://api.example.com';
//↑ pink ↑ white       ↑ yellow (string)

const MAX_RETRIES = 3;
//                  ↑ light pink (number)

const isEnabled = true;
//                ↑ light pink (boolean)
```

---

## React/TypeScript Optimizations

### ✅ Specific Improvements

1. **JSX Tags**: Vibrant pink for easy identification
2. **Props/Attributes**: Light green to distinguish from content
3. **Hooks**: Strong green to highlight React Hooks
4. **Types**: Light green for TypeScript typing
5. **Template Literals**: Yellow for strings with expressions
6. **Imports/Exports**: Pink with italic for visual emphasis

### 🎯 Focus on Readability

- **High Contrast**: All colors were chosen for maximum contrast with the dark background
- **Clear Differentiation**: Each element type has a distinct color
- **Fatigue Reduction**: Soft but vibrant colors that don't tire the eyes
- **Brackets Matching**: Soft green to facilitate block identification

---

## Comparison: Before vs After

### Before ❌
- Functions: `#a0a0a0` (dull gray, hard to read)
- Strings: `#c0c0c0` (light gray, no contrast)
- Types: `#a0a0a0` (confused with functions)
- Comments: `#606060` (too dark)

### After ✅
- Functions: `#8fd460` (vibrant green, easy to locate)
- Strings: `#ffcc66` (golden yellow, excellent contrast)
- Types: `#b8e986` (light green, distinctive)
- Comments: `#707070` (more readable but discreet)

---

## Usage Tips

1. **React Development**: Green helps quickly identify hooks and functions
2. **TypeScript**: The differentiation between types (light green) and values (other colors) makes the code clearer
3. **CSS/Tailwind**: Properties in green facilitate reading inline styles
4. **Debugging**: Distinct colors help quickly identify different elements during debugging

---

## Design Philosophy

> "A theme should be like pitaya: vibrant and refreshing, yet gentle on the eyes."

Pittaya Theme balances:
- 🎨 **Aesthetics**: Nature-inspired colors
- 👁️ **Ergonomics**: Reduced eye strain
- ⚡ **Productivity**: Quick element identification
- 🌿 **Harmony**: Cohesive and pleasant palette

---

**Made with 💜 for developers who love beautiful and readable code**
