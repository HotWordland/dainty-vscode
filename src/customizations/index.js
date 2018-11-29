const { alpha } = require("dainty-shared").colors;

function getWorkbenchCustomizations(colors, getTerminalColor) {
  const {
    blue,
    neutral,
    blueLessChroma,
    blueMoreChroma,
    green,
    purple,
    red,
    yellow
  } = colors;

  return {
    "activityBar.background": neutral[1],
    "activityBar.dropBackground": neutral[0],
    "activityBar.foreground": blue[24],
    "activityBar.inactiveForeground": neutral[12],
    "activityBarBadge.background": blueMoreChroma[12],
    "activityBarBadge.foreground": neutral[39],
    "badge.background": blue[8],
    "badge.foreground": neutral[39],
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "breadcrumb.background": neutral[0],
    "breadcrumb.focusForeground": neutral[34],
    "breadcrumb.foreground": neutral[20],
    "breadcrumbPicker.background": neutral[1],
    "button.background": blue[8],
    "button.foreground": neutral[39],
    "button.hoverBackground": blue[10],
    "debugExceptionWidget.background": "#420b0d",
    "debugExceptionWidget.border": neutral[2],
    "debugToolBar.background": neutral[0],
    "diffEditor.insertedTextBackground": "#9bb95533",
    "diffEditor.removedTextBackground": "#ff000033",
    "dropdown.background": neutral[2],
    "dropdown.border": neutral[2],
    "dropdown.foreground": neutral[34],
    "editor.background": neutral[0],
    "editor.findMatchBackground": alpha(blueLessChroma[20], 0.25),
    "editor.findMatchHighlightBackground": alpha(blueLessChroma[20], 0.25),
    "editor.findRangeHighlightBackground": alpha(blueLessChroma[20], 0.25),
    "editor.focusedStackFrameHighlightBackground": alpha(
      blueLessChroma[20],
      0.25
    ),
    "editor.foreground": neutral[34],
    "editor.hoverHighlightBackground": alpha(blueLessChroma[20], 0.25),
    "editor.inactiveSelectionBackground": alpha(blueLessChroma[20], 0.125),
    "editor.lineHighlightBackground": neutral[2],
    "editor.lineHighlightBorder": neutral[2],
    "editor.rangeHighlightBackground": alpha(blueLessChroma[20], 0.25),
    "editor.selectionBackground": alpha(blueLessChroma[20], 0.25),
    "editor.selectionHighlightBackground": alpha(blueLessChroma[20], 0.125),
    "editor.snippetFinalTabstopHighlightBorder": alpha(
      blueLessChroma[20],
      0.25
    ),
    "editor.snippetTabstopHighlightBackground": alpha(blueLessChroma[20], 0.25),
    "editor.stackFrameHighlightBackground": alpha(blueLessChroma[20], 0.25),
    "editor.wordHighlightBackground": alpha(blueLessChroma[20], 0.125),
    "editor.wordHighlightStrongBackground": alpha(blueLessChroma[20], 0.125),
    "editorActiveLineNumber.foreground": neutral[20],
    "editorBracketMatch.background": alpha(blueLessChroma[20], 0.125),
    "editorBracketMatch.border": blue[24],
    "editorCodeLens.foreground": "#999999",
    "editorCursor.foreground": neutral[28],
    "editorError.foreground": red[22],
    "editorGroup.border": neutral[2],
    "editorGroup.dropBackground": neutral[0],
    "editorGroupHeader.noTabsBackground": neutral[0],
    "editorGroupHeader.tabsBackground": neutral[1],
    "editorGutter.addedBackground": green[8],
    "editorGutter.background": neutral[0],
    "editorGutter.commentRangeForeground": "#c5c5c5",
    "editorGutter.deletedBackground": red[8],
    "editorGutter.modifiedBackground": blueLessChroma[8],
    "editorHint.foreground": "#eeeeeeb3",
    "editorHoverWidget.background": neutral[1],
    "editorHoverWidget.border": neutral[2],
    "editorIndentGuide.activeBackground": neutral[6],
    "editorIndentGuide.background": neutral[4],
    "editorInfo.foreground": "#008000",
    "editorLineNumber.activeForeground": neutral[20],
    "editorLineNumber.foreground": neutral[12],
    "editorLink.activeForeground": "#4e94ce",
    "editorMarkerNavigation.background": "#2d2d30",
    "editorMarkerNavigationError.background": red[22],
    "editorMarkerNavigationInfo.background": "#008000",
    "editorMarkerNavigationWarning.background": "#4d9e4d",
    "editorOverviewRuler.addedForeground": green[16],
    "editorOverviewRuler.border": neutral[2],
    "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    "editorOverviewRuler.commonContentForeground": "#60606066",
    "editorOverviewRuler.currentContentForeground": "#40c8ae80",
    "editorOverviewRuler.deletedForeground": red[16],
    "editorOverviewRuler.errorForeground": alpha(red[22], 0.75),
    "editorOverviewRuler.findMatchForeground": "#f6b94db3",
    "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
    "editorOverviewRuler.infoForeground": "#121288b3",
    "editorOverviewRuler.modifiedForeground": blueLessChroma[16],
    "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
    "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.warningForeground": "#128812b3",
    "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
    "editorPane.background": neutral[0],
    "editorRuler.foreground": "#5a5a5a",
    "editorSuggestWidget.background": neutral[1],
    "editorSuggestWidget.border": neutral[2],
    "editorSuggestWidget.foreground": "#d4d4d4",
    "editorSuggestWidget.highlightForeground": "#0097fb",
    "editorSuggestWidget.selectedBackground": "#062f4a",
    "editorUnnecessaryCode.opacity": "#000000aa",
    "editorWarning.foreground": "#4d9e4d",
    "editorWhitespace.foreground": "#e3e4e229",
    "editorWidget.background": neutral[1],
    "editorWidget.border": neutral[2],
    "extensionButton.prominentBackground": "#327e36",
    "extensionButton.prominentForeground": "#ffffff",
    "extensionButton.prominentHoverBackground": "#28632b",
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#6c6cc4",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": neutral[20],
    "gitDecoration.modifiedResourceForeground": yellow[24],
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": green[24],
    "input.background": neutral[0],
    "input.foreground": neutral[34],
    "input.placeholderForeground": "#a6a6a6",
    "inputOption.activeBorder": "#007acc",
    "inputValidation.errorBackground": "#5a1d1d",
    "inputValidation.errorBorder": "#be1100",
    "inputValidation.infoBackground": "#063b49",
    "inputValidation.infoBorder": "#007acc",
    "inputValidation.warningBackground": "#352a05",
    "inputValidation.warningBorder": "#b89500",
    "list.activeSelectionBackground": neutral[3],
    "list.activeSelectionForeground": neutral[34],
    "list.dropBackground": neutral[0],
    "list.errorForeground": red[22],
    "list.focusBackground": neutral[3],
    "list.highlightForeground": neutral[34],
    "list.hoverBackground": neutral[3],
    "list.inactiveFocusBackground": neutral[3],
    "list.inactiveSelectionBackground": neutral[3],
    "list.inactiveSelectionForeground": neutral[34],
    "list.invalidItemForeground": "#b89500",
    "list.warningForeground": "#4d9e4d",
    "menu.background": neutral[1],
    "menu.foreground": neutral[30],
    "menu.selectionBackground": neutral[4],
    "menu.selectionForeground": neutral[34],
    "menu.separatorBackground": neutral[8],
    "menubar.selectionBackground": neutral[4],
    "menubar.selectionForeground": neutral[34],
    "merge.commonContentBackground": "#60606029",
    "merge.commonHeaderBackground": "#60606066",
    "merge.currentContentBackground": "#40c8ae33",
    "merge.currentHeaderBackground": "#40c8ae80",
    "merge.incomingContentBackground": "#40a6ff33",
    "merge.incomingHeaderBackground": "#40a6ff80",
    "notificationCenterHeader.background": neutral[1],
    "notificationLink.foreground": blueMoreChroma[36],
    "notifications.background": neutral[1],
    "notifications.border": neutral[2],
    "panel.background": neutral[1],
    "panel.border": neutral[2],
    "panel.dropBackground": neutral[0],
    "panelTitle.activeBorder": blue[24],
    "panelTitle.activeForeground": neutral[34],
    "panelTitle.inactiveForeground": neutral[24],
    "peekView.border": neutral[2],
    "peekViewEditor.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewResult.background": neutral[1],
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": neutral[0],
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "pickerGroup.border": neutral[2],
    "pickerGroup.foreground": "#3794ff",
    "progressBar.background": "#0e70c0",
    "scrollbar.shadow": alpha("#000000", 0.875),
    "scrollbarSlider.activeBackground": alpha(neutral[10], 0.75),
    "scrollbarSlider.background": alpha(neutral[6], 0.75),
    "scrollbarSlider.hoverBackground": alpha(neutral[8], 0.75),
    "settings.checkboxBackground": neutral[0],
    "settings.checkboxBorder": neutral[16],
    "settings.checkboxForeground": neutral[34],
    "settings.dropdownBackground": neutral[2],
    "settings.dropdownBorder": neutral[2],
    "settings.dropdownForeground": neutral[34],
    "settings.dropdownListBorder": neutral[8],
    "settings.headerForeground": blueLessChroma[34],
    "settings.modifiedItemIndicator": blueLessChroma[20],
    "settings.numberInputBackground": neutral[2],
    "settings.numberInputForeground": neutral[34],
    "settings.textInputBackground": neutral[2],
    "settings.textInputForeground": neutral[34],
    "sideBar.background": neutral[1],
    "sideBar.dropBackground": neutral[0],
    "sideBar.foreground": neutral[24],
    "sideBarSectionHeader.background": neutral[1],
    "sideBarSectionHeader.foreground": neutral[16],
    "sideBarTitle.foreground": neutral[16],
    "statusBar.background": neutral[1],
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.foreground": neutral[24],
    "statusBar.noFolderBackground": purple[2],
    "statusBar.noFolderForeground": neutral[28],
    "statusBarItem.activeBackground": neutral[6],
    "statusBarItem.hoverBackground": neutral[4],
    "tab.activeBackground": neutral[1],
    "tab.activeBorder": blue[24],
    "tab.activeForeground": neutral[34],
    "tab.activeModifiedBorder": "#3399cc",
    "tab.border": neutral[1],
    "tab.inactiveBackground": neutral[1],
    "tab.inactiveForeground": neutral[24],
    "tab.inactiveModifiedBorder": "#3399cc80",
    "tab.unfocusedActiveForeground": "#ffffff80",
    "tab.unfocusedActiveModifiedBorder": "#3399cc80",
    "tab.unfocusedInactiveForeground": "#ffffff40",
    "tab.unfocusedInactiveModifiedBorder": "#3399cc40",
    "terminal.ansiBlack": getTerminalColor("black"),
    "terminal.ansiBlue": getTerminalColor("blue"),
    "terminal.ansiBrightBlack": getTerminalColor("brightBlack"),
    "terminal.ansiBrightBlue": getTerminalColor("brightBlue"),
    "terminal.ansiBrightCyan": getTerminalColor("brightCyan"),
    "terminal.ansiBrightGreen": getTerminalColor("brightGreen"),
    "terminal.ansiBrightMagenta": getTerminalColor("brightMagenta"),
    "terminal.ansiBrightRed": getTerminalColor("brightRed"),
    "terminal.ansiBrightWhite": getTerminalColor("brightWhite"),
    "terminal.ansiBrightYellow": getTerminalColor("brightYellow"),
    "terminal.ansiCyan": getTerminalColor("cyan"),
    "terminal.ansiGreen": getTerminalColor("green"),
    "terminal.ansiMagenta": getTerminalColor("magenta"),
    "terminal.ansiRed": getTerminalColor("red"),
    "terminal.ansiWhite": getTerminalColor("white"),
    "terminal.ansiYellow": getTerminalColor("yellow"),
    "terminal.background": getTerminalColor("background"),
    "terminal.border": neutral[2],
    "terminal.foreground": getTerminalColor("foreground"),
    "terminal.selectionBackground": alpha(blueLessChroma[20], 0.25),
    "textBlockQuote.background": "#7f7f7f1a",
    "textBlockQuote.border": neutral[2],
    "textCodeBlock.background": "#0a0a0a66",
    "textLink.activeForeground": blueMoreChroma[38],
    "textLink.foreground": blueMoreChroma[36],
    "textPreformat.foreground": purple[30],
    "textSeparator.foreground": "#ffffff2e",
    "titleBar.activeBackground": neutral[1],
    "titleBar.activeForeground": neutral[24],
    "titleBar.inactiveBackground": neutral[1],
    "titleBar.inactiveForeground": neutral[16],
    "widget.shadow": alpha("#000000", 0.25),
    // "statusBarItem.prominentBackground": "#00ffff",
    // "statusBarItem.prominentHoverBackground": "#ff80ff",
    descriptionForeground: "#ccccccb3",
    errorForeground: red[22],
    focusBorder: blueLessChroma[20],
    foreground: neutral[34]
  };
}

function getTokenCustomizations(colors, getTokenColor) {
  const { blueLessChroma, orange, purple } = colors;

  return [
    {
      scope: ["meta.embedded", "source.groovy.embedded"],
      settings: {
        foreground: "#D4D4D4"
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
        foreground: getTokenColor("comment")
      }
    },
    {
      scope: "constant.language",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: getTokenColor("number")
      }
    },
    {
      scope: "constant.regexp",
      settings: {
        foreground: "#646695"
      }
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "entity.name.tag.css",
      settings: {
        foreground: purple[30]
      }
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: getTokenColor("type")
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
        foreground: purple[30]
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
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "markup.heading",
      settings: {
        fontStyle: "bold",
        foreground: getTokenColor("keyword")
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
        foreground: getTokenColor("number")
      }
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: getTokenColor("string")
      }
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: getTokenColor("keyword")
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
        foreground: getTokenColor("string")
      }
    },
    {
      name: "brackets of XML/HTML tags",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: getTokenColor("punctuation")
      }
    },
    {
      scope: "meta.preprocessor",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "meta.preprocessor.string",
      settings: {
        foreground: getTokenColor("string")
      }
    },
    {
      scope: "meta.preprocessor.numeric",
      settings: {
        foreground: getTokenColor("number")
      }
    },
    {
      scope: "meta.structure.dictionary.key.python",
      settings: {
        foreground: getTokenColor("identifier")
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "storage",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "storage.type",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "storage.modifier",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "string",
      settings: {
        foreground: getTokenColor("string")
      }
    },
    {
      scope: "string.tag",
      settings: {
        foreground: getTokenColor("string")
      }
    },
    {
      scope: "string.value",
      settings: {
        foreground: getTokenColor("string")
      }
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: "#d16969"
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
        foreground: getTokenColor("operator")
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
        foreground: getTokenColor("identifier")
      }
    },
    {
      scope: "keyword",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: getTokenColor("operator")
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
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: getTokenColor("number")
      }
    },
    {
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php"
      ],
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: getTokenColor("identifier")
      }
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: getTokenColor("number")
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
        foreground: getTokenColor("keyword")
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
        foreground: getTokenColor("function")
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
        foreground: getTokenColor("type")
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
        foreground: getTokenColor("type")
      }
    },
    {
      name: "Control flow keywords",
      scope: "keyword.control",
      settings: {
        foreground: getTokenColor("keyword")
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
        foreground: getTokenColor("identifier")
      }
    },
    {
      name: "Object keys, TS grammar specific",
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: getTokenColor("identifier")
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
        foreground: getTokenColor("string")
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
        foreground: getTokenColor("string")
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
        foreground: "#d16969"
      }
    },
    {
      scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
      settings: {
        foreground: getTokenColor("identifier")
      }
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: purple[30]
      }
    },
    {
      scope: "constant.character",
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: orange[26]
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
      scope: ["meta.brace.round.js", "meta.brace.square.js", "punctuation"],
      settings: {
        foreground: getTokenColor("punctuation")
      }
    },
    {
      scope: [
        "storage.type.function.arrow.js",
        "storage.type.function.arrow.ts",
        "storage.type.function.arrow.tsx"
      ],
      settings: {
        foreground: getTokenColor("operator")
      }
    },
    {
      scope: [
        "punctuation.definition.keyword.css",
        "punctuation.definition.directive.c",
        "punctuation.definition.heading.markdown"
      ],
      settings: {
        foreground: getTokenColor("keyword")
      }
    },
    {
      scope: ["entity.name.type.class", "entity.name.type.module"],
      settings: {
        foreground: getTokenColor("type")
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
        foreground: getTokenColor("comment")
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
