import { useState } from "react";

import ContactEmails from "../ContactEmails/Index";
import ContactPhoneNumbers from "../ContactPhoneNumbers/Index";
import Input from "../Input/Index";
import { validate } from "../../utils/inputValidation";
import ErrorMessage from "../ErrorMessage/Index";
import styles from "./FormVCard.module.css";

const FormVCard = ({ handleOnSubmit }) => {
  const [contactData, setContactData] = useState({
    emails: [""],
    phoneNumbers: [{ phoneNumber: "", type: "HOME" }]
  });
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [isValid, setIsValid] = useState(true);
  const errorMessage = "One or more fields are invalid";

  const handleContactDataChange = (event, index) => {
    let updatedData = Object.assign({}, contactData);
    updatedData[event.target.name][index] =
      event.target.name === "phoneNumbers"
        ? {
            ...updatedData[event.target.name][index],
            phoneNumber: event.target.value
          }
        : event.target.value;

    setContactData(updatedData);
    setIsValid(true);
  };

  const handlePhoneTypeChange = (event, index) => {
    let updatedData = Object.assign({}, contactData);
    updatedData.phoneNumbers[index] = {
      ...updatedData.phoneNumbers[index],
      type: event.target.value
    };

    setContactData(updatedData);
  };

  const addField = (event) => {
    let updatedData = Object.assign({}, contactData);
    event.target.name === "phoneNumbers"
      ? updatedData[event.target.name].push({ phoneNumber: "", type: "HOME" })
      : updatedData[event.target.name].push("");

    setContactData(updatedData);
  };

  const deleteField = (event, index) => {
    let updatedData = Object.assign({}, contactData);
    updatedData[event.target.name].splice(index, 1);

    setContactData(updatedData);
  };

  const handleNameChange = (event) => {
    setName((currentState) => {
      return {
        ...currentState,
        [event.target.name]: event.target.value
      };
    });
    setIsValid(true);
  };

  const onSubmit = () => {
    let validation = validate(name.firstName) && validate(name.lastName);

    let vCard = `BEGIN:VCARD
      VERSION:2.1
      N:${name.lastName};${name.firstName}`;

    contactData.emails.forEach((email) => {
      validation = validation && validate(email);
      vCard += `\nEMAIL:${email}`;
    });

    contactData.phoneNumbers.forEach((phone) => {
      validation = validation && validate(phone);
      vCard += `\nTEL;${phone.type}:${phone.phoneNumber}`;
    });

    vCard += "\nEND:VCARD";

    setIsValid(validation);
    if (validation) {
      handleOnSubmit(vCard);
      setContactData({
        emails: [""],
        phoneNumbers: [{ phoneNumber: "", type: "HOME" }]
      });
      setName({ firstName: "", lastName: "" });
    }
  };

  return (
    <div className="formContainer">
      <Input
        label="First Name:"
        value={name.firstName}
        type="text"
        name="firstName"
        handleChange={handleNameChange}
        labelPosition="before"
      />

      <Input
        label="Last Name:"
        value={name.lastName}
        type="text"
        name="lastName"
        handleChange={handleNameChange}
        labelPosition="before"
      />
      <ContactPhoneNumbers
        label="Phone(s):"
        phoneNumbers={contactData.phoneNumbers}
        type="text"
        name="phoneNumbers"
        handlePhoneChange={handleContactDataChange}
        handlePhoneTypeChange={handlePhoneTypeChange}
        deleteField={deleteField}
        addField={addField}
      />
      <ContactEmails
        label="Email(s):"
        type="text"
        emails={contactData.emails}
        name="emails"
        handleOnChange={handleContactDataChange}
        deleteField={deleteField}
        addField={addField}
      />
      {!isValid && <ErrorMessage message={errorMessage} />}
      <input type="submit" value="Create" onClick={onSubmit} />
    </div>
  );
};

export default FormVCard;
