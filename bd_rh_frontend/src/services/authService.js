import api from "./api";

export const login = async ({ nap_id, password }) => {
  return api.post("/auth/login", { nap_id, password });
};
export const register = async ({ nap_id, nome, password, role }) => {
  return api.post("/auth/register", { nap_id, nome, password, role });
};
