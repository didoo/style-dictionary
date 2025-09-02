export const processJsonFileWithTheme = ({ theme, jsonContent, filePath }) => {
  // console.log(`running processJsonFileWithTheme / with theme: ${theme} / on file: ${filePath} / with jsonContent: ${jsonContent}`);
  console.log(`running processJsonFileWithTheme / with theme: ${theme} / on file: ${filePath}`);
  const objContent = JSON.parse(jsonContent);
  Object.values(objContent).forEach((slice) => {
    replaceThemedValues(theme, slice);
  });
  console.log(`objContent for ${filePath}\n`, JSON.stringify(objContent, null, 2));
  return objContent;
};

function replaceThemedValues(theme, slice) {
  if (slice.themed) {
    if (slice.value && slice.value[theme]) {
      slice.value = slice.value[theme];
      delete slice.themed;
    } else {
      console.error(
        `ERROR - Found themed token without \`${theme}\` value:`,
        JSON.stringify(slice, null, 2),
      );
    }
  } else {
    Object.values(slice).forEach((subslice) => {
      if (typeof subslice === 'object') {
        replaceThemedValues(theme, subslice);
      }
    });
  }
  return slice;
}
