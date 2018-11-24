const fs = require("fs");
const util = require("util");
const path = require("path");
const parseArgs = require("minimist");
const { generateColorPalette } = require("dainty-shared").colors;
const { getConfiguration } = require("dainty-shared").configuration;
const {
  appDataPath,
  createDistDirectory,
  writeFileLog,
  backupFile,
  readFileJson
} = require("dainty-shared").utils;
const {
  getWorkbenchColorCustomizations,
  getTokenColorCustomizations
} = require("./customizations");

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

function generateSettings(settings, colors, configuration, disable) {
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

(async () => {
  const argv = parseArgs(process.argv.slice(2));

  let configuration;

  try {
    configuration = await getConfiguration(__dirname, argv.preset || argv.p);
  } catch (error) {
    console.error(error);
    return;
  }

  if (configuration === null) {
    return;
  }

  const filename = `${await appDataPath()}/Code/User/settings.json`;

  const settings = generateSettings(
    await getSettings(filename),
    generateColorPalette(configuration),
    configuration,
    argv.disable || argv.d
  );

  if (argv.install || argv.i) {
    await backupFile(__dirname, filename);
    await writeFileLog(filename, JSON.stringify(settings, null, 2));
  } else {
    await createDistDirectory(__dirname);
    await writeFileLog(
      path.join(__dirname, "../dist/settings.json"),
      JSON.stringify(settings, null, 2)
    );
  }
})();
