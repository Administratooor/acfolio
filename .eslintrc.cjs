module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
  ],
  rules: {
    'import/no-unused-modules': [1, { unusedExports: true }],
    'react/react-in-jsx-scope': 'off', // With React 17+ and new JSX transform
    'no-unused-vars': 'warn', // Avertir sur les variables inutilisées
    'react/prop-types': 'off', // Désactive les prop-types si vous utilisez TypeScript
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
