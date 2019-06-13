module.exports = {
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testRegex: "/src/__tests__/.*\\.ts$"
};
