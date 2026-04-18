// @ts-check
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
  // TypeScript + TSX
  ...tseslint.configs.recommended,

  // Astro files
  ...astro.configs.recommended,

  // React
  {
    files: ['**/*.{tsx,jsx}'],
    plugins: { react, 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },

  // Shared overrides
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      'dist/',
      '.astro/',
      '.output/',
    ],
  },
)
