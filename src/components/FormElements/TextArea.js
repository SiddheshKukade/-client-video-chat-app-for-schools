import React from "react";
import { ErrorMessage, Field } from "formik";
import TextErr from "./TextErr";

function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} {...rest} />
      <ErrorMessage name={name} component={TextErr} />
    </div>
  );
}

export default TextArea;
