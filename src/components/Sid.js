import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialState } from "../redux/reducers/reducers";
const Sid = () => {
  const num = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count value is {num}</h1>

      <button onClick={() => dispatch({ type: "INC" })}>Add 5 </button>
      <button onClick={() => dispatch({ type: "DEC" })}>Subtract 50</button>
    </div>
  );
};

export default Sid;
