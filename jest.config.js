module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    "roots": [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globals: {
        "ts-jest": {
            tsConfigFile: "tsconfig.json"
        }
    },
    testEnvironment: 'node',
    testMatch: ["**/__tests__/specs/**/*.+(ts|tsx|js)"],
};
