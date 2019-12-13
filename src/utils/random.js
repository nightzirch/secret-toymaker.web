export const getRandomInt = (initMin, initMax) => {
  const min = Math.ceil(initMin);
  const max = Math.floor(initMax);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomFromArray = array => {
  const i = getRandomInt(0, array.length);
  return array[i];
};

export const getRandomKeyFromObject = object => {
  const keys = Object.keys(object);
  const i = getRandomInt(0, keys.length - 1);
  return keys[i];
};

export const getRandomPropFromObject = object => {
  const keys = Object.keys(object);
  const i = getRandomInt(0, keys.length - 1);
  return object[keys[i]];
};
