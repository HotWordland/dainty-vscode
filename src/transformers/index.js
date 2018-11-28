const { generateColorConstants } = require("dainty-shared").colors;
const { getWorkbenchMappings, getTokenMappings } = require("../mappings");

function transformSettings(settings, colors, configuration, disable) {
  const colorConstants = generateColorConstants(colors);

  function translateColorConstant(colorConstant) {
    if (colorConstant.startsWith("#")) {
      return colorConstant;
    } else if (colorConstant.includes("_")) {
      const [colorConstant_, alpha] = colorConstant.split("_");

      return colorConstants[colorConstant_] + alpha;
    } else {
      return colorConstants[colorConstant];
    }
  }

  function getTokenColor(tokenName) {
    const dark = configuration.variant !== "light";

    const tokenColor = configuration.customizations.tokens[tokenName];

    return translateColorConstant(dark ? tokenColor.dark : tokenColor.light);
  }

  return {
    ...settings,
    "workbench.colorCustomizations": disable
      ? {}
      : getWorkbenchMappings(colors, configuration),
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: getTokenMappings(colors, getTokenColor)
        }
  };
}

module.exports = {
  transformSettings
};
