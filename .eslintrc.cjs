module.exports = {
  ignorePatterns: ['*.d.ts'],
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:import/typescript', 'prettier'],
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: '{bun,bun:*}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{elysia,@elysiajs/*}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
  globals: {
    Bun: false,
  },
}
