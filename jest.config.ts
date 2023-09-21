import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testPathIgnorePatterns: ["__tests__/__fixtures__"],
  projects: [
    {
      preset: "ts-jest",
      displayName: "frontend",
      testEnvironment: "jest-environment-jsdom",
      setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
      testMatch: [
        "<rootDir>/__tests__/pages/**/*.test.tsx",
        "<rootDir>/__tests__/components/**/*.test.tsx",
      ],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
      },
      globals: {
        "ts-jest": {
          tsconfig: "tsconfig.test.json",
        },
      },
    },
    {
      preset: "ts-jest",
      displayName: "backend",
      testEnvironment: "node",
      setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
      testMatch: ["<rootDir>/__tests__/api/**/*.test.ts"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
      },
    },
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default createJestConfig(config);
