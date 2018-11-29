const {
  getTerminalColorFunction,
  getTokenColorFunction
} = require("dainty-shared").colors;
const {
  getWorkbenchCustomizations,
  getTokenCustomizations
} = require("../customizations");

function transformSettings(
  settings,
  configuration,
  disable,
  colors,
  colorConstants
) {
  return {
    ...settings,
    "workbench.colorCustomizations": disable
      ? {}
      : getWorkbenchCustomizations(
          colors,
          getTerminalColorFunction(configuration, colorConstants)
        ),
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: getTokenCustomizations(
            colors,
            getTokenColorFunction(configuration, colorConstants)
          )
        }
  };
}

module.exports = {
  transformSettings
};
