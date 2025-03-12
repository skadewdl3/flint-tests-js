export default {
    testEnvironment : "node",
    testMatch : [
        "<rootDir>/src/*.test.ts"
    ],
    rootDir : ".",
    collectCoverage : true,
    verbose : true,
    testPathIgnorePatterns: [
        "node_modules/",
        "dist/"
    ] 
}