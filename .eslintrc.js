module.exports = {
    env: {
      browser: true,
      es2020: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    env: { jest: true, browser: true },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules: {
      'react/jsx-filename-extension': 'off',
      'import/prefer-default-export': 'off',
      'react/prop-types': 'off',
      'global-require': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  };
  