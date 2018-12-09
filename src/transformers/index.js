const {
  getPropertyFunction,
  getTypeShadeFunction
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
          getPropertyFunction(configuration, colorConstants),
          getTypeShadeFunction(configuration)
        ),
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: getTokenCustomizations(
            colors,
            getPropertyFunction(configuration, colorConstants)
          )
        }
  };
}

module.exports = {
  transformSettings
};
