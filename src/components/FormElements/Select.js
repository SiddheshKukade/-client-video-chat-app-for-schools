import React from "react";
import { Field } from "formik";

function Select(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="Select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Field>
    </div>
  );
}

export default Select;
