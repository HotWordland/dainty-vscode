const { getWorkbenchMappings, getTokenMappings } = require("../mappings");

function transformSettings(settings, colors, configuration, disable) {
  return {
    ...settings,
    "workbench.colorCustomizations": disable
      ? {}
      : getWorkbenchMappings(colors, configuration),
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: getTokenMappings(colors, configuration)
        }
  };
}

module.exports = {
  transformSettings
};
