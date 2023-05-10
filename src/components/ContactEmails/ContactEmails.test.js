import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactEmails from './Index';

describe('ContactEmails', () => {
  test('renders the component with provided emails', () => {
    const emails = ['email1@example.com', 'email2@example.com'];
    const label = 'Emails';
    render(
      <ContactEmails
        emails={emails}
        type="email"
        name="contactEmail"
        handleOnChange={() => {}}
        addField={() => {}}
        deleteField={() => {}}
        label={label}
      />
    );

    // Check if the label is rendered correctly
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    // Check if the input fields are rendered with the provided emails
    const inputElements = screen.getAllByRole('textbox', { type: 'text' });
    expect(inputElements).toHaveLength(emails.length);
    emails.forEach((email, index) => {
        expect(inputElements[index].value).toBe(email);
    });

    // Check if the "New email +" button is rendered
    const addButtonElement = screen.getByText('Add email +');
    expect(addButtonElement).toBeInTheDocument();
  });

  test('calls the handleOnChange function when input value changes', () => {
    const handleOnChangeMock = jest.fn();
    render(
      <ContactEmails
        emails={[""]}
        type="email"
        name="contactEmail"
        handleOnChange={handleOnChangeMock}
        addField={() => {}}
        deleteField={() => {}}
        label="Emails"
      />
    );

    // Get the input element
    const inputElement = screen.getByLabelText('Emails');

    // Simulate changing the input value
    const newEmail = 'test@example.com';
    fireEvent.change(inputElement, { target: { value: newEmail } });

    // Check if the handleOnChange function is called with the correct arguments
    expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
    expect(handleOnChangeMock).toHaveBeenCalledWith(expect.any(Object), 0);
  });
});