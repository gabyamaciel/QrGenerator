const ContactEmails = ({
  emails,
  type,
  name,
  handleOnChange,
  addField,
  deleteField,
  label
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {emails &&
        emails.map((email, index) => {
          return (
            <div className="dynamicInputContainer" key={`email${index}`}>
              <input
                id={name}
                type={type}
                name={name}
                value={email}
                onChange={(e) => handleOnChange(e, index)}
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
          );
        })}
      <button
        className="addButton"
        name={name}
        type="button"
        onClick={addField}
      >
        Add email +
      </button>
    </div>
  );
};

export default ContactEmails;
