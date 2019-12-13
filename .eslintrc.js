module.exports = {
    'extends': ['eslint:recommended', 'react-app'],
    'rules': {
      'indent': ['error', 2],
      'no-tabs': 2,
      'semi': 2,
      'camelcase': 'error',
      'arrow-parens': ['error', 'always'],
      'react/jsx-max-props-per-line': [1, { 'maximum': 1 }],
      'func-style': ['error', 'expression'],
      'no-useless-rename': ['error', {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      }],
      'no-var': 'error',
      'prefer-arrow-callback': ['error', {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      }],
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      }],
      'prefer-destructuring': ['error', {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      }, {
        enforceForRenamedProperties: false,
      }],
      'no-array-constructor': 'error',
      'arrow-body-style': 'error',
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      'import/no-commonjs': 'off',
      'import/no-amd': 'error',
      'import/exports-last': 'off',
      'line-comment-position': ['error', {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      }],
      'no-new-object': 'error',
      'semi-style': ['error', 'last'],
      'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
      'no-extend-native': 'error',
      'eqeqeq': ['error', 'always'],
      'no-empty': 'error',
      'no-console': 'warn',
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
      }
  };
  