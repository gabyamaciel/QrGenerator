import { useState } from "react";

import Input from "../Input/Index";
import { validate } from "../../utils/inputValidation";
import ErrorMessage from "../ErrorMessage/Index";

import styles from "./FormURL.module.css";

export default function FormURL({ handleOnSubmit }) {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const errorMessage = "Invalid URL";

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setIsValid(true);
  };

  const onSubmit = () => {
    const validation = validate(url);
    setIsValid(validation);

    if (validation) {
      handleOnSubmit(url);
      setUrl("");
    }
  };

  return (
    <div className="formContainer">
      <Input
        label="URL:"
        type="text"
        value={url}
        handleChange={handleUrlChange}
        name="URL"
        labelPosition="before"
      />
      {!isValid && <ErrorMessage message={errorMessage} />}
      <input type="submit" value="Create" onClick={onSubmit} />
    </div>
  );
}
