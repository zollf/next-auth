'use strict';

module.exports = {
  cache: true,
  cacheLocation: 'node_modules/.cache/stylelint',
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    /* Custom overrides */
    'color-hex-case': null,
    'color-hex-length': null,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': [
      'never',
      {
        ignore: ['after-declaration'],
      },
    ],
    'font-weight-notation': 'named-where-possible',
    'max-line-length': [
      250,
      {
        ignore: ['comments'],
        ignorePattern: ['/^@import\\s+/', '/url\\(/', '/linear-gradient\\(/'],
      },
    ],
    'no-descending-specificity': null, // Useful but doesn't play nice with scss nested rules, so disabled for now.
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', '/^var/'],
      },
    ],
    'selector-attribute-quotes': 'always',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-max-attribute': 2,
    'selector-max-universal': 2,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
    'value-keyword-case': null,

    /* Warnings */
    'comment-word-disallowed-list': [
      '/^TODO/',
      {
        severity: 'warning',
      },
    ],

    /* Sass stuff */
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'no-invalid-double-slash-comments': null,
    'scss/double-slash-comment-whitespace-inside': 'always',

    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'blockless-after-same-name-blockless'],
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/declaration-nested-properties': 'never',
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/partial-no-import': true,

    /* Disallow vendor prefixes */
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
};
