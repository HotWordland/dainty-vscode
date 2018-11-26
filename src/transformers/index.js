const {
  getWorkbenchColorCustomizations,
  getTokenColorCustomizations
} = require("../customizations");

function transformSettings(settings, colors, configuration, disable) {
  return {
    ...settings,
    "workbench.colorCustomizations": disable
      ? {}
      : getWorkbenchColorCustomizations(colors, configuration),
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: getTokenColorCustomizations(colors, configuration)
        }
  };
}

module.exports = {
  transformSettings
};
