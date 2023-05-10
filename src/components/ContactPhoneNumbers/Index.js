const phoneTypes = {
  home: "HOME",
  work: "WORK"
};

const ContactPhoneNumbers = ({
  label,
  phoneNumbers,
  type,
  name,
  handlePhoneChange,
  handlePhoneTypeChange,
  deleteField,
  addField
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {phoneNumbers &&
        phoneNumbers.map((phone, index) => {
          return (
            <div key={`phone${index}`}>
              <div className="dynamicInputContainer">
                <input
                  id={name}
                  type={type}
                  name={name}
                  value={phone.phoneNumber}
                  onChange={(e) => handlePhoneChange(e, index)}
                />
                {index > 0 && (
                  <button
                    className="deleteButton"
                    name={name}
                    type="button"
                    onClick={(e) => deleteField(e, index)}
                  >
                    Delete
                  </button>
                )}
              </div>
              <label>
                <input
                  name={`phoneType${index}`}
                  value={phoneTypes.home}
                  type="radio"
                  checked={phone.type === phoneTypes.home}
                  onChange={(e) => handlePhoneTypeChange(e, index)}
                />
                {phoneTypes.home}
              </label>
              <label>
                <input
                  name={`phoneType${index}`}
                  value={phoneTypes.work}
                  type="radio"
                  checked={phone.type === phoneTypes.work}
                  onChange={(e) => handlePhoneTypeChange(e, index)}
                />
                {phoneTypes.work}
              </label>
            </div>
          );
        })}
      <button
        className="addButton"
        name={name}
        type="button"
        onClick={addField}
      >
        Add phone +
      </button>
    </div>
  );
};

export default ContactPhoneNumbers;
