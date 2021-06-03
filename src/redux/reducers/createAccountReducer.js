const userState = {
  role: "",
  email: "",
  password: "",
};

function createAccountReducer(state = userState, action) {
  switch (action.type) {
    case "STORE_EMAIL_PASS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
export default createAccountReducer;
export { userState };
