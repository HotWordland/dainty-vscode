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

function transformName(name) {
  if (name.startsWith("Dainty")) {
    return name;
  } else {
    return `Dainty – ${name}`;
  }
}

function transformPreset(configuration) {
  return {
    name: transformName(configuration.name),
    type: configuration.type,
    colors: getWorkbenchCustomizations(
      getColorFunction(configuration),
      getPropertyFunction(configuration, getColorFunction(configuration)),
      getTypeShadeFunction(configuration),
      getTypeValueFunction(configuration)
    ),
    tokenColors: getTokenCustomizations(
      getPropertyFunction(configuration, getColorFunction(configuration))
    )
  };
}

module.exports = {
  transformPreset
};
