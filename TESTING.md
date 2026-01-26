# 🧪 Testing Pittaya Theme

## Quick Test

1. **Reload VS Code window**
   - Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
   - Type "Developer: Reload Window"
   - Press Enter

2. **Activate the theme**
   - Press `Ctrl + K`, `Ctrl + T` (Windows/Linux) or `Cmd + K`, `Cmd + T` (Mac)
   - Or go to `File > Preferences > Color Theme`
   - Select **"Pittaya Dark"** or **"Pittaya Light"**

3. **Test with your own files**
   - Open any TypeScript/React file in your project
   - Observe the improved syntax highlighting
   - Try switching between Dark and Light variants to see which you prefer

## Theme Variants

### Pittaya Dark
- Best for: Low-light environments, night coding, reducing eye strain
- Background: `#1a1a1a` (deep dark)
- Primary accent: `#ff637e` (vibrant pink)

### Pittaya Light
- Best for: Bright environments, daytime coding, well-lit offices
- Background: `#fafafa` (ultra-light)
- Primary accent: `#d91656` (deeper pink for contrast)

## What to Look For

> **Note**: The following color references are for the **Dark theme**. The Light theme uses darker variants of the same colors for proper contrast on light backgrounds.

### ✅ Green Elements (Pitaya Leaves)

Check if the following elements are in **vibrant green**:
- Dark: `#8fd460` | Light: `#2f9e44`
- [ ] Function names (e.g., `UserCard`, `fetchUserData`, `formatDate`)
- [ ] React Hooks (e.g., `useState`, `useEffect`)
- [ ] Function calls
- [ ] JSX expressions (`{email}`, `{name}`)
- [ ] Arrow functions (`=>`)

### ✅ Light Green Elements (Types/Attributes)

Check if the following elements are in **light/darker green**:
- Dark: `#b8e986` | Light: `#2b8a3e`
- [ ] TypeScript types (e.g., `User`, `UserCardProps`)
- [ ] JSX attributes (e.g., `className`, `onClick`, `disabled`)
- [ ] Type keywords (e.g., `interface`, `type`)
- [ ] Component props

### ✅ Pink Elements (Main Pittaya)

Check if the following elements are in **pink**:
- Dark: `#ff637e` | Light: `#d91656`
- [ ] Keywords (`import`, `export`, `const`, `let`, `async`, `await`)
- [ ] Control flow keywords (`if`, `else`, `return`, `for`, `while`, `do`, `break`, `continue`)
- [ ] JSX tags (e.g., `<motion.div>`, `<button>`)
- [ ] Class and component names

### ✅ Yellow/Orange Elements (Strings)

Check if the following elements are in **yellow/orange**:
- Dark: `#ffcc66` | Light: `#d97900`
- [ ] Regular strings (e.g., `'Loading...'`)
- [ ] Template strings (e.g., `` `${API_BASE_URL}/users/${email}` ``)
- [ ] CSS classes (e.g., `'bg-gradient-to-br'`)

### ✅ Other Elements

- [ ] **Numbers and booleans**: 
  - Dark: `#ffb3cc` | Light: `#c2255c`
- [ ] **Comments**: 
  - Dark: `#707070` | Light: `#909090` - should be readable but discreet
- [ ] **Variables**: 
  - Dark: `#f0f0f0` | Light: `#1a1a1a`
- [ ] **Brackets matching**: Green background when you position cursor on `{`, `}`, `[`, `]`, `(`, `)`

## Visual Comparison

### Dark Theme

#### Before Improvements ❌
- Functions in dull gray - hard to distinguish
- Strings in gray - no contrast
- Types invisible
- Comments too dark

#### After Improvements ✅
- Functions in vibrant green - easy location
- Strings in yellow - high contrast
- Types in light green - clearly visible
- Comments readable but discreet

### Light Theme

#### Benefits ✨
- Perfect for bright environments and daytime coding
- Maintains the same color identity as the dark theme
- Optimized contrast for light backgrounds
- Reduced glare while keeping excellent readability

## Testing in Different Files

1. **TypeScript Files** (`.ts`, `.tsx`)
   - Check interfaces and types
   - Test generics
   - Observe imports and exports

2. **React Files** (`.jsx`, `.tsx`)
   - JSX components should have tags in pink
   - Props in light green
   - Hooks in vibrant green

3. **Go Files** (`.go`)
   - Package declarations in pink (italic)
   - Function names in green
   - Struct and interface names in bold pink
   - Built-in types in light green
   - Concurrency keywords (`go`, `defer`, `select`) in bold pink
   - Pointers (`*`, `&`) in pink

4. **Python Files** (`.py`)
   - Function and class names with proper colors
   - Decorators in italic pink
   - Type hints in light green

5. **CSS/SCSS Files**
   - Properties should be in green
   - Values in their respective colors

## Go-Specific Testing

### What to Test in Go Files

Open the `test.go` file included in this extension and verify:

#### ✅ Package & Import (Pink Italic)
```go
package main  // "package" should be pink italic
import "fmt"  // "import" should be pink italic
```

#### ✅ Keywords (Pink)
- [ ] `func`, `var`, `const`, `type`
- [ ] `struct`, `interface`, `map`, `chan`
- [ ] Control flow: `if`, `else`, `for`, `range`, `switch`, `case`, `default`
- [ ] `return`, `break`, `continue`

#### ✅ Function Names (Green)
- [ ] Function declarations: `func NewUser(...)` - "NewUser" in green
- [ ] Method declarations: `func (u *User) GetInfo()` - "GetInfo" in green (italic)
- [ ] Function calls: `fmt.Println()` - "Println" in green

#### ✅ Types (Light Green)
- [ ] Built-in types: `int`, `string`, `bool`, `error`
- [ ] Type declarations after keywords

#### ✅ Struct & Interface Names (Bold Pink)
- [ ] `type User struct` - "User" in bold pink
- [ ] `type UserService interface` - "UserService" in bold pink

#### ✅ Concurrency (Bold Pink)
- [ ] `go processUser(...)` - "go" in bold pink
- [ ] `defer wg.Done()` - "defer" in bold pink
- [ ] `select { case ... }` - "select" in bold pink

#### ✅ Operators & Pointers (Pink)
- [ ] Pointer operators: `*User`, `&user` - `*` and `&` in pink
- [ ] Channel operator: `<-ch`

#### ✅ Strings (Yellow/Orange)
- [ ] Regular strings: `"Hello, World"`
- [ ] Raw strings: `` `multi-line string` ``
- [ ] Format verbs in green: `fmt.Sprintf("User: %s", name)` - `%s` in green

#### ✅ Constants & Numbers (Light Pink)
- [ ] Numeric literals: `100`, `3.14`
- [ ] Boolean values: `true`, `false`
- [ ] Constant declarations

#### ✅ Comments (Gray Italic)
- [ ] Single-line comments: `// This is a comment`
- [ ] Block comments: `/* Multi-line comment */`
- [ ] Doc comments: `// User represents...`

## Known Issues?

If something isn't as expected:

1. Make sure you've reloaded the window
2. Check if the correct theme variant is active ("Pittaya Dark" or "Pittaya Light")
3. Open the theme folder and verify files were saved correctly
4. Try switching between variants to see if the issue persists

## Feedback

Test especially:
- 🎯 **Readability**: Can you read the code easily in both variants?
- 🎨 **Contrast**: Do the colors stand out enough?
- 👁️ **Eye Strain**: Are the colors comfortable for long sessions?
- ⚡ **Productivity**: Can you identify elements quickly?
- 🌓 **Switching**: Does switching between Dark and Light feel natural?

---

**Color guide**: `COLOR-GUIDE.md` contains details about each color and its usage
