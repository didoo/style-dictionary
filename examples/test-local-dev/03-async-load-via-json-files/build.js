import StyleDictionary from 'style-dictionary';
// this is style dictionary's internal method for combining JSON files
// NOTE: it does not work because it's importing other files from SD that are not available in this folder
// import combineJSON from './build-parts/combineJSON.js';
// we use directly the code from SD for testing purpose, if one day we need something similar we'll figure out how to do it properly
import combineJSON from '../../../lib/utils/combineJSON.js';

// READ TOKENS FROM JSON FILES

const tokens = await combineJSON([`src/**/*.json`], true, () => {}, true, true);

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
