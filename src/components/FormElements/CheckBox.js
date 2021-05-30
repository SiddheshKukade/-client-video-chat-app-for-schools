import React from "react";
import { ErrorMessage, Field } from "formik";
import TextErr from "./TextErr";
import Checkbox from "@material-ui/core/Checkbox";
import { InputLabel } from "@material-ui/core";
function CheckBox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      {/* <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <Field
        as={Checkbox}
        color="secondary"
        // onChange={handleChange}x
        name={name}
        id={name}
        {...rest}
      ></Field> */}
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextErr} />
    </div>
  );
}

export default CheckBox;
