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
    <>
      <label>{label}</label>
      {emails &&
        emails.map((email, index) => {
          return (
            <div className="dynamicInputContainer" key={`email${index}`}>
              <input
                type={type}
                name={name}
                value={email}
                onChange={(e) => handleOnChange(e, index)}
              />
              {index > 0 && (
                <button
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
        New email +
      </button>
    </>
  );
};

export default ContactEmails;
