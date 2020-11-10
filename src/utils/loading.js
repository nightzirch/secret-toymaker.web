import { getDispatch } from "reactn";

export const dispatchWithLoading = async (key, ...props) => {
  const dispatches = getDispatch();

  dispatches.setLoading(key, true);
  const results = await dispatches[key](...props);
  dispatches.setLoading(key, false);

  return results;
};

export const dispatchWithCustomLoading = async (key, loadingKey, ...props) => {
  const dispatches = getDispatch();

  dispatches.setLoading(loadingKey, true);
  const results = await dispatches[key](...props);
  dispatches.setLoading(loadingKey, false);

  return results;
};

export const generateCustomLoadingKey = (key, id) => `${key}-${id}`;

export const generateCustomGiftLoadingKey = id => `gift-${id}`;
