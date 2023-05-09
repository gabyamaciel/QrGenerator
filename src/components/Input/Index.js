const Input = ({ label, name, type, value, handleChange, labelPosition }) => {
  return (
    <label>
      {labelPosition === "before" && label}
      <input name={name} type={type} value={value} onChange={handleChange} />
      {labelPosition === "after" && label}
    </label>
  );
};

export default Input;
