export const getRouteRoot = path => {
  return `/${path.split("/")[1] || ""}`;
};
