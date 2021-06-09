import {
  STORE_EMAIL_PASS,
  STORE_STUDENT_INFO,
  STORE_PRINCIPAL_INFO,
  STORE_SCHOOL_INFO,
  STORE_TEACHER_INFO,
} from "./types";

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

export const setSchoolInfo = (
  principalMail,
  principalName,
  phone,
  selectStandard,
  refercode,
  teacherEmailAndSubject,
  subjects,
  schoolName
) => {
  return {
    type: STORE_SCHOOL_INFO,
    payload: {
      principalMail,
      principalName,
      selectStandard,
      refercode,
      teacherEmailAndSubject,
      subjects,
      schoolName,
    },
  };
};

export const setPrincipalInfo = (
  email,
  password,
  role,
  userName,
  schoolName,
  schoolRefCode,
  phoneNo
) => {
  return {
    type: STORE_PRINCIPAL_INFO,
    payload: {
      email,
      password,
      role,
      userName,
      schoolName,
      schoolRefCode,
      phoneNo,
    },
  };
};

export const setTeacherInfo = (
  role,
  userName,
  email,
  password,
  userStandard,
  googleLogin
) => {
  return {
    type: STORE_TEACHER_INFO,
    payload: { role, userName, email, password, userStandard, googleLogin },
  };
};
