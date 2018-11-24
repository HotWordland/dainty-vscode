const culori = require("culori");

function generateScale(color, override, adjustments) {
  const maximumLightness = 100;
  const lightnessMultiplier = 2 + 5 / 16;
  let lightnessAdjustment = 0;

  const maximumChroma = 131.207;
  let chromaDivisor;
  let chromaAdjustment = 0;
  let chromaStartAdjustment = 0;
  let chromaEndAdjustment = 0;

  let hue;

  const lchOverride = override ? culori.lch(override) : null;

  if (!lchOverride) {
    chromaAdjustment = -2;
  }

  switch (color) {
    case "RED":
      hue = 90 / 4;
      chromaDivisor = 2.5;
      break;
    case "BLUE_GRAY":
      hue = 270 - 90 / 16;
      chromaDivisor = 13.125;

      if (!lchOverride) {
        lightnessAdjustment = 2;
        chromaEndAdjustment = -10;
      }
      break;
    case "BLUE":
      hue = 270 - 90 / 16;
      chromaDivisor = 3.5;
      break;
    case "BLUE_LESS_CHROMA":
      hue = 270 - 90 / 16;
      chromaDivisor = 5;
      break;
    case "BLUE_MORE_CHROMA":
      hue = 270 + 90 / 16;
      chromaDivisor = 2;
      break;
    case "CYAN":
      hue = 225 + 90 / 32;
      chromaDivisor = 4;
      break;
    case "PURPLE":
      hue = 315;
      chromaDivisor = 3;
      break;
    case "GREEN":
      hue = 180;
      chromaDivisor = 4.5;
      break;
    case "ORANGE":
      hue = 45;
      chromaDivisor = 6;
      break;
  }

  if (color === "BLUE_GRAY") {
    chromaAdjustment += adjustments.chroma ? adjustments.chroma : 0;
    lightnessAdjustment += adjustments.lightness ? adjustments.lightness : 0;
    chromaStartAdjustment += adjustments.chromaStart
      ? adjustments.chromaStart
      : 0;
    chromaEndAdjustment += adjustments.chromaEnd ? adjustments.chromaEnd : 0;
  } else {
    chromaAdjustment += adjustments.chroma ? adjustments.chroma : 0;
  }

  let scale = [];

  for (let i = 0; i < 40; i++) {
    scale.push({
      mode: "lch",
      h: lchOverride ? lchOverride.h : hue,
      l:
        (lchOverride && color === "BLUE_GRAY"
          ? lchOverride.l + ((maximumLightness - lchOverride.l) / 40) * i
          : maximumLightness - lightnessMultiplier * (39 - i)) +
        (lightnessAdjustment / 40) * (39 - i),
      c:
        (lchOverride ? lchOverride.c : maximumChroma / chromaDivisor) +
        (color === "BLUE_GRAY" ? chromaAdjustment / 3 : chromaAdjustment * 3) +
        (chromaStartAdjustment / 40) * (39 - i) +
        (chromaEndAdjustment / 40) * i
    });
  }

  return scale.map(culori.formatter("hex"));
}

function generateColorPalette(configuration) {
  const overrides = configuration.colors.overrides
    ? configuration.colors.overrides
    : {};

  function handleVariant(scale) {
    if (configuration.variant !== "light") {
      return scale;
    } else {
      return scale.reverse();
    }
  }

  return {
    blueGray: handleVariant(
      generateScale(
        "BLUE_GRAY",
        overrides.blueGray,
        configuration.colors.adjustments
      )
    ),
    blue: handleVariant(
      generateScale("BLUE", overrides.blue, configuration.colors.adjustments)
    ),
    blueLessChroma: handleVariant(
      generateScale(
        "BLUE_LESS_CHROMA",
        overrides.blueLessChroma,
        configuration.colors.adjustments
      )
    ),
    blueMoreChroma: handleVariant(
      generateScale(
        "BLUE_MORE_CHROMA",
        overrides.blueMoreChroma,
        configuration.colors.adjustments
      )
    ),
    cyan: handleVariant(
      generateScale("CYAN", overrides.cyan, configuration.colors.adjustments)
    ),
    purple: handleVariant(
      generateScale(
        "PURPLE",
        overrides.purple,
        configuration.colors.adjustments
      )
    ),
    orange: handleVariant(
      generateScale(
        "ORANGE",
        overrides.orange,
        configuration.colors.adjustments
      )
    ),
    green: handleVariant(
      generateScale("GREEN", overrides.green, configuration.colors.adjustments)
    ),
    red: handleVariant(
      generateScale("RED", overrides.red, configuration.colors.adjustments)
    ),
    black: "#000000",
    white: "#ffffff"
  };
}

function alpha(color, alpha) {
  return (
    color +
    Math.round(alpha * 255)
      .toString(16)
      .padStart(2, "0")
  );
}

module.exports = {
  generateColorPalette,
  alpha
};
