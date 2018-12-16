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
  console.log({ type: configuration.type });
  let newSettings = {
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

  if (configuration.type === "dark" && newSettings["workbench.colorTheme"]) {
    delete newSettings["workbench.colorTheme"];
  } else if (configuration.type === "light") {
    newSettings["workbench.colorTheme"] = "Default Light+";
  }

  return newSettings;
}

module.exports = {
  transformSettings
};
