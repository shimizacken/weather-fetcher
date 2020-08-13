module.exports = {
  trailingComma: 'none',
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  useTabs: false,
  bracketSpacing: true,

  overrides: [
    {
      files: ['*.scss.d.ts'],
      options: {
        tabWidth: 2
      }
    }
  ]
};
