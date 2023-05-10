import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorMessage from './Index';

describe('ErrorMessage', () => {
  test('renders the error message correctly', () => {
    const errorMessage = 'This is an error message';

    render(<ErrorMessage message={errorMessage} />);

    const errorMessageElement = screen.getByText(errorMessage);

    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('error_message');
  });
});