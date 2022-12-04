import type {Config} from '@jest/types';

import baseConfig from '../jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  testTimeout: 10000,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/**/entry-point.ts',
    '!<rootDir>/**/app.ts',
    '!<rootDir>/src/application/orm/**/*.ts',
  ],
  coverageDirectory: 'coverage/e2e',
  testMatch: ['<rootDir>/tests/e2e/**/*.spec.ts'],
  setupFiles: ['<rootDir>/tests/integration/setup-env.ts'],
};

export default config;
