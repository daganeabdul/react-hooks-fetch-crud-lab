module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(\\@adobe\\/css-tools)/)", 
    ],
  };
  