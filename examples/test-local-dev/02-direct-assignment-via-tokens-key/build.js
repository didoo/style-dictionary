import StyleDictionary from 'style-dictionary';

// SOURCE TOKENS

const tokens = {
  colors: {
    black: { value: '#000000', type: 'color' },
    white: { value: '#ffffff', type: 'color' },
    orange: {
      100: { value: '#fffaf0', type: 'color' },
      200: { value: '#feebc8', type: 'color' },
      300: { value: '#fbd38d', type: 'color' },
      400: { value: '#f6ad55', type: 'color' },
      500: { value: '#ed8936', type: 'color' },
      600: { value: '#dd6b20', type: 'color' },
      700: { value: '#c05621', type: 'color' },
      800: { value: '#9c4221', type: 'color' },
      900: { value: '#7b341e', type: 'color' },
    },
  },
  dimensions: {
    sm: { value: '123px', type: 'size' },
    md: { value: '24px', type: 'size' },
    lg: { value: '48px', type: 'size' },
  },
};

// PROCESS THE DESIGN TOKENS

console.log('\n==============================================');
console.log('Build started...');

const styleDictionaryConfig = {
  tokens: tokens,
  platforms: {
    test: {
      transformGroup: 'css',
      buildPath: `dist/`,
      files: [{ destination: 'tokens.scss', format: 'scss/variables' }],
    },
  },
};

const StyleDictionaryInstance = new StyleDictionary(styleDictionaryConfig);
console.log(`\nProcessing...`);
await StyleDictionaryInstance.hasInitialized;
await StyleDictionaryInstance.buildAllPlatforms();
console.log('\nEnd processing');

console.log('\nBuild completed!');
console.log('\n==============================================');
