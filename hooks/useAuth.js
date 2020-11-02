import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthContext);
};
