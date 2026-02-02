# 🎨 Pittaya Theme - Color Guide

## Theme Philosophy

**Pittaya Theme** is inspired by the vibrant colors of dragon fruit (pitaya), combining the characteristic pink of the pulp with the refreshing green of the leaves and cacti. This theme has been specially optimized for **React/TypeScript** and **Go** development, providing maximum readability and a pleasant visual experience during long coding sessions.

The theme is now available in **two variants**:
- **Pittaya Dark**: For low-light environments and night coding
- **Pittaya Light**: For bright environments and daytime coding

Both variants maintain the same color identity and visual language, adapted for their respective backgrounds.

---

## Main Color Palette

### 🌑 Dark Theme

#### Background Colors
- **Primary Background**: `#1a1a1a` - Deep dark background that reduces eye strain
- **Line Background**: `#252525` - Subtle highlight for current line
- **Secondary Background**: `#151515` - Used in sidebar and panels

#### Text Colors
- **Primary Text**: `#e8e8e8` - Clear and readable text
- **Variables**: `#f0f0f0` - Variables with extra emphasis
- **Comments**: `#707070` - Discreet but readable comments

### ☀️ Light Theme

#### Background Colors
- **Primary Background**: `#fafafa` - Ultra-light background for bright environments
- **Line Background**: `#f0f0f0` - Subtle highlight for current line
- **Secondary Background**: `#f5f5f5` - Used in sidebar and panels

#### Text Colors
- **Primary Text**: `#2a2a2a` - Dark, clear and readable text
- **Variables**: `#1a1a1a` - Variables with strong contrast
- **Comments**: `#909090` - Balanced gray for readability

---

## Semantic Colors by Element

### 🌸 Pittaya Pink
**Dark**: `#ff637e` | **Light**: `#d91656`

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

### 🍃 Pittaya Green
**Dark**: `#8fd460` | **Light**: `#2f9e44`

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

### 🌿 Light/Dark Green
**Dark**: `#b8e986` | **Light**: `#2b8a3e`

**Usage**: Types, interfaces and attributes
- TypeScript Types and Interfaces
- HTML/JSX attributes
- React component props
- Type parameters
- Primitive types
- Support types

**Why?** A variation of green, ideal for typing elements that need to be visible but not dominant.

### 🌕 Golden Yellow / Orange
**Dark**: `#ffcc66` | **Light**: `#d97900`

**Usage**: Strings and literal texts
- String literals
- Template strings
- Quoted text
- Object keys (in some contexts)

**Why?** Offers excellent contrast with both dark and light backgrounds, making strings immediately identifiable.

### 🌸 Light/Medium Pink
**Dark**: `#ffb3cc` | **Light**: `#c2255c`

**Usage**: Constants and numeric values
- Numbers
- Constants (`true`, `false`, `null`, `undefined`)
- Constants
- Function parameters
- Escape characters

**Why?** A variation of the main pink, ideal for literal values that need to stand out without competing with keywords.

### ⚪ Gray Tones
**Dark**: `#c5c5c5` | **Light**: `#4a4a4a`

**Usage**: Punctuation and operators
- General punctuation
- Operators
- Brackets, parentheses, braces
- Separators

**Why?** Keeps the structure visible without distracting from the code logic.

---

## Practical Examples

> **Note**: The examples below show color names from the **Dark theme**. The Light theme uses adjusted variants of these colors for optimal contrast.

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

## Go Language Support

### 🐹 Go-Specific Optimizations

The theme includes comprehensive support for Go development with carefully chosen colors for Go's unique features:

1. **Package Declarations**: Pink with italic for `package` and `import` statements
2. **Keywords**: Pink for all Go keywords (`func`, `var`, `const`, `type`, etc.)
3. **Function Declarations**: Green for function and method names
4. **Types**: Light green for built-in types (`int`, `string`, `bool`, etc.)
5. **Structs & Interfaces**: Bold pink to emphasize type definitions
6. **Format Verbs**: Green for `Printf` format strings (`%s`, `%d`, etc.)
7. **Concurrency Keywords**: Bold pink for `go`, `defer`, `select`, `chan`
8. **Pointers**: Pink for `*` and `&` operators to highlight memory operations
9. **Variables**: White/black for standard readability
10. **Constants**: Light pink for `const` values and numeric literals
11. **Comments**: Gray italic for both single-line and doc comments

### Go Code Example

```go
package main
//  ↑ pink (italic)

import (
// ↑ pink (italic)
    "fmt"
    // ↑ yellow (string)
)

// User represents a user in the system
// ↑ gray italic (comment)
type User struct {
//   ↑ pink (bold)  ↑ pink
    Name string
    //   ↑ light green (type)
    Age  int
    //   ↑ light green (type)
}

func (u *User) Greet() string {
// ↑ pink ↑ pink  ↑ green   ↑ light green
    return fmt.Sprintf("Hello, I'm %s", u.Name)
    //↑ pink  ↑ green          ↑ green     ↑ white
}

func main() {
// ↑ pink ↑ green
    user := &User{Name: "Alice", Age: 30}
    //        ↑ pink   ↑ pink    ↑ yellow  ↑ light pink
    
    go processUser(user)
    // ↑ pink (bold)
    
    defer cleanup()
    // ↑ pink (bold)
}

const MaxUsers = 100
//↑ pink  ↑ white   ↑ light pink (number)
```

### Go Feature Highlighting

| Feature | Color | Purpose |
|---------|-------|---------|
| `package`, `import` | Pink (italic) | Import/module system |
| `func` | Pink | Function declarations |
| Function Names | Green | Easy identification |
| `struct`, `interface` | Pink (bold) | Type definitions |
| Built-in Types | Light Green | Type system |
| `go`, `defer`, `select` | Pink (bold) | Concurrency primitives |
| `chan` | Pink | Channel operations |
| Pointers (`*`, `&`) | Pink | Memory operations |
| Format Verbs | Green | Printf placeholders |
| Variables | White/Black | Standard code |
| Constants | Light Pink | Immutable values |
| Comments | Gray (italic) | Documentation |

---

## Comparison: Dark vs Light

### Color Adjustments for Light Theme

| Element | Dark Theme | Light Theme | Reason |
|---------|-----------|-------------|--------|
| Background | `#1a1a1a` (deep dark) | `#fafafa` (ultra-light) | Inverted for brightness |
| Foreground | `#e8e8e8` (light) | `#2a2a2a` (dark) | Inverted for contrast |
| Pink Accent | `#ff637e` (vibrant) | `#d91656` (deeper) | Darker for light background contrast |
| Green | `#8fd460` (bright) | `#2f9e44` (darker) | Adjusted for readability |
| Light Green | `#b8e986` (soft) | `#2b8a3e` (darker) | Better contrast on light |
| Strings | `#ffcc66` (yellow) | `#d97900` (orange) | Warmer, more visible on light |
| Constants | `#ffb3cc` (light pink) | `#c2255c` (medium pink) | Balanced for light mode |
| Comments | `#707070` (medium gray) | `#909090` (lighter gray) | Readable but discreet |

### Design Principles for Both Variants

1. **Consistent Identity**: Same color families (pink, green, yellow/orange)
2. **Optimized Contrast**: Each variant adjusted for its background
3. **Visual Hierarchy**: Same elements have the same semantic meaning
4. **Eye Comfort**: Both designed to reduce strain in their respective environments

---

## Comparison: Before Theme vs After Theme

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

1. **React Development**: Green helps quickly identify hooks and functions in both variants
2. **TypeScript**: The differentiation between types (green tones) and values (other colors) makes the code clearer
3. **Go Development**: 
   - Pink keywords make control flow easy to follow
   - Green functions help identify function calls and declarations
   - Bold pink for concurrency primitives (`go`, `defer`, `select`) draws attention to async operations
   - Format verbs in green make string formatting more readable
4. **CSS/Tailwind**: Properties in green facilitate reading inline styles
5. **Debugging**: Distinct colors help quickly identify different elements during debugging
6. **Environment Switching**: 
   - Use **Dark theme** for night coding or low-light environments
   - Use **Light theme** for daytime coding or bright offices
   - Switch easily with `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (Mac)

---

## Design Philosophy

> "A theme should be like pitaya: vibrant and refreshing, yet gentle on the eyes — adaptable to any environment."

Pittaya Theme balances:
- 🎨 **Aesthetics**: Nature-inspired colors
- 👁️ **Ergonomics**: Reduced eye strain in any lighting condition
- ⚡ **Productivity**: Quick element identification
- 🌿 **Harmony**: Cohesive and pleasant palette
- 🌓 **Versatility**: Two variants for different environments

---

**Made with 💜 for developers who love beautiful and readable code**
