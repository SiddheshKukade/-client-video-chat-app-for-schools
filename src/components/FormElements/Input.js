import { ErrorMessage, Field } from "formik";
import React from "react";
// import TextErr from "./TextErr";
import { TextField } from "@material-ui/core";

function Input(props) {
  const { label, name, errMsg, isTouched, ...rest } = props;

  return (
    <Field
      placeholder="last name"
      name={name}
      as={TextField}
      variant="outlined"
      helperText={errMsg}
      error={isTouched && errMsg}
      label={label}
      {...rest}
    />
    // <>   <Field name={name}>
    //   {(field) => (
    //     <TextField
    //       id={name}
    //       name={name}
    //       variant="outlined"
    //       helperText={errMsg}
    //       error={isTouched && errMsg}
    //       label={label}
    //       fullWidth
    //       {...rest}
    //     />
    //   )}
    // <>
    //   <label htmlFor={name}>{label}</label>
    //   <Field id={name} name={name} {...rest} as={<TextField />} />
    //   {/* <ErrorMessage name={name} component={TextErr} />  */}
    //   {/* </Field> */}
    // </>
  );
}

export default Input;
