/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

module.exports = {
  cacheDirectory: 'node_modules/.cache/jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    'src/components/Cards/*.tsx',
    '!src/**/*.d.ts', // Ignore declaration files
    '!src/test/**/*', // Ignore test helpers/config
    '!src/typings/**/*', // Ignore typings
    // Ignore config files
    '!src/config/**/*',
    '!src/pages/_document.tsx',
    '!src/hooks/**', //TODO
    '!src/lib/**',
    '!src/util/**',
    '!src/pages/_app.tsx',
    '!src/pages/api/**',
    '!src/pages/admin/**',
    '!src/components/Admin/**/*',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '\\.(gif|jpg|pdf|png|md)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(css)': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/test/config.ts'],
  // additional prop from a github issue: https://github.com/zeit/next.js/issues/8663
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
};
