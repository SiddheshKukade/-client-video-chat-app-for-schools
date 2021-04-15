import React from "react";
import Input from "../FormElements/Input";
import Select from "../FormElements/Select";
import TextArea from "../FormElements/TextArea";
import RadioButtons from "../FormElements/RadioButtons";
import CheckBox from "../FormElements/CheckBox";
import DatePicker from "./../FormElements/DatePicker";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;

    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
  return <div></div>;
}

export default FormikControl;
