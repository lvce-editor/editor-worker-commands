import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  {
    ignores: ['**/server/**', '**/e2e/**', '**/memory/**'],
  },
  {
    rules: {
      'no-constant-condition': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      'no-useless-escape': 'off',
    },
  },
  {
    files: ['package.json'],
    rules: {
      'package-json/valid-main': 'off',
    },
  },
  {
    files: ['packages/**/*test.ts'],
    rules: {
      'sonarjs/assertions-in-tests': 'off',
      'jest/expect-expect': 'off',
    },
  },
]
