module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'prettier',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'simple-import-sort/exports': 'error',
    'no-console': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          [
            '^\\u0000',
            '^react',
            '^@react',
            '^[a-z]',
            '^@',
            '^[^.]',
            '^\\.'
          ]
        ]
      }
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        'props': 'never',
        'children': 'never'
      }
    ]
  },
  settings: {
    'react': {
      'pragma': 'React',
      'version': 'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@core', 'osf-leo/src/core'],
          ['@libs', 'osf-leo/src/libs'],
          ['@plugins', 'osf-leo/src/plugins']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  },
};