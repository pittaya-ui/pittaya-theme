import * as fs from "fs";
import * as path from "path";

import { Theme, ColorPalette } from "./types";
import { darkPalette, lightPalette } from "./colors";
import {
  getBaseTokens,
  getCSSTokens,
  getTypeScriptTokens,
  getPythonTokens,
  getMarkdownTokens,
  getJSONTokens,
} from "./tokens";
import { getSemanticTokenColors } from "./semanticTokens";
import { getUIColors } from "./uiColors";

/**
 * Build a complete theme from a color palette
 */
function buildTheme(
  name: string,
  type: "dark" | "light",
  palette: ColorPalette,
): Theme {
  // Combine all token colors
  const tokenColors = [
    ...getBaseTokens(palette),
    ...getCSSTokens(palette),
    ...getTypeScriptTokens(palette),
    ...getPythonTokens(palette),
    ...getMarkdownTokens(palette),
    ...getJSONTokens(palette),
  ];

  return {
    name,
    type,
    semanticHighlighting: true,
    colors: getUIColors(palette),
    tokenColors,
    semanticTokenColors: getSemanticTokenColors(palette),
  };
}

/**
 * Write theme to JSON file
 */
function writeTheme(theme: Theme, filename: string): void {
  const outputPath = path.join(__dirname, "..", filename);
  const json = JSON.stringify(theme, null, "\t");
  fs.writeFileSync(outputPath, json, "utf-8");
  console.log(`✅ Generated: ${filename}`);
}

/**
 * Validate theme structure
 */
function validateTheme(theme: Theme): void {
  const errors: string[] = [];

  // Check required fields
  if (!theme.name) errors.push("Missing theme name");
  if (!theme.type) errors.push("Missing theme type");
  if (!theme.colors || Object.keys(theme.colors).length === 0) {
    errors.push("Missing UI colors");
  }
  if (!theme.tokenColors || theme.tokenColors.length === 0) {
    errors.push("Missing token colors");
  }

  // Check for duplicate scopes
  const allScopes = new Set<string>();
  theme.tokenColors.forEach((token) => {
    const scopes = Array.isArray(token.scope) ? token.scope : [token.scope];
    scopes.forEach((scope) => {
      if (allScopes.has(scope)) {
        console.warn(`⚠️  Duplicate scope found: ${scope}`);
      }
      allScopes.add(scope);
    });
  });

  if (errors.length > 0) {
    console.error("❌ Validation errors:");
    errors.forEach((e) => console.error(`   - ${e}`));
    process.exit(1);
  }

  console.log(
    `✓ Validated: ${theme.name} (${theme.tokenColors.length} token rules)`,
  );
}

/**
 * Main build function
 */
function main(): void {
  console.log("🎨 Building Pittaya Themes...\n");

  // Build Dark Theme
  const darkTheme = buildTheme("Pittaya Theme", "dark", darkPalette);
  validateTheme(darkTheme);
  writeTheme(darkTheme, "pittaya-dark.json");

  // Build Light Theme
  const lightTheme = buildTheme("Pittaya Theme Light", "light", lightPalette);
  validateTheme(lightTheme);
  writeTheme(lightTheme, "pittaya-light.json");

  console.log("\n🚀 Build complete!");
  console.log(`   Dark theme: ${darkTheme.tokenColors.length} token rules`);
  console.log(`   Light theme: ${lightTheme.tokenColors.length} token rules`);
}

main();
