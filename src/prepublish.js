const { presets } = require("dainty-shared/src/presets-web");
const { buildPreset } = require("./builders/prepublish");
const changeCase = require("change-case");

function transformName(name) {
  if (name.startsWith("Dainty")) {
    return name;
  } else {
    return `Dainty – ${name}`;
  }
}

(async () => {
  let themes = [];

  for (const preset of Object.keys(presets)) {
    await buildPreset(__dirname, preset, presets[preset], false, false, true);

    themes.push({
      label: transformName(presets[preset].name),
      uiTheme: presets[preset].type === "dark" ? "vs-dark" : "vs",
      path: `./dist/${changeCase.paramCase(preset)}.json`
    });
  }

  console.log(JSON.stringify({ contributes: { themes } }, null, 2));
})();
