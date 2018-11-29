const parseArgs = require("minimist");
const { getConfiguration } = require("dainty-shared").configuration;
const {
  generateColorScales,
  generateColorConstants
} = require("dainty-shared").colors;
const { buildSettings } = require("./builders");

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

  const colors = generateColorScales(configuration);
  const colorConstants = generateColorConstants(colors);

  await buildSettings(
    __dirname,
    configuration,
    argv.install || argv.i,
    argv.disable || argv.d,
    colors,
    colorConstants
  );
})();
