import jest from "jest";

export default {
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.js"],
  testPathIgnorePatterns: ["node_modules/", "dist/"],
  verbose: true,
  collectCoverage: true,
};
