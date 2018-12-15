const {
  getColorFunction,
  getTypeShadeFunction,
  getTypeValueFunction,
  getPropertyFunction
} = require("dainty-shared/src/colors");
const {
  getWorkbenchCustomizations,
  getTokenCustomizations
} = require("../customizations");

function transformSettings(settings, configuration, disable) {
  return {
    ...settings,
    "workbench.colorCustomizations": disable
      ? {}
      : getWorkbenchCustomizations(
          getColorFunction(configuration),
          getPropertyFunction(configuration, getColorFunction(configuration)),
          getTypeShadeFunction(configuration),
          getTypeValueFunction(configuration)
        ),
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: getTokenCustomizations(
            getPropertyFunction(configuration, getColorFunction(configuration))
          )
        }
  };
}

module.exports = {
  transformSettings
};
