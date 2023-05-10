import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateQr from "./Index";

describe("CreateQr", () => {
  test("renders the component", () => {
    render(<CreateQr />);
    
    // Assert that the component renders without throwing an error
    expect(screen.getByText("QR Generator")).toBeInTheDocument();
  });
});