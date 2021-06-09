const initialState = {
  role: "",
  email: "",
  password: "",
  userName: "",
  schoolName: "",
  schoolRefCode: "",
  teacherMails: [],
  stanardRange: [],
  phoneNo: null,
  dob: null,
  standard: null,
  googleLogin: false,
  fatherName: "",
  userStandard: null,
  SCHOOL_principalName: "",
  SCHOOL_selectStandard: [],
  SCHOOL_refercode: "",
  SCHOOL_teacherEmailAndSubject: {},
  SCHOOL_schoolName: "",
  SCHOOL_principalMail: "",
  SCHOOL_subjects: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_EMAIL_PASS":
      return {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
        password: action.payload.password,
        googleLogin: action.payload.googleLogin,
      };
      break;
    case "STORE_STUDENT_INFO":
      return {
        ...state,
        role: action.payload.role,
        userName: action.payload.name,
        fatherName: action.payload.fathername,
        dob: action.payload.dob,
        email: action.payload.email,
        password: action.payload.password,
        standard: action.payload.standard,
        phoneNo: action.payload.phoneNo,
        googleLogin: action.payload.googleLogin,
        schoolRefCode: action.payload.schoolRefCode,
      };
    case "STORE_SCHOOL_INFO":
      return {
        ...state,
        SCHOOL_principalMail: action.payload.principalMail,
        SCHOOL_principalName: action.payload.principalName,
        SCHOOL_selectStandard: action.payload.selectStandard,
        SCHOOL_refercode: action.payload.refercode,
        SCHOOL_teacherEmailAndSubject: action.payload.teacherEmailAndSubject,
        SCHOOL_schoolName: action.payload.schoolName,
        SCHOOL_subjects: action.payload.subjects,
      };
    case "STORE_PRINCIPAL_INFO":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role,
        userName: action.payload.userName,
        schoolName: action.payload.schoolName,
        schoolRefCode: action.payload.schoolRefCode,
        phoneNo: action.payload.phoneNo,
      };
    case "STORE_TEACHER_INFO":
      return {
        ...state,
        role: action.payload.role,
        userName: action.payload.userName,
        email: action.payload.email,
        password: action.payload.password,
        userStandard: action.payload.userStandard,
        googleLogin: action.payload.googleLogin,
      };
    default:
      return state;
  }
}
export default rootReducer;
export { initialState };
