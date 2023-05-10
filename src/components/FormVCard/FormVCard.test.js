import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormVCard from './Index';

describe('FormVCard', () => {
  const handleOnSubmit = jest.fn();

  beforeEach(() => {
    render(<FormVCard handleOnSubmit={handleOnSubmit} />);
  });

  test('submits the form with valid vCard data', () => {
    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const phoneInput = screen.getByLabelText('Phone(s):');
    const emailInput = screen.getByLabelText('Email(s):');
    const submitButton = screen.getByText('Create');

    // Enter valid values
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(phoneInput, { target: { value: '123456789' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Click the submit button
    fireEvent.click(submitButton);

    // Verify that the handleOnSubmit function is called with the correct vCard data
    expect(handleOnSubmit).toHaveBeenCalledWith(expect.stringContaining('John'));
    expect(handleOnSubmit).toHaveBeenCalledWith(expect.stringContaining('Doe'));
    expect(handleOnSubmit).toHaveBeenCalledWith(expect.stringContaining('123456789'));
    expect(handleOnSubmit).toHaveBeenCalledWith(expect.stringContaining('test@example.com'));
  });

  test('displays error message for invalid form data', () => {
    const submitButton = screen.getByText('Create');

    // Click the submit button without entering any data
    fireEvent.click(submitButton);

    // Verify that the error message is displayed
    expect(screen.getByText('One or more fields are invalid')).toBeInTheDocument();
  });
});