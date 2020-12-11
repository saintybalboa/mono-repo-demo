module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/.vscode/'],
  watchPathIgnorePatterns: ['/node_modules/', '/.vscode/'],
  coverageReporters: ['html', 'text', 'json'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  globals: {},
  verbose: false,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
