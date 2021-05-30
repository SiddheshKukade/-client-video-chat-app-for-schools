import React from "react";
import { ErrorMessage, Field } from "formik";
import TextErr from "./TextErr";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
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

export default RadioButtons;
