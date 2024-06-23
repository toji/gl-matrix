import typescriptEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['coverage/*', 'dist/*', 'dist-cdn/*', 'docs/*'],
  },
  ...typescriptEslint.config({
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    extends: [
      ...typescriptEslint.configs.recommendedTypeChecked,
      ...typescriptEslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    rules: {
      // Styling
      'array-bracket-spacing': 'error',
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'curly': 'error',
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'new-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'no-spaced-func': 'error',
      'object-curly-spacing': ['error', 'always'],
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': ['error', 'after'],
      'semi': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'ignore'
      }],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
      'spaced-comment': ['error', 'always'],
      'wrap-regex': 'error',

      'max-len': ['error', { 'code': 120 }],
      'quotes': ['error', 'single', 'avoid-escape'],
      'quote-props': ['error', 'as-needed', { 'unnecessary': true }],

      // ESM
      'arrow-body-style': 'off',
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': 'error',
      'constructor-super': 'error',
      'generator-star-spacing': ['error', { 'before': true, 'after': false }],
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-this-before-super': 'error',
      'no-useless-constructor': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'properties'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-yield': 'error',

      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/restrict-template-expressions': 'off',
    }
  })
];
