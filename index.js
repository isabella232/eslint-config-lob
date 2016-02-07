'use strict';

module.exports = {
  env: {
    'es6': true,
    'mocha': true,
    'node': true
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'block-spacing': [2, 'always'],
    'brace-style': 2,
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'consistent-this': [2, 'self'],
    'constructor-super': 2,
    'curly': 2,
    'default-case': 0,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    'eqeqeq': 2,
    'generator-star-spacing': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true, 'mode': 'minimum' }],
    'linebreak-style': [2, 'unix'],
    'new-parens': 2,
    'no-arrow-condition': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-negated-in-lhs': 2,
    'no-new': 2,
    'no-obj-calls': 2,
    'no-redeclare': [2, { 'builtinGlobals': true }],
    'no-regex-spaces': 2,
    'no-shadow': [2, { 'builtinGlobals': true, 'hoist': 'all' }],
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-useless-concat': 2,
    'no-var': 2,
    'no-with': 2,
    'object-curly-spacing': [2, 'always'],
    'object-shorthand': [2, 'properties'],
    'one-var': [2, 'never'],
    'operator-linebreak': [2, 'after'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-reflect': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'require-yield': 2,
    'space-after-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': 2,
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': 2,
    'strict': [2, 'global'],
    'use-isnan': 2,
    'valid-jsdoc': [2, {
      'requireParamDescription': false,
      'requireReturn': false,
      'requireReturnDescription': false
    }],
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yoda': 2
  }
};
