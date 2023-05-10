import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactPhoneNumbers from './Index';

describe("ContactPhoneNumbers", () => {
  const mockPhoneNumbers = [
    { phoneNumber: "1234567890", type: "HOME" },
    { phoneNumber: "9876543210", type: "WORK" },
  ];
  const phoneTypes = {
    home: "HOME",
    work: "WORK"
  };

  const mockHandlePhoneChange = jest.fn();
  const mockHandlePhoneTypeChange = jest.fn();
  const mockDeleteField = jest.fn();
  const mockAddField = jest.fn();

  beforeEach(() => {
    render(
      <ContactPhoneNumbers
        label="Phone Numbers"
        phoneNumbers={mockPhoneNumbers}
        type="text"
        name="phone"
        handlePhoneChange={mockHandlePhoneChange}
        handlePhoneTypeChange={mockHandlePhoneTypeChange}
        deleteField={mockDeleteField}
        addField={mockAddField}
      />
    );
  });

  test("renders the component with provided phone numbers", () => {
    expect(screen.getByLabelText("Phone Numbers")).toBeInTheDocument();

    mockPhoneNumbers.forEach((phone) => {
      expect(screen.getByDisplayValue(phone.phoneNumber)).toBeInTheDocument();
    });
  });

  test("calls the handlePhoneChange function when input value changes", () => {
    const phoneInput = screen.getByDisplayValue(
      mockPhoneNumbers[0].phoneNumber
    );
    const newPhoneNumber = "987654321";

    fireEvent.change(phoneInput, { target: { value: newPhoneNumber } });

    expect(mockHandlePhoneChange).toHaveBeenCalledWith(expect.any(Object), 0);
    expect(mockHandlePhoneChange).toHaveBeenCalledTimes(1);
  });

  test("calls the deleteField function when delete button is clicked", () => {
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(mockDeleteField).toHaveBeenCalledTimes(1);
  });

  test('calls the addField function when "Add phone +" button is clicked', () => {
    const addButton = screen.getByText("Add phone +");

    fireEvent.click(addButton);

    expect(mockAddField).toHaveBeenCalledTimes(1);
  });
});
  