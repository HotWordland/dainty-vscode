const util = require("util");
const fs = require("fs");
const exec = require("child_process").exec;
const appDataPath_ = require("appdata-path");

const execAsync = util.promisify(exec);
const writeFile = util.promisify(fs.writeFile);

async function appDataPath() {
  const path = appDataPath_();

  if (process.platform === "linux" && path.startsWith("C:")) {
    const { error, stdout } = await execAsync(`wslpath "${path}"`);

    if (error) {
      throw new Error(`Failed to exec \`wslpath "${path}"\``);
    }

    return stdout.slice(0, -1);
  }

  return path;
}

async function writeFileLog(...args) {
  console.log(`Writing to \`${args[0]}\`…`);
  await writeFile(...args);
  console.log(`Done writing to \`${args[0]}\`.`);
}

module.exports = {
  appDataPath,
  writeFileLog
};
