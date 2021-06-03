import { STORE_EMAIL_PASS } from "./types";

export const setMailPassRole = (email, password, role) => {
  return {
    type: STORE_EMAIL_PASS,
    payload: { email, password, role },
  };
};
