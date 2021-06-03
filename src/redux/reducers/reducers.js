const initialState = {
  role: "",
  email: "",
  password: "",
  userName: "",
  schoolName: "",
  schoolRefCode: "",
  teacherMails: [],
  stanardRange: [],
  phoneNo: "",
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
    default:
      return state;
  }
}
export default rootReducer;
export { initialState };
