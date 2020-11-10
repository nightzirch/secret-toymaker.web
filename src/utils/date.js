export const daysUntilFutureDate = (date, withSuffix = false) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const now = new Date();
  const days = Math.round(Math.abs((now - date) / oneDay));
  // eslint-disable-next-line no-nested-ternary
  const suffix = withSuffix ? (days === 1 ? " day" : " days") : "";

  return `${days}${suffix}`;
};
