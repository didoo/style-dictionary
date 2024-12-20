// reference the compiled file ahead of time
// usually you would use 'style-dictionary/types' here but that only works after emitting D.TS files, so we use direct path here
import type { Config } from '../../types/Config.d.ts';

const cfg: Config = {
  source: ['__tests__/__json_files/*.ts'],
  platforms: {
    web: {
      transformGroup: 'web',
      prefix: 'smop',
      buildPath: '__tests__/__output/web/',
      files: [
        {
          destination: '_icons.css',
          format: 'scss/icons',
        },
        {
          destination: '_variables.css',
          format: 'scss/variables',
        },
        {
          destination: '_styles.js',
          format: 'javascript/module',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: 'smop',
      buildPath: '__tests__/__output/scss/',
      files: [
        {
          destination: '_icons.scss',
          format: 'scss/icons',
        },
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    less: {
      transformGroup: 'less',
      prefix: 'smop',
      buildPath: '__tests__/__output/less/',
      files: [
        {
          destination: '_icons.less',
          format: 'less/icons',
        },
        {
          destination: '_variables.less',
          format: 'less/variables',
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: '__tests__/__output/',
      files: [
        {
          destination: 'android/colors.xml',
          format: 'android/colors',
        },
        {
          destination: 'android/font_dimen.xml',
          format: 'android/fontDimens',
        },
        {
          destination: 'android/dimens.xml',
          format: 'android/dimens',
        },
      ],
      actions: ['android/copyImages'],
    },
    ios: {
      transformGroup: 'ios',
      buildPath: '__tests__/__output/ios/',
      files: [
        {
          destination: 'style_dictionary.plist',
          format: 'ios/plist',
        },
        {
          destination: 'style_dictionary.h',
          format: 'ios/macros',
        },
      ],
    },
    'react-native': {
      transformGroup: 'react-native',
      buildPath: '__tests__/__output/react-native/',
      files: [
        {
          destination: 'style_dictionary.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
}

export default cfg;
