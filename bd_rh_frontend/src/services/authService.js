import api from "./api";

export const login = async ({ nap_id, password }) => {
  return api.post("/auth/login", { nap_id, password });
};
