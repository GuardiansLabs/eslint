'use strict';

module.exports = {
    rules: {
        // disallow empty functions, except for standalone funcs/arrows
        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        }],
  
        // enforce dot notation whenever possible
        'dot-notation': ['error', { allowKeywords: true }],

        // require the use of === and !==
        eqeqeq: ['error', 'always', { null: 'always' }],

        // disallow lexical declarations in case clauses
        'no-case-declarations': ['error'],

        // disallow the use of eval()
        'no-eval': ['error', { allowIndirect: false }],
        
        // disallow the use of eval()-like methods
        'no-implied-eval': ['error'],

        // disallow function declarations and expressions inside loop statements
        'no-loop-func': ['error'],

        // disallow new operators with the Function object
        'no-new-func': ['error'],

        // disallow unnecessary escape characters
        'no-useless-escape': ['error'],

        // disallow else after a return in an if
        'no-else-return': ['error', { allowElseIf: false }],

        // requires to declare all vars on top of their containing scope
        'vars-on-top': ['error'],
            
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 'off',

        // disallow implicit type conversions
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],
    },
};
