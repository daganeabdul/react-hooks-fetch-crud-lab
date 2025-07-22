module.exports = {
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(YOUR_PACKAGE_HERE|@adobe/css-tools)/)"
    ],
    testEnvironment: "jsdom"
  };
  