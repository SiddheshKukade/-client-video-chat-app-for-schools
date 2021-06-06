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
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_EMAIL_PASS":
      return {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
        password: action.payload.password,
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
    default:
      return state;
  }
}
export default rootReducer;
export { initialState };
