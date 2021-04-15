import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  NativeSelect,
  TextField,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";

function SelectCompo(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <Field
        as={NativeSelect}
        variant="standard"
        // onChange={handleChange}
        name={name}
        id={name}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Field>
      <FormHelperText>With visually hidden label</FormHelperText>

      {/* <InputLabel shrink htmlFor={name}>
        Age
      </InputLabel>
      <Field as={Select} id={name} name={name} displayEmpty />

      {options.map((option) => (
        <MenuItem key={option.key} value={option.value}>
          {option.value}
        </MenuItem>
      ))} */}
      {/* <label htmlFor={name}>{label}</label>
      <Field as="Select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Field> */}
    </div>
  );
}

export default SelectCompo;
