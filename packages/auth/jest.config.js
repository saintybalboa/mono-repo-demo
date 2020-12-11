const globalConfig = require('../../jest.config');

module.exports = {
  ...globalConfig,
  collectCoverageFrom: ['./src/**/*.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '\\.test\\.ts$'
};
