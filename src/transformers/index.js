const {
  generateColorConstants,
  translateColorConstant
} = require("dainty-shared").colors;
const {
  getWorkbenchCustomizations,
  getTokenCustomizations
} = require("../customizations");

function transformSettings(settings, colors, configuration, disable) {
  const colorConstants = generateColorConstants(colors);

  function getTerminalColor(colorName) {
    const dark = configuration.variant !== "light";

    const terminalColor = configuration.customizations.terminal[colorName];

    return translateColorConstant(
      colorConstants,
      dark ? terminalColor.dark : terminalColor.light
    );
  }

  function getTokenColor(tokenName) {
    const dark = configuration.variant !== "light";

    const tokenColor = configuration.customizations.tokens[tokenName];

    return translateColorConstant(
      colorConstants,
      dark ? tokenColor.dark : tokenColor.light
    );
  }

  return {
    ...settings,
    "workbench.colorCustomizations": disable
      ? {}
      : getWorkbenchCustomizations(colors, getTerminalColor),
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: getTokenCustomizations(colors, getTokenColor)
        }
  };
}

module.exports = {
  transformSettings
};
