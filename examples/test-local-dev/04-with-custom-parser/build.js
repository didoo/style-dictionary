import StyleDictionary from 'style-dictionary';
import { formats, transformGroups } from 'style-dictionary/enums';

import { processJsonFileWithTheme } from './build-parts/processJsonFileWithTheme.js';

// PROCESS THE DESIGN TOKENS

console.log('\n==============================================');
console.log('Build started...');

const themes = ['light', 'dark'];
for (const theme of themes) {
  console.log(`\nProcessing theme ${theme}...`);

  const styleDictionaryConfig = {
    hooks: {
      parsers: {
        'themed-json-parser': {
          pattern: /\.json$/,
          parser: ({ contents, filePath }) => {
            return processJsonFileWithTheme({ theme, jsonContent: contents, filePath });
          },
        },
      },
    },
    parsers: ['themed-json-parser'],
    source: ['src/global/border/radius.json', 'src/test/colors.json', 'src/test/component.json'],
    platforms: {
      test: {
        transformGroup: transformGroups.css,
        buildPath: `dist/${theme}/`,
        files: [{ destination: 'tokens.scss', format: formats.scssVariables }],
      },
    },
    log: { verbosity: 'verbose' },
  };
  const StyleDictionaryInstance = new StyleDictionary(styleDictionaryConfig);
  await StyleDictionaryInstance.hasInitialized;
  await StyleDictionaryInstance.buildAllPlatforms();
}

console.log('\nEnd processing');

console.log('\nBuild completed!');
console.log('\n==============================================');
