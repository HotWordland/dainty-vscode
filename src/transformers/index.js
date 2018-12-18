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
  let newSettings = {
    ...settings,
    "workbench.colorCustomizations": disable
      ? {}
      : {
          ...getWorkbenchCustomizations(
            getColorFunction(configuration),
            getPropertyFunction(configuration, getColorFunction(configuration)),
            getTypeShadeFunction(configuration),
            getTypeValueFunction(configuration)
          ),
          ...getUserWorkbenchCustomizations(
            configuration,
            getColorFunction(configuration)
          )
        },
    "editor.tokenColorCustomizations": disable
      ? {}
      : {
          textMateRules: [
            ...getTokenCustomizations(
              getPropertyFunction(
                configuration,
                getColorFunction(configuration)
              )
            ),
            ...getUserTokenColorCustomizations(
              configuration,
              getColorFunction(configuration)
            )
          ]
        }
  };

  if (configuration.type === "dark" && newSettings["workbench.colorTheme"]) {
    delete newSettings["workbench.colorTheme"];
  } else if (configuration.type === "light") {
    newSettings["workbench.colorTheme"] = "Default Light+";
  }

  return newSettings;
}

function getUserWorkbenchCustomizations(configuration, getColor) {
  const { customizations } = configuration;

  if (!customizations.__colors) {
    return [];
  }

  return Object.keys(customizations.__colors).reduce((colors, color) => {
    colors[color] = getColor(...customizations.__colors[color].split("-"));
    return colors;
  }, {});
}

function getUserTokenColorCustomizations(configuration, getColor) {
  const { customizations } = configuration;

  if (!customizations.__tokenColors) {
    return [];
  }

  return customizations.__tokenColors.map(tokenColor => {
    return {
      scope: tokenColor.scope,
      settings: {
        foreground: getColor(...tokenColor.foreground.split("-"))
      }
    };
  });
}

module.exports = {
  transformSettings
};
