const initialState = {
  counter: 5,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 5 };
    case "DEC":
      return { counter: state.counter - 50 };
    default:
      return state;
  }
}
export default rootReducer;
export { initialState };
