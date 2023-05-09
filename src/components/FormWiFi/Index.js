import { useState } from "react";

import Input from "../Input/Index";
import styles from "./FormWiFi.module.css";
import { validate } from "../../utils/inputValidation";
import ErrorMessage from "../ErrorMessage/Index";

export default function FormWiFi({ handleOnSubmit }) {
  const [networkData, setNetworkData] = useState({ name: "", password: "" });
  const [networkType, setNetworkType] = useState("WPA");
  const [isValid, setIsValid] = useState(true);
  const errorMessage = "Invalid name or password";

  const handleChange = (event) => {
    setNetworkData((currentState) => {
      return {
        ...currentState,
        [event.target.name]: event.target.value
      };
    });
    setIsValid(true);
  };

  const onSubmit = () => {
    const validation =
      validate(networkData.name) && validate(networkData.password);
    setIsValid(validation);

    if (validation) {
      const wifiData = `WIFI:T:${networkType};S:${networkData.name};P:${networkData.password};;`;
      handleOnSubmit(wifiData);
    }
  };

  return (
    <div className="formContainer">
      <label htmlFor="dropdown">Type:</label>
      <select
        id="dropdown"
        value={networkType}
        onChange={(e) => setNetworkType(e.target.value)}
      >
        <option value="WPA">WPA</option>
        <option value="WEP">WEP</option>
        <option value="WPA2-EAP">WPA2-EAP</option>
      </select>
      <Input
        label="Network Name:"
        name="name"
        type="text"
        value={networkData.name}
        handleChange={handleChange}
        labelPosition="before"
      />
      <Input
        label="Network Password:"
        name="password"
        type="password"
        value={networkData.password}
        handleChange={handleChange}
        labelPosition="before"
      />
      {!isValid && <ErrorMessage message={errorMessage} />}
      <input type="submit" value="Create" onClick={onSubmit} />
    </div>
  );
}
