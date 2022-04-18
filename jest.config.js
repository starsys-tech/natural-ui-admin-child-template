const globals = require('./jest/mocks/globals');

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/views/**/*.vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: globals,
};
