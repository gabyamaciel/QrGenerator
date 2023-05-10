import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from "./Index";

describe("Input", () => {
  test("renders input field with label", () => {
    const label = "Username:";
    const name = "username";
    const type = "text";
    const value = "";
    const handleChange = jest.fn();
    const labelPosition = "before";

    render(
      <Input
        label={label}
        name={name}
        type={type}
        value={value}
        handleChange={handleChange}
        labelPosition={labelPosition}
      />
    );

    // Assert label and input field are rendered
    const labelElement = screen.getByText(label);
    const inputElement = screen.getByLabelText(label);

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", name);
    expect(inputElement).toHaveAttribute("type", type);
    expect(inputElement).toHaveValue(value);

    // Simulate user input
    const inputValue = "testuser";
    fireEvent.change(inputElement, { target: { value: inputValue } });

    // Assert handleChange is called with the correct value
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});