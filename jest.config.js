export default {
    testEnvironment : "node",
    testMatch : [
        "<rootDir>/src/*.test.js"
    ],
    rootDir : ".",
    collectCoverage : true,
    verbose : true,
    testPathIgnorePatterns: [
        "node_modules/",
        "dist/"
    ] 
}