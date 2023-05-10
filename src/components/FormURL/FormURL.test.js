import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormURL from './Index';

describe('FormURL', () => {
  const handleOnSubmit = jest.fn();

  beforeEach(() => {
    render(<FormURL handleOnSubmit={handleOnSubmit} />);
  });

  test('submits the form with valid URL', () => {
    const inputElement = screen.getByLabelText('URL:');
    const submitButton = screen.getByText('Create');

    // Enter a valid URL
    fireEvent.change(inputElement, { target: { value: 'https://example.com' } });

    // Click the submit button
    fireEvent.click(submitButton);

    // Verify that the handleOnSubmit function is called with the correct URL
    expect(handleOnSubmit).toHaveBeenCalledWith('https://example.com');
  });

  test('displays error message for invalid URL', () => {
    const inputElement = screen.getByLabelText('URL:');
    const submitButton = screen.getByText('Create');

    // Enter an invalid URL
    fireEvent.change(inputElement, { target: { value: 'Invalid URL' } });

    // Click the submit button
    fireEvent.click(submitButton);

    // Verify that the error message is displayed
    expect(screen.getByText('Invalid URL')).toBeInTheDocument();
  });
});
