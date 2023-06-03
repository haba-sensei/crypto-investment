module.exports = {
    preset: "ts-jest",
    verbose: true,
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    roots: ["./tests"],
    testMatch: [
        "<rootDir>/tests/**/*.test.ts",
        "<rootDir>/tests/**/*.test.tsx",
    ],
};
