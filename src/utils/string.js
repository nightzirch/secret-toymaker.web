export const replaceString = (str, replacements) => {
  let replacedString = str;

  Object.keys(replacements).forEach(key => {
    replacedString = replacedString.replace(
      new RegExp(key, "ig"),
      replacements[key]
    );
  });

  return replacedString;
};

/**
 * The following code snippet is based on:
 * https://redstapler.co/find-diff-between-2-strings-with-javascript/
 */
export const getDifference = (str1, str2) => {
  let diffKey = "";
  let diffValue = "";

  str1.split("").forEach((val, i) => {
    if (val !== str2.charAt(i)) diffKey += val;
  });

  str2.split("").forEach((val, i) => {
    if (val !== str1.charAt(i)) diffValue += val;
  });

  return { [diffKey]: diffValue };
};
