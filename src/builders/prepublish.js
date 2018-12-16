const path = require("path");
const changeCase = require("change-case");
const { transformPreset } = require("../transformers/prepublish");
const {
  createDistDirectory,
  writeFileLog
} = require("dainty-shared/src/utils");

async function buildPreset(dirname, preset, configuration) {
  const settings = transformPreset(configuration);

  await createDistDirectory(dirname);
  await writeFileLog(
    path.join(dirname, `../dist/${changeCase.paramCase(preset)}.json`),
    JSON.stringify(settings, null, 2)
  );
}

module.exports = {
  buildPreset
};
