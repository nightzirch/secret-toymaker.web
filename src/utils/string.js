import escapeStringRegexp from "escape-string-regexp";

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const replaceString = (str, replacements) => {
  let replacedString = str;

  Object.keys(replacements).forEach((key) => {
    replacedString = replacedString.replace(
      new RegExp(escapeStringRegexp(key), "ig"),
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
