export const getRouteRoot = (path) => {
  return `/${path.split("/")[1] || ""}`;
};

export const getRedirectUrl = () => {
  const params = new URL(document.location).searchParams;
  return params.get("redirect");
};

export const addRedirectUrl = (url) => {
  const redirectUrl = getRedirectUrl();
  console.log("yaboi", url, redirectUrl);
  return [url, redirectUrl && `redirect=${redirectUrl}`]
    .filter((l) => l)
    .join("?");
};
