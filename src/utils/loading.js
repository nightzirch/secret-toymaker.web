import { getDispatch } from "reactn";

export const dispatchWithLoading = async (key, ...props) => {
  const dispatches = getDispatch();

  dispatches.setLoading(key, true);
  await dispatches[key](...props);
  dispatches.setLoading(key, false);
};
