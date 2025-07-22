module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(\\@adobe\\/css-tools)/)", 
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
  };
  