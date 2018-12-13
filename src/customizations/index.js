const { alpha } = require("dainty-shared").colors;

function getWorkbenchCustomizations(colors, getProperty, getTypeShade) {
  const { blue, neutral, blueLessChroma, green, purple, red, yellow } = colors;

  return {
    "activityBar.background": neutral[getTypeShade(1)],
    "activityBar.dropBackground": neutral[getTypeShade(0)],
    "activityBar.foreground": getProperty("accent1"),
    "activityBar.inactiveForeground": neutral[getTypeShade(12)],
    "activityBarBadge.background": getProperty("accent0"),
    "activityBarBadge.foreground": neutral[40],
    "badge.background": blue[getTypeShade(8)],
    "badge.foreground": neutral[getTypeShade(40)],
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "breadcrumb.background": neutral[getTypeShade(0)],
    "breadcrumb.focusForeground": neutral[getTypeShade(34)],
    "breadcrumb.foreground": neutral[getTypeShade(20)],
    "breadcrumbPicker.background": neutral[getTypeShade(1)],
    "button.background": blue[getTypeShade(8)],
    "button.foreground": neutral[getTypeShade(40)],
    "button.hoverBackground": blue[getTypeShade(10)],
    "debugExceptionWidget.background": "#420b0d",
    "debugExceptionWidget.border": neutral[getTypeShade(2)],
    "debugToolBar.background": neutral[getTypeShade(0)],
    "diffEditor.insertedTextBackground": "#9bb95533",
    "diffEditor.removedTextBackground": "#ff000033",
    "dropdown.background": neutral[getTypeShade(2)],
    "dropdown.border": neutral[getTypeShade(2)],
    "dropdown.foreground": neutral[getTypeShade(34)],
    "editor.background": neutral[getTypeShade(0)],
    "editor.findMatchBackground": alpha(blueLessChroma[getTypeShade(20)], 0.25),
    "editor.findMatchHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.findRangeHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.focusedStackFrameHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.foreground": neutral[getTypeShade(34)],
    "editor.hoverHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.inactiveSelectionBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.125
    ),
    "editor.lineHighlightBackground": neutral[getTypeShade(2)],
    "editor.lineHighlightBorder": neutral[getTypeShade(2)],
    "editor.rangeHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.selectionBackground": alpha(blueLessChroma[getTypeShade(20)], 0.25),
    "editor.selectionHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.125
    ),
    "editor.snippetFinalTabstopHighlightBorder": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.snippetTabstopHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.stackFrameHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "editor.wordHighlightBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.125
    ),
    "editor.wordHighlightStrongBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.125
    ),
    "editorActiveLineNumber.foreground": neutral[getTypeShade(20)],
    "editorBracketMatch.background": alpha(
      blueLessChroma[getTypeShade(20)],
      0.125
    ),
    "editorBracketMatch.border": blue[getTypeShade(24)],
    "editorCodeLens.foreground": "#999999",
    "editorCursor.foreground": getProperty("cursor"),
    "editorError.foreground": red[getTypeShade(22)],
    "editorGroup.border": neutral[getTypeShade(2)],
    "editorGroup.dropBackground": neutral[getTypeShade(0)],
    "editorGroupHeader.noTabsBackground": neutral[getTypeShade(0)],
    "editorGroupHeader.tabsBackground": neutral[getTypeShade(1)],
    "editorGutter.addedBackground": green[getTypeShade(8)],
    "editorGutter.background": neutral[getTypeShade(0)],
    "editorGutter.commentRangeForeground": "#c5c5c5",
    "editorGutter.deletedBackground": red[getTypeShade(8)],
    "editorGutter.modifiedBackground": blueLessChroma[getTypeShade(8)],
    "editorHint.foreground": "#eeeeeeb3",
    "editorHoverWidget.background": neutral[getTypeShade(1)],
    "editorHoverWidget.border": neutral[getTypeShade(2)],
    "editorIndentGuide.activeBackground": neutral[getTypeShade(6)],
    "editorIndentGuide.background": neutral[getTypeShade(4)],
    "editorInfo.foreground": "#008000",
    "editorLineNumber.activeForeground": neutral[getTypeShade(20)],
    "editorLineNumber.foreground": neutral[getTypeShade(12)],
    "editorLink.activeForeground": "#4e94ce",
    "editorMarkerNavigation.background": "#2d2d30",
    "editorMarkerNavigationError.background": red[22],
    "editorMarkerNavigationInfo.background": "#008000",
    "editorMarkerNavigationWarning.background": "#4d9e4d",
    "editorOverviewRuler.addedForeground": green[getTypeShade(16)],
    "editorOverviewRuler.border": neutral[getTypeShade(2)],
    "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    "editorOverviewRuler.commonContentForeground": "#60606066",
    "editorOverviewRuler.currentContentForeground": "#40c8ae80",
    "editorOverviewRuler.deletedForeground": red[getTypeShade(16)],
    "editorOverviewRuler.errorForeground": alpha(red[getTypeShade(22)], 0.75),
    "editorOverviewRuler.findMatchForeground": "#f6b94db3",
    "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
    "editorOverviewRuler.infoForeground": "#121288b3",
    "editorOverviewRuler.modifiedForeground": getTypeShade(blueLessChroma[16]),
    "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
    "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.warningForeground": "#128812b3",
    "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
    "editorPane.background": neutral[getTypeShade(0)],
    "editorRuler.foreground": "#5a5a5a",
    "editorSuggestWidget.background": neutral[getTypeShade(1)],
    "editorSuggestWidget.border": neutral[getTypeShade(2)],
    "editorSuggestWidget.foreground": neutral[getTypeShade(36)],
    "editorSuggestWidget.highlightForeground": neutral[getTypeShade(36)],
    "editorSuggestWidget.selectedBackground": neutral[getTypeShade(3)],
    "editorUnnecessaryCode.opacity": "#000000aa",
    "editorWarning.foreground": "#4d9e4d",
    "editorWhitespace.foreground": "#e3e4e229",
    "editorWidget.background": neutral[getTypeShade(1)],
    "editorWidget.border": neutral[getTypeShade(2)],
    "extensionButton.prominentBackground": "#327e36",
    "extensionButton.prominentForeground": "#ffffff",
    "extensionButton.prominentHoverBackground": "#28632b",
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#6c6cc4",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": neutral[getTypeShade(20)],
    "gitDecoration.modifiedResourceForeground": yellow[getTypeShade(24)],
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": green[getTypeShade(24)],
    "input.background": neutral[getTypeShade(0)],
    "input.foreground": neutral[getTypeShade(34)],
    "input.placeholderForeground": "#a6a6a6",
    "inputOption.activeBorder": "#007acc",
    "inputValidation.errorBackground": "#5a1d1d",
    "inputValidation.errorBorder": "#be1100",
    "inputValidation.infoBackground": "#063b49",
    "inputValidation.infoBorder": "#007acc",
    "inputValidation.warningBackground": "#352a05",
    "inputValidation.warningBorder": "#b89500",
    "list.activeSelectionBackground": neutral[getTypeShade(3)],
    "list.activeSelectionForeground": neutral[getTypeShade(34)],
    "list.dropBackground": neutral[getTypeShade(0)],
    "list.errorForeground": red[22],
    "list.focusBackground": neutral[getTypeShade(3)],
    "list.highlightForeground": neutral[getTypeShade(34)],
    "list.hoverBackground": neutral[getTypeShade(3)],
    "list.inactiveFocusBackground": neutral[getTypeShade(3)],
    "list.inactiveSelectionBackground": neutral[getTypeShade(3)],
    "list.inactiveSelectionForeground": neutral[getTypeShade(34)],
    "list.invalidItemForeground": "#b89500",
    "list.warningForeground": "#4d9e4d",
    "menu.background": neutral[getTypeShade(1)],
    "menu.foreground": neutral[getTypeShade(30)],
    "menu.selectionBackground": neutral[getTypeShade(4)],
    "menu.selectionForeground": neutral[getTypeShade(34)],
    "menu.separatorBackground": neutral[getTypeShade(8)],
    "menubar.selectionBackground": neutral[getTypeShade(4)],
    "menubar.selectionForeground": neutral[getTypeShade(34)],
    "merge.commonContentBackground": "#60606029",
    "merge.commonHeaderBackground": "#60606066",
    "merge.currentContentBackground": "#40c8ae33",
    "merge.currentHeaderBackground": "#40c8ae80",
    "merge.incomingContentBackground": "#40a6ff33",
    "merge.incomingHeaderBackground": "#40a6ff80",
    "notificationCenterHeader.background": neutral[getTypeShade(1)],
    "notificationLink.foreground": getProperty("accent1"),
    "notifications.background": neutral[getTypeShade(1)],
    "notifications.border": neutral[getTypeShade(2)],
    "panel.background": neutral[getTypeShade(1)],
    "panel.border": neutral[getTypeShade(2)],
    "panel.dropBackground": neutral[getTypeShade(0)],
    "panelTitle.activeBorder": blue[24],
    "panelTitle.activeForeground": neutral[getTypeShade(34)],
    "panelTitle.inactiveForeground": neutral[getTypeShade(24)],
    "peekView.border": neutral[getTypeShade(2)],
    "peekViewEditor.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewResult.background": neutral[getTypeShade(1)],
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": neutral[getTypeShade(0)],
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "pickerGroup.border": neutral[getTypeShade(2)],
    "pickerGroup.foreground": "#3794ff",
    "progressBar.background": "#0e70c0",
    "scrollbar.shadow": alpha("#000000", 0.875),
    "scrollbarSlider.activeBackground": alpha(neutral[getTypeShade(10)], 0.75),
    "scrollbarSlider.background": alpha(neutral[getTypeShade(6)], 0.75),
    "scrollbarSlider.hoverBackground": alpha(neutral[getTypeShade(8)], 0.75),
    "settings.checkboxBackground": neutral[getTypeShade(0)],
    "settings.checkboxBorder": neutral[getTypeShade(16)],
    "settings.checkboxForeground": neutral[getTypeShade(34)],
    "settings.dropdownBackground": neutral[getTypeShade(2)],
    "settings.dropdownBorder": neutral[getTypeShade(2)],
    "settings.dropdownForeground": neutral[getTypeShade(34)],
    "settings.dropdownListBorder": neutral[getTypeShade(8)],
    "settings.headerForeground": blueLessChroma[getTypeShade(34)],
    "settings.modifiedItemIndicator": blueLessChroma[getTypeShade(20)],
    "settings.numberInputBackground": neutral[getTypeShade(2)],
    "settings.numberInputForeground": neutral[getTypeShade(34)],
    "settings.textInputBackground": neutral[getTypeShade(2)],
    "settings.textInputForeground": neutral[getTypeShade(34)],
    "sideBar.background": neutral[getTypeShade(1)],
    "sideBar.dropBackground": neutral[getTypeShade(0)],
    "sideBar.foreground": neutral[getTypeShade(24)],
    "sideBarSectionHeader.background": neutral[getTypeShade(1)],
    "sideBarSectionHeader.foreground": neutral[getTypeShade(16)],
    "sideBarTitle.foreground": neutral[getTypeShade(16)],
    "statusBar.background": neutral[getTypeShade(1)],
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.foreground": neutral[getTypeShade(24)],
    "statusBar.noFolderBackground": purple[getTypeShade(2)],
    "statusBar.noFolderForeground": neutral[getTypeShade(28)],
    "statusBarItem.activeBackground": neutral[getTypeShade(6)],
    "statusBarItem.hoverBackground": neutral[getTypeShade(4)],
    "tab.activeBackground": neutral[getTypeShade(1)],
    "tab.activeBorder": getProperty("accent1"),
    "tab.activeForeground": neutral[getTypeShade(34)],
    "tab.activeModifiedBorder": getProperty("accent2"),
    "tab.border": neutral[getTypeShade(1)],
    "tab.inactiveBackground": neutral[getTypeShade(1)],
    "tab.inactiveForeground": neutral[getTypeShade(24)],
    "tab.inactiveModifiedBorder": getProperty("accent2"),
    "tab.unfocusedActiveForeground": neutral[getTypeShade(34)],
    "tab.unfocusedActiveModifiedBorder": getProperty("accent2"),
    "tab.unfocusedInactiveForeground": neutral[getTypeShade(24)],
    "tab.unfocusedInactiveModifiedBorder": getProperty("accent2"),
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
    "terminal.background": neutral[getTypeShade(0)],
    "terminal.border": neutral[getTypeShade(2)],
    "terminal.foreground": neutral[getTypeShade(34)],
    "terminal.selectionBackground": alpha(
      blueLessChroma[getTypeShade(20)],
      0.25
    ),
    "textBlockQuote.background": "#7f7f7f1a",
    "textBlockQuote.border": neutral[getTypeShade(2)],
    "textCodeBlock.background": "#0a0a0a66",
    "textLink.activeForeground": getProperty("accent1"),
    "textLink.foreground": getProperty("accent1"),
    "textPreformat.foreground": purple[getTypeShade(30)],
    "textSeparator.foreground": "#ffffff2e",
    "titleBar.activeBackground": neutral[getTypeShade(1)],
    "titleBar.activeForeground": neutral[getTypeShade(24)],
    "titleBar.inactiveBackground": neutral[getTypeShade(1)],
    "titleBar.inactiveForeground": neutral[getTypeShade(16)],
    "widget.shadow": alpha("#000000", 0.25),
    // "statusBarItem.prominentBackground": "#00ffff",
    // "statusBarItem.prominentHoverBackground": "#ff80ff",
    descriptionForeground: "#ccccccb3",
    errorForeground: red[getTypeShade(22)],
    focusBorder: blueLessChroma[getTypeShade(20)],
    foreground: neutral[getTypeShade(34)]
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
