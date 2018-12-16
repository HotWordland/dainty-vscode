function getWorkbenchCustomizations(
  getColor,
  getProperty,
  getTypeShade,
  getTypeValue
) {
  return {
    "activityBar.background": getColor("neutral", getTypeShade(1)),
    "activityBar.dropBackground": getColor("neutral", getTypeShade(0)),
    "activityBar.foreground": getColor("accent", getTypeShade(11)),
    "activityBar.inactiveForeground": getColor("neutral", getTypeShade(6)),
    "activityBarBadge.background": getColor("accent", getTypeShade(11), 0.75),
    "activityBarBadge.foreground": getColor("neutral", 16),
    "badge.background": getColor("accent", getTypeShade(11), 0.75),
    "badge.foreground": getColor("neutral", 16),
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "breadcrumb.background": getColor("neutral", getTypeShade(0)),
    "breadcrumb.focusForeground": getColor("neutral", getTypeShade(14)),
    "breadcrumb.foreground": getColor("neutral", getTypeShade(8)),
    "breadcrumbPicker.background": getColor("neutral", getTypeShade(1)),
    "button.background": getColor("accent", getTypeShade(8)),
    "button.foreground": getColor("neutral", 16),
    "button.hoverBackground": getColor("accent", getTypeShade(9)),
    "debugExceptionWidget.background": "#420b0d",
    "debugExceptionWidget.border": getColor("neutral", getTypeShade(1)),
    "debugToolBar.background": getColor("neutral", getTypeShade(0)),
    "diffEditor.insertedTextBackground": "#9bb95533",
    "diffEditor.removedTextBackground": "#ff000033",
    "dropdown.background": getColor("neutral", getTypeShade(1)),
    "dropdown.border": getColor("neutral", getTypeShade(1)),
    "dropdown.foreground": getColor("neutral", getTypeShade(14)),
    "editor.background": getColor("neutral", getTypeShade(0)),
    "editor.findMatchBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.findMatchHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.findRangeHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.focusedStackFrameHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.foreground": getColor("neutral", getTypeShade(14)),
    "editor.hoverHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.inactiveSelectionBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.125
    ),
    "editor.lineHighlightBackground": getColor("neutral", getTypeShade(1)),
    "editor.lineHighlightBorder": getColor("neutral", getTypeShade(1)),
    "editor.rangeHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.selectionBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.selectionHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.125
    ),
    "editor.snippetFinalTabstopHighlightBorder": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.snippetTabstopHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.stackFrameHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "editor.wordHighlightBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.125
    ),
    "editor.wordHighlightStrongBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.125
    ),
    "editorActiveLineNumber.foreground": getColor("neutral", getTypeShade(8)),
    "editorBracketMatch.background": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.125
    ),
    "editorBracketMatch.border": getColor("blue", getTypeShade(10)),
    "editorCodeLens.foreground": "#999999",
    "editorCursor.foreground": getProperty("cursor"),
    "editorError.foreground": getColor("red", getTypeShade(9)),
    "editorGroup.border": getColor("neutral", getTypeShade(1)),
    "editorGroup.dropBackground": getColor("neutral", getTypeShade(0)),
    "editorGroupHeader.noTabsBackground": getColor("neutral", getTypeShade(0)),
    "editorGroupHeader.tabsBackground": getColor("neutral", getTypeShade(1)),
    "editorGutter.addedBackground": getColor("green", getTypeShade(3)),
    "editorGutter.background": getColor("neutral", getTypeShade(0)),
    "editorGutter.commentRangeForeground": "#c5c5c5",
    "editorGutter.deletedBackground": getColor("red", getTypeShade(3)),
    "editorGutter.modifiedBackground": getColor(
      "blueLessChroma",
      getTypeShade(3)
    ),
    "editorHint.foreground": "#eeeeeeb3",
    "editorHoverWidget.background": getColor("neutral", getTypeShade(1)),
    "editorHoverWidget.border": getColor("neutral", getTypeShade(1)),
    "editorIndentGuide.activeBackground": getColor("neutral", getTypeShade(3)),
    "editorIndentGuide.background": getColor("neutral", getTypeShade(2)),
    "editorInfo.foreground": "#008000",
    "editorLineNumber.activeForeground": getColor("neutral", getTypeShade(8)),
    "editorLineNumber.foreground": getColor("neutral", getTypeShade(6)),
    "editorLink.activeForeground": "#4e94ce",
    "editorMarkerNavigation.background": "#2d2d30",
    "editorMarkerNavigationError.background": getColor("red", getTypeShade(9)),
    "editorMarkerNavigationInfo.background": "#008000",
    "editorMarkerNavigationWarning.background": "#4d9e4d",
    "editorOverviewRuler.addedForeground": getColor("green", getTypeShade(6)),
    "editorOverviewRuler.border": getColor("neutral", getTypeShade(1)),
    "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    "editorOverviewRuler.commonContentForeground": "#60606066",
    "editorOverviewRuler.currentContentForeground": "#40c8ae80",
    "editorOverviewRuler.deletedForeground": getColor("red", getTypeShade(6)),
    "editorOverviewRuler.errorForeground": getColor(
      "red",
      getTypeShade(9),
      0.75
    ),
    "editorOverviewRuler.findMatchForeground": "#f6b94db3",
    "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
    "editorOverviewRuler.infoForeground": "#121288b3",
    "editorOverviewRuler.modifiedForeground": getColor(
      "blueLessChroma",
      getTypeShade(6)
    ),
    "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
    "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.warningForeground": "#128812b3",
    "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
    "editorPane.background": getColor("neutral", getTypeShade(0)),
    "editorRuler.foreground": "#5a5a5a",
    "editorSuggestWidget.background": getColor("neutral", getTypeShade(1)),
    "editorSuggestWidget.border": getColor("neutral", getTypeShade(1)),
    "editorSuggestWidget.foreground": getColor("neutral", getTypeShade(14)),
    "editorSuggestWidget.highlightForeground": getColor(
      "neutral",
      getTypeShade(14)
    ),
    "editorSuggestWidget.selectedBackground": getColor(
      "neutral",
      getTypeShade(2)
    ),
    "editorUnnecessaryCode.opacity": "#000000aa",
    "editorWarning.foreground": "#4d9e4d",
    "editorWhitespace.foreground": "#e3e4e229",
    "editorWidget.background": getColor("neutral", getTypeShade(1)),
    "editorWidget.border": getColor("neutral", getTypeShade(1)),
    "extensionButton.prominentBackground": "#327e36",
    "extensionButton.prominentForeground": "#ffffff",
    "extensionButton.prominentHoverBackground": "#28632b",
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#6c6cc4",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": getColor(
      "neutral",
      getTypeShade(8)
    ),
    "gitDecoration.modifiedResourceForeground": getColor(
      "yellow",
      getTypeShade(10)
    ),
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": getColor(
      "green",
      getTypeShade(10)
    ),
    "input.background": getColor("neutral", getTypeShade(0)),
    "input.foreground": getColor("neutral", getTypeShade(14)),
    "input.placeholderForeground": "#a6a6a6",
    "inputOption.activeBorder": "#007acc",
    "inputValidation.errorBackground": "#5a1d1d",
    "inputValidation.errorBorder": "#be1100",
    "inputValidation.infoBackground": "#063b49",
    "inputValidation.infoBorder": "#007acc",
    "inputValidation.warningBackground": "#352a05",
    "inputValidation.warningBorder": "#b89500",
    "list.activeSelectionBackground": getColor("neutral", getTypeShade(2)),
    "list.activeSelectionForeground": getColor("neutral", getTypeShade(14)),
    "list.dropBackground": getColor("neutral", getTypeShade(0)),
    "list.errorForeground": getColor("red", getTypeShade(9)),
    "list.focusBackground": getColor("neutral", getTypeShade(2)),
    "list.highlightForeground": getColor("neutral", getTypeShade(14)),
    "list.hoverBackground": getColor("neutral", getTypeShade(2)),
    "list.inactiveFocusBackground": getColor("neutral", getTypeShade(2)),
    "list.inactiveSelectionBackground": getColor("neutral", getTypeShade(2)),
    "list.inactiveSelectionForeground": getColor("neutral", getTypeShade(14)),
    "list.invalidItemForeground": "#b89500",
    "list.warningForeground": "#4d9e4d",
    "menu.background": getColor("neutral", getTypeShade(1)),
    "menu.foreground": getColor("neutral", getTypeShade(12)),
    "menu.selectionBackground": getColor("neutral", getTypeShade(2)),
    "menu.selectionForeground": getColor("neutral", getTypeShade(14)),
    "menu.separatorBackground": getColor("neutral", getTypeShade(4)),
    "menubar.selectionBackground": getColor("neutral", getTypeShade(2)),
    "menubar.selectionForeground": getColor("neutral", getTypeShade(14)),
    "merge.commonContentBackground": "#60606029",
    "merge.commonHeaderBackground": "#60606066",
    "merge.currentContentBackground": "#40c8ae33",
    "merge.currentHeaderBackground": "#40c8ae80",
    "merge.incomingContentBackground": "#40a6ff33",
    "merge.incomingHeaderBackground": "#40a6ff80",
    "notificationCenterHeader.background": getColor("neutral", getTypeShade(1)),
    "notificationLink.foreground": getColor("accent", getTypeShade(11)),
    "notifications.background": getColor("neutral", getTypeShade(1)),
    "notifications.border": getColor("neutral", getTypeShade(1)),
    "panel.background": getColor("neutral", getTypeShade(1)),
    "panel.border": getColor("neutral", getTypeShade(1)),
    "panel.dropBackground": getColor("neutral", getTypeShade(0)),
    "panelTitle.activeBorder": getColor("accent", getTypeShade(11)),
    "panelTitle.activeForeground": getColor("neutral", getTypeShade(14)),
    "panelTitle.inactiveForeground": getColor("neutral", getTypeShade(10)),
    "peekView.border": getColor("neutral", getTypeShade(1)),
    "peekViewEditor.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewResult.background": getColor("neutral", getTypeShade(1)),
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": getColor("neutral", getTypeShade(0)),
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "pickerGroup.border": getColor("neutral", getTypeShade(1)),
    "pickerGroup.foreground": "#3794ff",
    "progressBar.background": "#0e70c0",
    "scrollbar.shadow": getColor("neutral", getTypeShade(0, 8), 1, {
      lightnessStart: getTypeValue(-10, 0)
    }),
    "scrollbarSlider.activeBackground": getColor(
      "neutral",
      getTypeShade(6),
      0.75
    ),
    "scrollbarSlider.background": getColor("neutral", getTypeShade(4), 0.75),
    "scrollbarSlider.hoverBackground": getColor(
      "neutral",
      getTypeShade(5),
      0.75
    ),
    "settings.checkboxBackground": getColor("neutral", getTypeShade(0)),
    "settings.checkboxBorder": getColor("neutral", getTypeShade(6)),
    "settings.checkboxForeground": getColor("neutral", getTypeShade(14)),
    "settings.dropdownBackground": getColor("neutral", getTypeShade(1)),
    "settings.dropdownBorder": getColor("neutral", getTypeShade(1)),
    "settings.dropdownForeground": getColor("neutral", getTypeShade(14)),
    "settings.dropdownListBorder": getColor("neutral", getTypeShade(3)),
    "settings.headerForeground": getColor("blueLessChroma", getTypeShade(14)),
    "settings.modifiedItemIndicator": getColor(
      "blueLessChroma",
      getTypeShade(8)
    ),
    "settings.numberInputBackground": getColor("neutral", getTypeShade(1)),
    "settings.numberInputForeground": getColor("neutral", getTypeShade(14)),
    "settings.textInputBackground": getColor("neutral", getTypeShade(1)),
    "settings.textInputForeground": getColor("neutral", getTypeShade(14)),
    "sideBar.background": getColor("neutral", getTypeShade(1)),
    "sideBar.dropBackground": getColor("neutral", getTypeShade(0)),
    "sideBar.foreground": getColor("neutral", getTypeShade(10)),
    "sideBarSectionHeader.background": getColor("neutral", getTypeShade(1)),
    "sideBarSectionHeader.foreground": getColor("neutral", getTypeShade(6)),
    "sideBarTitle.foreground": getColor("neutral", getTypeShade(6)),
    "statusBar.background": getColor("neutral", getTypeShade(1)),
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.foreground": getColor("neutral", getTypeShade(10)),
    "statusBar.noFolderBackground": getColor("purple", getTypeShade(2)),
    "statusBar.noFolderForeground": getColor("neutral", getTypeShade(11)),
    "statusBarItem.activeBackground": getColor("neutral", getTypeShade(2)),
    "statusBarItem.hoverBackground": getColor("neutral", getTypeShade(2)),
    "tab.activeBackground": getColor("neutral", getTypeShade(1)),
    "tab.activeBorder": getColor("accent", getTypeShade(11)),
    "tab.activeForeground": getColor("neutral", getTypeShade(14)),
    "tab.activeModifiedBorder": getColor("accent", getTypeShade(11), 0.75),
    "tab.border": getColor("neutral", getTypeShade(1)),
    "tab.inactiveBackground": getColor("neutral", getTypeShade(1)),
    "tab.inactiveForeground": getColor("neutral", getTypeShade(10)),
    "tab.inactiveModifiedBorder": getColor("accent", getTypeShade(11), 0.75),
    "tab.unfocusedActiveForeground": getColor("neutral", getTypeShade(14)),
    "tab.unfocusedActiveModifiedBorder": getColor(
      "accent",
      getTypeShade(11),
      0.5
    ),
    "tab.unfocusedInactiveForeground": getColor("neutral", getTypeShade(10)),
    "tab.unfocusedInactiveModifiedBorder": getColor(
      "accent",
      getTypeShade(11),
      0.5
    ),
    "terminal.ansiBlack": getProperty("terminal.black"),
    "terminal.ansiBlue": getProperty("terminal.blue"),
    "terminal.ansiBrightBlack": getProperty("terminal.brightBlack"),
    "terminal.ansiBrightBlue": getProperty("terminal.brightBlue"),
    "terminal.ansiBrightCyan": getProperty("terminal.brightCyan"),
    "terminal.ansiBrightGreen": getProperty("terminal.brightGreen"),
    "terminal.ansiBrightMagenta": getProperty("terminal.brightMagenta"),
    "terminal.ansiBrightRed": getProperty("terminal.brightRed"),
    "terminal.ansiBrightWhite": getProperty("terminal.brightWhite"),
    "terminal.ansiBrightYellow": getProperty("terminal.brightYellow"),
    "terminal.ansiCyan": getProperty("terminal.cyan"),
    "terminal.ansiGreen": getProperty("terminal.green"),
    "terminal.ansiMagenta": getProperty("terminal.magenta"),
    "terminal.ansiRed": getProperty("terminal.red"),
    "terminal.ansiWhite": getProperty("terminal.white"),
    "terminal.ansiYellow": getProperty("terminal.yellow"),
    "terminal.background": getColor("neutral", getTypeShade(0)),
    "terminal.border": getColor("neutral", getTypeShade(1)),
    "terminal.foreground": getColor("neutral", getTypeShade(14)),
    "terminal.selectionBackground": getColor(
      "blueLessChroma",
      getTypeShade(8),
      0.25
    ),
    "textBlockQuote.background": "#7f7f7f1a",
    "textBlockQuote.border": getColor("neutral", getTypeShade(1)),
    "textCodeBlock.background": "#0a0a0a66",
    "textLink.activeForeground": getColor("accent", getTypeShade(11)),
    "textLink.foreground": getColor("accent", getTypeShade(11)),
    "textPreformat.foreground": getColor("purple", getTypeShade(12)),
    "textSeparator.foreground": "#ffffff2e",
    "titleBar.activeBackground": getColor("neutral", getTypeShade(1)),
    "titleBar.activeForeground": getColor("neutral", getTypeShade(10)),
    "titleBar.inactiveBackground": getColor("neutral", getTypeShade(1)),
    "titleBar.inactiveForeground": getColor("neutral", getTypeShade(6)),
    "widget.shadow": getColor("neutral", getTypeShade(0, 13), 1, {
      lightnessStart: getTypeValue(-5, 0)
    }),
    // "statusBarItem.prominentBackground": "#00ffff",
    // "statusBarItem.prominentHoverBackground": "#ff80ff",
    descriptionForeground: "#ccccccb3",
    errorForeground: getColor("red", getTypeShade(9)),
    focusBorder: getColor("blueLessChroma", getTypeShade(8)),
    foreground: getColor("neutral", getTypeShade(14))
  };
}

function getTokenCustomizations(getProperty) {
  return [
    {
      scope: ["meta.embedded", "source.groovy.embedded"],
      settings: {
        foreground: getProperty("token.variable")
      }
    },
    {
      scope: "emphasis",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      scope: "strong",
      settings: {
        fontStyle: "bold"
      }
    },
    {
      scope: "header",
      settings: {
        foreground: "#000080"
      }
    },
    {
      scope: "comment",
      settings: {
        foreground: getProperty("token.comment")
      }
    },
    {
      scope: "constant.language",
      settings: {
        foreground: getProperty("token.literal")
      }
    },
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: getProperty("token.number")
      }
    },
    {
      scope: "constant.regexp",
      settings: {
        foreground: getProperty("token.regex")
      }
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: getProperty("token.tag")
      }
    },
    {
      scope: "entity.name.tag.css",
      settings: {
        foreground: getProperty("token.otherType")
      }
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: getProperty("token.attributeName")
      }
    },
    {
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.mixin.css",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.parent-selector.css",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "source.css.less entity.other.attribute-name.id",
        "entity.other.attribute-name.attribute.scss",
        "entity.other.attribute-name.scss"
      ],
      settings: {
        foreground: getProperty("token.attributeName")
      }
    },
    {
      scope: "invalid",
      settings: {
        foreground: "#f44747"
      }
    },
    {
      scope: "markup.underline",
      settings: {
        fontStyle: "underline"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "markup.heading",
      settings: {
        fontStyle: "bold",
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: getProperty("token.number")
      }
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "punctuation.definition.quote.begin.markdown",
      settings: {
        foreground: "#6A9955"
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#6796e6"
      }
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      name: "brackets of XML/HTML tags",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: getProperty("token.punctuation")
      }
    },
    {
      scope: "meta.preprocessor",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "meta.preprocessor.string",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      scope: "meta.preprocessor.numeric",
      settings: {
        foreground: getProperty("token.number")
      }
    },
    {
      scope: "meta.structure.dictionary.key.python",
      settings: {
        foreground: getProperty("token.property")
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "storage",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "storage.type",
      settings: {
        foreground: getProperty("token.storageType")
      }
    },
    {
      scope: "storage.modifier",
      settings: {
        foreground: getProperty("token.storageType")
      }
    },
    {
      scope: "string",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      scope: "string.tag",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      scope: "string.value",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      settings: {
        foreground: getProperty("token.operator")
      }
    },
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: "#d4d4d4"
      }
    },
    {
      scope: [
        "support.type.vendored.property-name",
        "support.type.property-name",
        "variable.css",
        "variable.scss",
        "variable.other.less",
        "source.coffee.embedded"
      ],
      settings: {
        foreground: getProperty("token.variable")
      }
    },
    {
      scope: "keyword",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: getProperty("token.operator")
      }
    },
    {
      scope: [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.cast",
        "keyword.operator.sizeof",
        "keyword.operator.instanceof",
        "keyword.operator.logical.python"
      ],
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: getProperty("token.number")
      }
    },
    {
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php"
      ],
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: getProperty("token.supportFunction")
      }
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: getProperty("token.number")
      }
    },
    {
      name: "coloring of the Java import and package identifiers",
      scope: [
        "storage.modifier.import.java",
        "variable.language.wildcard.java",
        "storage.modifier.package.java"
      ],
      settings: {
        foreground: "#d4d4d4"
      }
    },
    {
      name: "this.self",
      scope: "variable.language",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      name: "Function declarations",
      scope: [
        "entity.name.function",
        "support.function",
        "support.constant.handlebars"
      ],
      settings: {
        foreground: getProperty("token.function")
      }
    },
    {
      name: "Types declaration and references",
      scope: [
        "meta.return-type",
        "support.class",
        "support.type",
        "entity.name.type",
        "entity.name.class",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.cs",
        "storage.type.generic.cs",
        "storage.type.modifier.cs",
        "storage.type.variable.cs",
        "storage.type.annotation.java",
        "storage.type.generic.java",
        "storage.type.java",
        "storage.type.object.array.java",
        "storage.type.primitive.array.java",
        "storage.type.primitive.java",
        "storage.type.token.java",
        "storage.type.groovy",
        "storage.type.annotation.groovy",
        "storage.type.parameters.groovy",
        "storage.type.generic.groovy",
        "storage.type.object.array.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.groovy"
      ],
      settings: {
        foreground: getProperty("token.type")
      }
    },
    {
      name: "Types declaration and references, TS grammar specific",
      scope: [
        "meta.type.cast.expr",
        "meta.type.new.expr",
        "support.constant.math",
        "support.constant.dom",
        "support.constant.json",
        "entity.other.inherited-class"
      ],
      settings: {
        foreground: getProperty("token.type")
      }
    },
    {
      name: "Control flow keywords",
      scope: "keyword.control",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      name: "Variable and parameter name",
      scope: [
        "variable",
        "meta.definition.variable.name",
        "support.variable",
        "entity.name.variable"
      ],
      settings: {
        foreground: getProperty("token.variable")
      }
    },
    {
      name: "Object keys, TS grammar specific",
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: getProperty("token.property")
      }
    },
    {
      name: "CSS property value",
      scope: [
        "support.constant.property-value",
        "support.constant.font-name",
        "support.constant.media-type",
        "support.constant.media",
        "constant.other.color.rgb-value",
        "constant.other.rgb-value",
        "support.constant.color"
      ],
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      name: "Regular expression groups",
      scope: [
        "punctuation.definition.group.regexp",
        "punctuation.definition.group.assertion.regexp",
        "punctuation.definition.character-class.regexp",
        "punctuation.character.set.begin.regexp",
        "punctuation.character.set.end.regexp",
        "keyword.operator.negation.regexp",
        "support.other.parenthesis.regexp"
      ],
      settings: {
        foreground: getProperty("token.punctuation")
      }
    },
    {
      scope: [
        "constant.character.character-class.regexp",
        "constant.other.character-class.set.regexp",
        "constant.other.character-class.regexp",
        "constant.character.set.regexp"
      ],
      settings: {
        foreground: getProperty("token.regex")
      }
    },
    {
      scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
      settings: {
        foreground: getProperty("token.operator")
      }
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: getProperty("token.number")
      }
    },
    {
      scope: "constant.character",
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: getProperty("token.punctuation")
      }
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#6796e6"
      }
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#cd9731"
      }
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#f44747"
      }
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#b267e6"
      }
    }
  ].concat([
    {
      scope: "string.quoted.double.html",
      settings: {
        foreground: getProperty("token.string")
      }
    },
    {
      scope: "string.template",
      settings: {
        foreground: getProperty("token.stringTemplate")
      }
    },
    {
      scope: ["storage.type.function"],
      settings: {
        foreground: getProperty("token.storageTypeFunction")
      }
    },
    {
      scope: ["support.class.component.js"],
      settings: {
        foreground: getProperty("token.jsxTag")
      }
    },
    {
      scope: ["variable.parameter"],
      settings: {
        foreground: getProperty("token.parameter")
      }
    },
    {
      scope: ["variable.other.property"],
      settings: {
        foreground: getProperty("token.variableProperty")
      }
    },
    {
      name: "Function declarations",
      scope: ["support.function", "support.constant.handlebars"],
      settings: {
        foreground: getProperty("token.supportFunction")
      }
    },
    {
      scope: ["support.type", "support.class", "support.constant.math"],
      settings: {
        foreground: getProperty("token.supportType")
      }
    },
    {
      scope: [
        "support.type.vendored.property-name",
        "support.type.property-name"
      ],
      settings: {
        foreground: getProperty("token.property")
      }
    },
    {
      name: "Function declarations",
      scope: ["support.function"],
      settings: {
        foreground: getProperty("token.supportFunction")
      }
    },
    {
      scope: ["variable.other.constant"],
      settings: {
        foreground: getProperty("token.constant")
      }
    },
    {
      scope: ["meta.brace.round.js", "meta.brace.square.js", "punctuation"],
      settings: {
        foreground: getProperty("token.punctuation")
      }
    },
    {
      scope: ["support.type.property-name.json"],
      settings: {
        foreground: getProperty("token.property")
      }
    },
    {
      scope: [
        "storage.type.function.arrow.js",
        "storage.type.function.arrow.ts",
        "storage.type.function.arrow.tsx"
      ],
      settings: {
        foreground: getProperty("token.operator")
      }
    },
    {
      scope: [
        "punctuation.definition.keyword.css",
        "punctuation.definition.directive.c",
        "punctuation.definition.heading.markdown"
      ],
      settings: {
        foreground: getProperty("token.keyword")
      }
    },
    {
      scope: ["entity.name.type.class", "entity.name.type.module"],
      settings: {
        foreground: getProperty("token.type")
      }
    },
    {
      scope: [
        "punctuation.definition.comment.python",
        "punctuation.definition.comment.js",
        "punctuation.definition.comment.cpp",
        "punctuation.definition.comment.begin.css",
        "punctuation.definition.comment.end.css",
        "punctuation.definition.list.begin.markdown"
      ],
      settings: {
        foreground: getProperty("token.comment")
      }
    },
    {
      scope: ["markup.heading"],
      settings: {
        fontStyle: "normal"
      }
    }
  ]);
}

module.exports = {
  getWorkbenchCustomizations,
  getTokenCustomizations
};
