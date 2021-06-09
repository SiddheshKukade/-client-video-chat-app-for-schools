import { STORE_EMAIL_PASS, STORE_STUDENT_INFO } from "./types";

export const setMailPassRole = (email, password, role, googleLogin) => {
  return {
    type: STORE_EMAIL_PASS,
    payload: { email, password, role, googleLogin },
  };
};
export const setStudentInfo = (
  role,
  name,
  fathername,
  dob,
  email,
  password,
  standard,
  phoneNo,
  googleLogin,
  schoolRefCode
) => {
  return {
    type: STORE_STUDENT_INFO,
    payload: {
      role,
      name,
      fathername,
      dob,
      email,
      password,
      standard,
      phoneNo,
      googleLogin,
      schoolRefCode,
    },
  };
};
