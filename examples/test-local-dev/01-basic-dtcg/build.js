import StyleDictionary from 'style-dictionary';

// PROCESS THE DESIGN TOKENS

console.log('\n==============================================');
console.log('Build started...');

const styleDictionaryConfig = {
  source: [`src/**/*.json`],
  platforms: {
    test: {
      transformGroup: 'css',
      buildPath: `dist/`,
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
        },
      ],
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
