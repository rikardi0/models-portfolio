const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExports = {
  dron: tryRequire("./Dron.png") || require("./Sombra.png"),
  dronPrueba: tryRequire("./Roughness.png") || require("./Sombra.png"),
};

export default imageExports;
