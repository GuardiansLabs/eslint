'use strict';

module.exports = {
    rules: {
        // enforce consistent spacing inside array brackets
        'array-bracket-spacing': ['error', 'never'],

        // enforce consistent brace style for blocks
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // enforce camelcase naming convention
        camelcase: ['error', { properties: 'never' }],

        // require or disallow trailing commas
        'comma-dangle': ['error', 'always-multiline'],

        // enforce consistent spacing before and after commas
        'comma-spacing': ['error', { before: false, after: true }],

        // enforce consistent comma style
        'comma-style': ['error', 'last'],

        // enforce at least one newline at the end of files
        'eol-last': ['error', 'unix'],

        // enforce the consistent use of either function declarations or expressions
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],

        // enforce minimum and maximum identifier lengths
        'id-length': ['error', {
            min: 2,
            properties: 'never', exceptions: ['_'],
        }],

        // enforce consistent indentation
        indent: ['error', 4, { SwitchCase: 1, MemberExpression: 1 }],

        // enforce consistent spacing before and after keywords
        'keyword-spacing': ['error', {
            before: true, after: false,
            overrides: {
                else: { after: true },
                return: { after: true },
                do: { after: true },
                try: { after: true },
            },
        }],

        // enforce a maximum line length
        'max-len': ['error', 120, {
            ignoreComments: false, ignoreUrls: true,
            ignoreStrings: false, ignoreTemplateLiterals: true,
        }],

        // require constructor function names to begin with a capital letter
        'new-cap': ['error'],

        // require a newline after each call in a method chain
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

        // disallow Array constructors
        'no-array-constructor': ['error'],

        // disallow nested ternary expressions
        'no-nested-ternary': ['error'],

        // disallow Object constructors
        'no-new-object': ['error'],

        // disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary': ['error'],

        // disallow whitespace before properties
        'no-whitespace-before-property': ['error'],

        // enforce consistent spacing inside braces
        'object-curly-spacing': ['error', 'always'],

        // enforce variables to be declared either together or separately in functions
        'one-var': ['error', 'never'],

        // require or disallow padding within blocks
        'padded-blocks': ['error', {
            blocks: 'never', classes: 'always', switches: 'never',
        }],

        // require quotes around object literal property names
        'quote-props': ['error', 'as-needed'],

        // enforce the consistent use of either backticks, double, or single quotes
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

        // require or disallow semicolons instead of ASI
        semi: ['error', 'always'],

        // enforce consistent spacing before blocks
        'space-before-blocks': ['error', 'always'],

        // enforce consistent spacing before function definition opening parenthesis
        'space-before-function-paren': ['error', 'never'],

        // enforce consistent spacing inside parentheses
        'space-in-parens': ['error', 'never'],

        // require spacing around operators
        'space-infix-ops': ['error'],

        // disallow multiple empty lines
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],

        // disallow newline before directives & require newline after directives
        'lines-around-directive': ['error', { before: 'never', after: 'always' }],

        // disallow spaces between the key and the colon in object literals & 
        // require one space between the colon and the value in object literals
        'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    },
};
