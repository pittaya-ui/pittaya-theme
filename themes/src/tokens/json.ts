import { ColorPalette, TokenColor } from "../types";

/**
 * JSON specific token colors - Simplified to 3 alternating colors
 */
export function getJSONTokens(palette: ColorPalette): TokenColor[] {
  // Colors cycle through 3 levels for better visual hierarchy
  const level1 = palette.primary;
  const level2 = palette.primaryLight;
  const level3 = palette.foregroundMuted;

  return [
    // Level 0
    {
      name: "JSON Key - Level 0",
      scope:
        "source.json meta.structure.dictionary.json support.type.property-name.json",
      settings: {
        foreground: level1,
      },
    },
    // Level 1
    {
      name: "JSON Key - Level 1",
      scope:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      settings: {
        foreground: level2,
      },
    },
    // Level 2
    {
      name: "JSON Key - Level 2",
      scope:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      settings: {
        foreground: level3,
      },
    },
    // Level 3 (back to level1)
    {
      name: "JSON Key - Level 3",
      scope:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      settings: {
        foreground: level1,
      },
    },
    // Level 4 (back to level2)
    {
      name: "JSON Key - Level 4",
      scope:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      settings: {
        foreground: level2,
      },
    },
    // Level 5 (back to level3)
    {
      name: "JSON Key - Level 5",
      scope:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      settings: {
        foreground: level3,
      },
    },
  ];
}
