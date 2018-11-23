const { alpha } = require("./colors");

function getWorkbenchColorCustomizations(colors) {
  const {
    blue,
    blueGray,
    blueLessChroma,
    blueMoreChroma,
    cyan,
    green,
    orange,
    purple,
    red,
    white
  } = colors;

  return {
    ...{
      "activityBar.background": blueGray[1],
      "activityBar.dropBackground": blueGray[0],
      "activityBar.foreground": blueLessChroma[24],
      "activityBar.inactiveForeground": blueGray[12],
      "activityBarBadge.foreground": blueGray[39],
      "badge.background": blue[8],
      "badge.foreground": blueGray[39],
      "breadcrumb.activeSelectionForeground": "#e0e0e0",
      "breadcrumb.background": blueGray[0],
      "breadcrumb.focusForeground": blueGray[34],
      "breadcrumb.foreground": blueGray[20],
      "breadcrumbPicker.background": blueGray[1],
      "button.background": blue[8],
      "button.foreground": white,
      "button.hoverBackground": blue[10],
      "debugExceptionWidget.background": "#420b0d",
      "debugExceptionWidget.border": blueGray[2],
      "debugToolBar.background": blueGray[0],
      "diffEditor.insertedTextBackground": "#9bb95533",
      "diffEditor.removedTextBackground": "#ff000033",
      "dropdown.background": blueGray[2],
      "dropdown.border": blueGray[2],
      "dropdown.foreground": blueGray[34],
      "editor.background": blueGray[0],
      "editor.findMatchBackground": alpha(blueLessChroma[20], 0.25),
      "editor.findMatchHighlightBackground": alpha(blueLessChroma[20], 0.25),
      "editor.findRangeHighlightBackground": alpha(blueLessChroma[20], 0.25),
      "editor.focusedStackFrameHighlightBackground": alpha(
        blueLessChroma[20],
        0.25
      ),
      "editor.foreground": blueGray[34],
      "editor.hoverHighlightBackground": alpha(blueLessChroma[20], 0.25),
      "editor.inactiveSelectionBackground": alpha(blueLessChroma[20], 0.125),
      "editor.lineHighlightBorder": blueGray[2],
      "editor.rangeHighlightBackground": alpha(blueLessChroma[20], 0.25),
      "editor.selectionBackground": alpha(blueLessChroma[20], 0.25),
      "editor.selectionHighlightBackground": alpha(blueLessChroma[20], 0.125),
      "editor.snippetFinalTabstopHighlightBorder": alpha(
        blueLessChroma[20],
        0.25
      ),
      "editor.snippetTabstopHighlightBackground": alpha(
        blueLessChroma[20],
        0.25
      ),
      "editor.stackFrameHighlightBackground": alpha(blueLessChroma[20], 0.25),
      "editor.wordHighlightBackground": alpha(blueLessChroma[20], 0.125),
      "editor.wordHighlightStrongBackground": alpha(blueLessChroma[20], 0.125),
      "editorActiveLineNumber.foreground": blueGray[20],
      "editorBracketMatch.background": alpha(blueLessChroma[20], 0.125),
      "editorBracketMatch.border": blueLessChroma[24],
      "editorCodeLens.foreground": "#999999",
      "editorCursor.foreground": blueGray[28],
      "editorError.foreground": red[22],
      "editorGroup.border": blueGray[2],
      "editorGroup.dropBackground": blueGray[0],
      "editorGroupHeader.noTabsBackground": blueGray[0],
      "editorGroupHeader.tabsBackground": blueGray[1],
      "editorGutter.addedBackground": "#587c0c",
      "editorGutter.background": blueGray[0],
      "editorGutter.commentRangeForeground": "#c5c5c5",
      "editorGutter.deletedBackground": "#94151b",
      "editorGutter.modifiedBackground": blueLessChroma[20],
      "editorHint.foreground": "#eeeeeeb3",
      "editorHoverWidget.background": blueGray[1],
      "editorHoverWidget.border": blueGray[2],
      "editorIndentGuide.activeBackground": blueGray[6],
      "editorIndentGuide.background": blueGray[4],
      "editorInfo.foreground": "#008000",
      "editorLineNumber.activeForeground": blueGray[20],
      "editorLineNumber.foreground": blueGray[12],
      "editorLink.activeForeground": "#4e94ce",
      "editorMarkerNavigation.background": "#2d2d30",
      "editorMarkerNavigationError.background": red[22],
      "editorMarkerNavigationInfo.background": "#008000",
      "editorMarkerNavigationWarning.background": "#4d9e4d",
      "editorOverviewRuler.addedForeground": "#007acc99",
      "editorOverviewRuler.border": blueGray[2],
      "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
      "editorOverviewRuler.commonContentForeground": "#60606066",
      "editorOverviewRuler.currentContentForeground": "#40c8ae80",
      "editorOverviewRuler.deletedForeground": "#007acc99",
      "editorOverviewRuler.errorForeground": alpha(red[22], 0.75),
      "editorOverviewRuler.findMatchForeground": "#f6b94db3",
      "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
      "editorOverviewRuler.infoForeground": "#121288b3",
      "editorOverviewRuler.modifiedForeground": "#007acc99",
      "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
      "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.warningForeground": "#128812b3",
      "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
      "editorPane.background": blueGray[0],
      "editorRuler.foreground": "#5a5a5a",
      "editorSuggestWidget.background": blueGray[1],
      "editorSuggestWidget.border": blueGray[2],
      "editorSuggestWidget.foreground": "#d4d4d4",
      "editorSuggestWidget.highlightForeground": "#0097fb",
      "editorSuggestWidget.selectedBackground": "#062f4a",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.foreground": "#4d9e4d",
      "editorWhitespace.foreground": "#e3e4e229",
      "editorWidget.background": blueGray[1],
      "editorWidget.border": blueGray[2],
      "extensionButton.prominentBackground": "#327e36",
      "extensionButton.prominentForeground": "#ffffff",
      "extensionButton.prominentHoverBackground": "#28632b",
      "gitDecoration.addedResourceForeground": "#81b88b",
      "gitDecoration.conflictingResourceForeground": "#6c6cc4",
      "gitDecoration.deletedResourceForeground": "#c74e39",
      "gitDecoration.ignoredResourceForeground": "#8c8c8c",
      "gitDecoration.modifiedResourceForeground": "#e2c08d",
      "gitDecoration.submoduleResourceForeground": "#8db9e2",
      "gitDecoration.untrackedResourceForeground": "#73c991",
      "input.background": blueGray[0],
      "input.foreground": blueGray[34],
      "input.placeholderForeground": "#a6a6a6",
      "inputOption.activeBorder": "#007acc",
      "inputValidation.errorBackground": "#5a1d1d",
      "inputValidation.errorBorder": "#be1100",
      "inputValidation.infoBackground": "#063b49",
      "inputValidation.infoBorder": "#007acc",
      "inputValidation.warningBackground": "#352a05",
      "inputValidation.warningBorder": "#b89500",
      "list.activeSelectionBackground": blueGray[3],
      "list.activeSelectionForeground": blueGray[34],
      "list.dropBackground": blueGray[0],
      "list.errorForeground": red[22],
      "list.focusBackground": blueGray[3],
      "list.highlightForeground": blueGray[34],
      "list.hoverBackground": blueGray[3],
      "list.inactiveFocusBackground": blueGray[3],
      "list.inactiveSelectionBackground": blueGray[3],
      "list.invalidItemForeground": "#b89500",
      "list.warningForeground": "#4d9e4d",
      "menu.background": blueGray[1],
      "menu.foreground": blueGray[30],
      "menu.selectionBackground": blueGray[4],
      "menu.selectionForeground": blueGray[34],
      "menu.separatorBackground": blueGray[8],
      "menubar.selectionBackground": blueGray[4],
      "menubar.selectionForeground": blueGray[34],
      "merge.commonContentBackground": "#60606029",
      "merge.commonHeaderBackground": "#60606066",
      "merge.currentContentBackground": "#40c8ae33",
      "merge.currentHeaderBackground": "#40c8ae80",
      "merge.incomingContentBackground": "#40a6ff33",
      "merge.incomingHeaderBackground": "#40a6ff80",
      "notificationCenterHeader.background": blueGray[1],
      "notificationLink.foreground": blueMoreChroma[36],
      "notifications.background": blueGray[1],
      "notifications.border": blueGray[2],
      "panel.background": blueGray[1],
      "panel.border": blueGray[2],
      "panel.dropBackground": blueGray[0],
      "panelTitle.activeBorder": blueLessChroma[24],
      "panelTitle.activeForeground": blueGray[34],
      "panelTitle.inactiveForeground": blueGray[24],
      "peekView.border": blueGray[2],
      "peekViewEditor.background": "#001f33",
      "peekViewEditor.matchHighlightBackground": "#ff8f0099",
      "peekViewEditorGutter.background": "#001f33",
      "peekViewResult.background": blueGray[1],
      "peekViewResult.fileForeground": "#ffffff",
      "peekViewResult.lineForeground": "#bbbbbb",
      "peekViewResult.matchHighlightBackground": "#ea5c004d",
      "peekViewResult.selectionBackground": "#3399ff33",
      "peekViewResult.selectionForeground": "#ffffff",
      "peekViewTitle.background": blueGray[0],
      "peekViewTitleDescription.foreground": "#ccccccb3",
      "peekViewTitleLabel.foreground": "#ffffff",
      "pickerGroup.border": blueGray[2],
      "pickerGroup.foreground": "#3794ff",
      "progressBar.background": "#0e70c0",
      "scrollbar.shadow": "#000000",
      "scrollbarSlider.activeBackground": alpha(blueGray[10], 0.75),
      "scrollbarSlider.background": alpha(blueGray[6], 0.75),
      "scrollbarSlider.hoverBackground": alpha(blueGray[8], 0.75),
      "settings.checkboxBackground": blueGray[0],
      "settings.checkboxBorder": blueGray[16],
      "settings.checkboxForeground": blueGray[34],
      "settings.dropdownBackground": blueGray[2],
      "settings.dropdownBorder": blueGray[2],
      "settings.dropdownForeground": blueGray[34],
      "settings.dropdownListBorder": blueGray[8],
      "settings.headerForeground": blueLessChroma[34],
      "settings.modifiedItemIndicator": blueLessChroma[20],
      "settings.numberInputBackground": blueGray[2],
      "settings.numberInputForeground": blueGray[34],
      "settings.textInputBackground": blueGray[2],
      "settings.textInputForeground": blueGray[34],
      "sideBar.background": blueGray[1],
      "sideBar.dropBackground": blueGray[0],
      "sideBarSectionHeader.background": blueGray[1],
      "sideBarTitle.foreground": blueGray[16],
      "statusBar.background": blueGray[1],
      "statusBar.debuggingBackground": "#cc6633",
      "statusBar.debuggingForeground": "#ffffff",
      "statusBar.foreground": blueGray[24],
      "statusBar.noFolderBackground": purple[2],
      "statusBar.noFolderForeground": blueGray[28],
      "statusBarItem.activeBackground": blueGray[6],
      "statusBarItem.hoverBackground": blueGray[4],
      // "statusBarItem.prominentBackground": "#00ffff",
      // "statusBarItem.prominentHoverBackground": "#ff80ff",
      "tab.activeBackground": blueGray[1],
      "tab.activeForeground": blueGray[34],
      "tab.activeModifiedBorder": "#3399cc",
      "tab.border": blueGray[1],
      "tab.inactiveBackground": blueGray[1],
      "tab.inactiveForeground": blueGray[24],
      "tab.inactiveModifiedBorder": "#3399cc80",
      "tab.unfocusedActiveForeground": "#ffffff80",
      "tab.unfocusedActiveModifiedBorder": "#3399cc80",
      "tab.unfocusedInactiveForeground": "#ffffff40",
      "tab.unfocusedInactiveModifiedBorder": "#3399cc40",
      "terminal.ansiBlack": blueGray[0],
      "terminal.ansiBlue": blue[18],
      "terminal.ansiBrightBlack": blueGray[18],
      "terminal.ansiBrightBlue": blue[26],
      "terminal.ansiBrightCyan": cyan[26],
      "terminal.ansiBrightGreen": green[26],
      "terminal.ansiBrightMagenta": purple[26],
      "terminal.ansiBrightRed": red[26],
      "terminal.ansiBrightWhite": blueGray[39],
      "terminal.ansiBrightYellow": orange[33],
      "terminal.ansiCyan": cyan[18],
      "terminal.ansiGreen": green[18],
      "terminal.ansiMagenta": purple[18],
      "terminal.ansiRed": red[18],
      "terminal.ansiWhite": blueGray[26],
      "terminal.ansiYellow": orange[26],
      "terminal.background": blueGray[0],
      "terminal.border": blueGray[2],
      "terminal.foreground": blueGray[34],
      "terminal.selectionBackground": alpha(blueLessChroma[20], 0.25),
      "textBlockQuote.background": "#7f7f7f1a",
      "textBlockQuote.border": blueGray[2],
      "textCodeBlock.background": "#0a0a0a66",
      "textLink.activeForeground": blueMoreChroma[38],
      "textLink.foreground": blueMoreChroma[36],
      "textPreformat.foreground": purple[30],
      "textSeparator.foreground": "#ffffff2e",
      "titleBar.activeBackground": blueGray[1],
      "titleBar.activeForeground": blueGray[24],
      "titleBar.inactiveBackground": blueGray[1],
      "titleBar.inactiveForeground": blueGray[16],
      "widget.shadow": alpha("#000000", 0.25),
      descriptionForeground: "#ccccccb3",
      errorForeground: red[22],
      focusBorder: blueLessChroma[20],
      foreground: blueGray[42]
    },
    ...{
      "tab.activeBorder": blueLessChroma[24],
      "activityBarBadge.background": blueMoreChroma[12],
      "editor.lineHighlightBackground": blueGray[2],
      "sideBarSectionHeader.foreground": blueGray[16],
      "sideBar.foreground": blueGray[24],
      "list.inactiveSelectionForeground": blueGray[34]
    }
  };
}

function getTokenColorCustomizations(colors) {
  const { blue, blueGray, blueLessChroma, green, orange, purple } = colors;

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
        foreground: blueGray[16]
      }
    },
    {
      scope: "constant.language",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: green[35]
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
        foreground: blue[26]
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
        foreground: blueLessChroma[30]
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
        foreground: blue[26]
      }
    },
    {
      scope: "markup.heading",
      settings: {
        fontStyle: "bold",
        foreground: blue[26]
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
        foreground: green[35]
      }
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: orange[33]
      }
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: blue[26]
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
        foreground: orange[33]
      }
    },
    {
      name: "brackets of XML/HTML tags",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: blueGray[24]
      }
    },
    {
      scope: "meta.preprocessor",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "meta.preprocessor.string",
      settings: {
        foreground: orange[33]
      }
    },
    {
      scope: "meta.preprocessor.numeric",
      settings: {
        foreground: green[35]
      }
    },
    {
      scope: "meta.structure.dictionary.key.python",
      settings: {
        foreground: blueGray[34]
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "storage",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "storage.type",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "storage.modifier",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "string",
      settings: {
        foreground: orange[33]
      }
    },
    {
      scope: "string.tag",
      settings: {
        foreground: orange[33]
      }
    },
    {
      scope: "string.value",
      settings: {
        foreground: orange[33]
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
        foreground: blueGray[30]
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
        foreground: blueGray[34]
      }
    },
    {
      scope: "keyword",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: blueGray[30]
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
        foreground: blue[26]
      }
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: green[35]
      }
    },
    {
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php"
      ],
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: blueGray[34]
      }
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: green[35]
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
        foreground: blue[26]
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
        foreground: blueLessChroma[34]
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
        foreground: blueLessChroma[30]
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
        foreground: blueLessChroma[30]
      }
    },
    {
      name: "Control flow keywords",
      scope: "keyword.control",
      settings: {
        foreground: blue[26]
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
        foreground: blueGray[34]
      }
    },
    {
      name: "Object keys, TS grammar specific",
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: blueGray[34]
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
        foreground: orange[33]
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
        foreground: orange[33]
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
        foreground: blueGray[34]
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
        foreground: blue[26]
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
        foreground: blueGray[26]
      }
    },
    {
      scope: [
        "storage.type.function.arrow.js",
        "storage.type.function.arrow.ts",
        "storage.type.function.arrow.tsx"
      ],
      settings: {
        foreground: blueGray[30]
      }
    },
    {
      scope: [
        "punctuation.definition.keyword.css",
        "punctuation.definition.directive.c",
        "punctuation.definition.heading.markdown"
      ],
      settings: {
        foreground: blue[26]
      }
    },
    {
      scope: ["entity.name.type.class", "entity.name.type.module"],
      settings: {
        foreground: blueLessChroma[30]
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
        foreground: blueGray[16]
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
  getWorkbenchColorCustomizations,
  getTokenColorCustomizations
};
