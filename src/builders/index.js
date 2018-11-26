const fs = require("fs");
const util = require("util");
const { transformSettings } = require("../transformers");
const {
  appDataPath,
  createDistDirectory,
  writeFileLog,
  backupFile,
  readFileJson
} = require("dainty-shared").utils;

const exists = util.promisify(fs.exists);

async function getSettings(filename) {
  if (!(await exists(filename))) {
    return {};
  } else {
    try {
      return await readFileJson(filename);
    } catch (error) {
      console.error(error);
      throw new Error("Could not get settings.");
    }
  }
}

async function buildSettings(
  dirname,
  configuration,
  colorPalette,
  install,
  disable
) {
  const filename = `${await appDataPath()}/Code/User/settings.json`;

  const settings = transformSettings(
    await getSettings(filename),
    colorPalette,
    configuration,
    disable
  );

  if (install) {
    await backupFile(dirname, filename);
    await writeFileLog(filename, JSON.stringify(settings, null, 2));
  } else {
    await createDistDirectory(dirname);
    await writeFileLog(
      path.join(dirname, "../dist/settings.json"),
      JSON.stringify(settings, null, 2)
    );
  }
}

module.exports = {
  buildSettings
};
