const fs = require("fs");
const path = require("path");
const util = require("util");
const decomment = require("decomment");
const parseJson = require("parse-json");
const { generateColorPalette } = require("./colors");
const {
  getWorkbenchColorCustomizations,
  getTokenColorCustomizations
} = require("./customizations");
const { appDataPath, writeFileLog } = require("./utils");

const readFile = util.promisify(fs.readFile);
const exists = util.promisify(fs.exists);
const mkdir = util.promisify(fs.mkdir);

async function createBackupDirectory() {
  const target = path.join(__dirname, "../backup");

  if (!(await exists(target))) {
    await mkdir(target);
  }
}

async function readSettings(settingsJson) {
  if (!(await exists(settingsJson))) {
    return {};
  } else {
    return parseJson(decomment(await readFile(settingsJson, "utf8")));
  }
}

async function readSettingsJson(settingsJson) {
  if (!(await exists(settingsJson))) {
    return null;
  } else {
    return await readFile(settingsJson, "utf8");
  }
}

async function backupSettings(settingsJson) {
  await createBackupDirectory();
  const data = await readSettingsJson(settingsJson);

  if (data !== null) {
    const settingsJsonBackup = path.join(
      __dirname,
      `../backup/settings_${new Date().getTime()}.json`
    );

    await writeFileLog(settingsJsonBackup, data);
  }
}

async function generateSettings(settingsJson, disable) {
  const settings = await readSettings(settingsJson);

  const configuration = {
    colors: {
      adjustments: {}
    }
  };

  const colors = generateColorPalette(configuration);

  const newSettings = {
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

  await writeFileLog(settingsJson, JSON.stringify(newSettings, null, 2));
}

(async () => {
  let disable = process.argv[2] === "--disable";

  const settingsJson = `${await appDataPath()}/Code/User/settings.json`;
  await backupSettings(settingsJson);
  await generateSettings(settingsJson, disable);
})();
