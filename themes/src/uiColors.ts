import { ColorPalette } from "./types";

/**
 * UI Colors - Editor, sidebar, terminal, and other UI elements
 */
export function getUIColors(palette: ColorPalette): Record<string, string> {
  return {
    // ============================================
    // EDITOR
    // ============================================
    "editor.background": palette.background,
    "editor.foreground": palette.foreground,
    "editor.lineHighlightBackground": palette.backgroundLight,
    "editor.selectionBackground": palette.selectionBackground,
    "editor.inactiveSelectionBackground": palette.selectionBackgroundLight,
    "editor.wordHighlightBackground": "#ff637e25",
    "editor.wordHighlightStrongBackground": palette.selectionBackground,
    "editor.findMatchBackground": "#ff637e45",
    "editor.findMatchHighlightBackground": "#ff637e25",
    "editorCursor.foreground": palette.primary,
    "editorLineNumber.foreground": palette.foregroundSubtle,
    "editorLineNumber.activeForeground": palette.primary,
    "editorBracketMatch.background": "#8fd46025",
    "editorBracketMatch.border": palette.secondary,
    "editorIndentGuide.background1": palette.borderLight,
    "editorIndentGuide.activeBackground1": "#8fd46040",
    "editorWhitespace.foreground": palette.borderLight,

    // ============================================
    // SIDEBAR
    // ============================================
    "sideBar.background": palette.backgroundDark,
    "sideBar.foreground": palette.foregroundMuted,
    "sideBarSectionHeader.background": palette.background,
    "sideBarSectionHeader.foreground": palette.primary,
    "sideBarTitle.foreground": palette.primary,

    // ============================================
    // ACTIVITY BAR
    // ============================================
    "activityBar.background": palette.backgroundDark,
    "activityBar.foreground": palette.primary,
    "activityBar.inactiveForeground": palette.foregroundSubtle,
    "activityBarBadge.background": palette.primary,
    "activityBarBadge.foreground": "#ffffff",

    // ============================================
    // STATUS BAR
    // ============================================
    "statusBar.background": palette.backgroundDark,
    "statusBar.foreground": palette.foregroundMuted,
    "statusBar.noFolderBackground": palette.backgroundDark,
    "statusBar.debuggingBackground": palette.primary,
    "statusBar.debuggingForeground": "#ffffff",
    "statusBarItem.prominentBackground": palette.primary,
    "statusBarItem.prominentHoverBackground": "#ff4d67",

    // ============================================
    // TITLE BAR
    // ============================================
    "titleBar.activeBackground": palette.backgroundDark,
    "titleBar.activeForeground": palette.foreground,
    "titleBar.inactiveBackground": palette.backgroundDark,
    "titleBar.inactiveForeground": palette.foregroundSubtle,

    // ============================================
    // TABS
    // ============================================
    "tab.activeBackground": palette.background,
    "tab.activeForeground": palette.primary,
    "tab.inactiveBackground": palette.backgroundDark,
    "tab.inactiveForeground": palette.foregroundMuted,
    "tab.border": palette.backgroundDark,
    "tab.activeBorder": palette.primary,
    "tab.activeBorderTop": "#00000000",
    "tab.unfocusedActiveBorder": palette.primary,
    "tab.unfocusedActiveBorderTop": "#00000000",

    // ============================================
    // BREADCRUMB
    // ============================================
    "breadcrumb.foreground": palette.foregroundMuted,
    "breadcrumb.focusForeground": palette.primary,
    "breadcrumb.activeSelectionForeground": palette.primary,

    // ============================================
    // LISTS
    // ============================================
    "list.activeSelectionBackground": "#ff637e20",
    "list.activeSelectionForeground": palette.primary,
    "list.inactiveSelectionBackground": "#ff637e15",
    "list.hoverBackground": palette.backgroundLight,
    "list.focusBackground": "#ff637e20",
    "list.highlightForeground": palette.primary,

    // ============================================
    // BUTTONS
    // ============================================
    "button.background": palette.primary,
    "button.foreground": "#ffffff",
    "button.hoverBackground": "#ff4d67",

    // ============================================
    // INPUTS
    // ============================================
    "input.background": palette.backgroundLight,
    "input.border": palette.border,
    "input.foreground": palette.foreground,
    "input.placeholderForeground": palette.foregroundSubtle,
    "inputOption.activeBorder": palette.primary,
    "inputValidation.errorBorder": palette.error,
    "inputValidation.infoBorder": palette.info,
    "inputValidation.warningBorder": palette.warning,

    // ============================================
    // DROPDOWN
    // ============================================
    "dropdown.background": palette.backgroundLight,
    "dropdown.border": palette.border,
    "dropdown.foreground": palette.foreground,

    // ============================================
    // PANEL
    // ============================================
    "panel.background": palette.backgroundDark,
    "panel.border": palette.border,
    "panelTitle.activeBorder": palette.primary,
    "panelTitle.activeForeground": palette.primary,
    "panelTitle.inactiveForeground": palette.foregroundMuted,

    // ============================================
    // TERMINAL
    // ============================================
    "terminal.foreground": palette.foreground,
    "terminal.ansiBlack": palette.terminalBlack,
    "terminal.ansiRed": palette.terminalRed,
    "terminal.ansiGreen": palette.terminalGreen,
    "terminal.ansiYellow": palette.terminalYellow,
    "terminal.ansiBlue": palette.terminalBlue,
    "terminal.ansiMagenta": palette.terminalMagenta,
    "terminal.ansiCyan": palette.terminalCyan,
    "terminal.ansiWhite": palette.terminalWhite,
    "terminal.ansiBrightBlack": palette.terminalBrightBlack,
    "terminal.ansiBrightRed": palette.terminalBrightRed,
    "terminal.ansiBrightGreen": palette.terminalBrightGreen,
    "terminal.ansiBrightYellow": palette.terminalBrightYellow,
    "terminal.ansiBrightBlue": palette.terminalBrightBlue,
    "terminal.ansiBrightMagenta": palette.terminalBrightMagenta,
    "terminal.ansiBrightCyan": palette.terminalBrightCyan,
    "terminal.ansiBrightWhite": palette.terminalBrightWhite,

    // ============================================
    // GIT DECORATIONS
    // ============================================
    "gitDecoration.modifiedResourceForeground": palette.primary,
    "gitDecoration.deletedResourceForeground": palette.error,
    "gitDecoration.untrackedResourceForeground": palette.success,
    "gitDecoration.ignoredResourceForeground": palette.foregroundSubtle,
    "gitDecoration.conflictingResourceForeground": palette.warning,

    // ============================================
    // NOTIFICATIONS
    // ============================================
    "notificationCenter.border": palette.border,
    "notificationCenterHeader.background": palette.backgroundLight,
    "notifications.background": palette.backgroundLight,
    "notifications.border": palette.border,
    "notificationLink.foreground": palette.primary,

    // ============================================
    // BADGES
    // ============================================
    "badge.background": palette.primary,
    "badge.foreground": "#ffffff",

    // ============================================
    // PROGRESS BAR
    // ============================================
    "progressBar.background": palette.primary,

    // ============================================
    // SCROLLBAR
    // ============================================
    "scrollbar.shadow": "#00000050",
    "scrollbarSlider.background": "#40404050",
    "scrollbarSlider.hoverBackground": "#50505070",
    "scrollbarSlider.activeBackground": "#60606080",

    // ============================================
    // WIDGETS
    // ============================================
    "editorWidget.background": palette.backgroundLight,
    "editorWidget.border": palette.border,
    "editorSuggestWidget.background": palette.backgroundLight,
    "editorSuggestWidget.border": palette.border,
    "editorSuggestWidget.selectedBackground": "#ff637e20",
    "editorSuggestWidget.highlightForeground": palette.primary,
    "editorHoverWidget.background": palette.backgroundLight,
    "editorHoverWidget.border": palette.border,

    // ============================================
    // PEEK VIEW
    // ============================================
    "peekView.border": palette.primary,
    "peekViewEditor.background": palette.background,
    "peekViewResult.background": palette.backgroundDark,
    "peekViewTitle.background": palette.backgroundDark,
    "peekViewTitleLabel.foreground": palette.primary,
  };
}
