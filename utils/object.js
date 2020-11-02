export const getKeyByValue = (obj, value) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return keys[values.indexOf(value)];
};
