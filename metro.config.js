const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
 
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
 
<<<<<<< HEAD
module.exports = withNativewind(config, { input: "./src/global.css" });
=======
module.exports = withNativewind(config, { input: "./src/global.css" });
>>>>>>> 787ca73e1007f58d3b2cc1b780c5007ab1be117e
