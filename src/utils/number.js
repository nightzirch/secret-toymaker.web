export const prefixZero = (number, length = 2) => {
  if (
    ["undefined", "null"].includes(typeof number) ||
    typeof number !== "number"
  )
    return null;
  const numString = number.toString();
  return Array(length - numString.length)
    .fill("0")
    .join("")
    .concat(numString);
};
