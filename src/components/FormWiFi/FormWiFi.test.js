import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormWiFi from './Index';

describe('FormWiFi', () => {
  const handleOnSubmit = jest.fn();

  beforeEach(() => {
    render(<FormWiFi handleOnSubmit={handleOnSubmit} />);
  });

  test('submits the form with valid WiFi data', () => {
    const nameInput = screen.getByLabelText('Network Name:');
    const passwordInput = screen.getByLabelText('Network Password:');
    const submitButton = screen.getByText('Create');

    // Enter valid values
    fireEvent.change(nameInput, { target: { value: 'MyNetwork' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // Click the submit button
    fireEvent.click(submitButton);

    // Verify that the handleOnSubmit function is called with the correct WiFi data
    expect(handleOnSubmit).toHaveBeenCalledWith('WIFI:T:WPA;S:MyNetwork;P:123456;;');
  });

  test('displays error message for invalid name or password', () => {
    const submitButton = screen.getByText('Create');

    // Click the submit button without entering any data
    fireEvent.click(submitButton);

    // Verify that the error message is displayed
    expect(screen.getByText('Invalid name or password')).toBeInTheDocument();
  });
});