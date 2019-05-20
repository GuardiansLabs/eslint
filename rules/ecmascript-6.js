'use strict';

module.exports = {
    rules: {
        // require braces around arrow function bodies
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],

        // require parentheses around arrow function arguments
        'arrow-parens': ['error', 'as-needed'],

        // enforce consistent spacing before and after the arrow in arrow functions
        'arrow-spacing': ['error', { before: true, after: true }],

        // disallow reassigning const variables
        'no-const-assign': ['error'],

        // disallow duplicate class members
        'no-dupe-class-members': ['error'],

        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': ['error'],

        // require method and property shorthand syntax for object literals
        'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
  
        // disallow unnecessary constructors
        'no-useless-constructor': ['error'],

        // require let or const instead of var
        'no-var': ['error'],

        // require arrow functions as callbacks
        'prefer-arrow-callback': ['error'],

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': ['error'],

        // require template literals instead of string concatenation
        'prefer-template': ['error'],

        // require or disallow spacing around embedded expressions of template strings
        'template-curly-spacing': ['error', 'never'],
    },
};
