module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true
  },
  extends: ['standard', 'standard-react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  globals: {
    expect: 'readonly',
    it: 'readonly',
    context: 'readonly',
    jest: 'readonly',
    JSX: 'readonly'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': [0, 'unix'],
    quotes: ['error', 'single'],
    'semi': ['error', 'never'],
    camelcase: [
      0,
      {
        ignoreDestructuring: true
      }
    ],
    // globals: {
    //     'expect': 0,
    //     'it': 0,
    //     'context': 0,
    //     'jest': 0
    // },
    'no-console': 0,
    'no-constant-condition': 0,
    'eqeqeq': 0,
    'object-curly-spacing': ['error', 'always'],
    // 'css-ruleorselectorexpected': ['error', 'never'],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'react-hooks/rules-of-hooks': 'error'
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "no-unused-vars": ["off"],
        "no-undef": ["off"]
      }
    }
  ]
};
