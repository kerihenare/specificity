'use strict';

module.exports = {

  env: {
    es2020: true,
    'jest/globals': true,
    node: true
  },

  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'standard',
    'plugin:security/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    },
    sourceType: 'module'
  },

  plugins: [
    '@typescript-eslint',
    'security',
    'jest'
  ],

  rules: {
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'signature',

          // Fields
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          // Constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          // Methods
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method'
        ]
      }
    ],
    '@typescript-eslint/no-explicit-any': [
      'off'
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc'
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ],
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        minKeys: 2,
        natural: false
      }
    ]
  }

};
