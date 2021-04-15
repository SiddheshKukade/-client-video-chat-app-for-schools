import { ErrorMessage, Field } from "formik";
import React from "react";
import TextErr from "./TextErr";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextErr} />
    </div>
  );
}

export default Input;
