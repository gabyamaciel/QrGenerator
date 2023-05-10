import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import { fetchQRBlob } from "./GetQrService";

require('jest-fetch-mock').enableMocks()

describe('fetchQRBlob', () => {
  const API_URL = 'https://2i07qgrgpl.execute-api.us-east-1.amazonaws.com/default/qrcode';

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('fetches QR blob successfully', async () => {
    const content = 'example';
    const mockResponse = new Blob();

    fetchMock.mockResponseOnce(mockResponse);

    const result = await fetchQRBlob(content);
    
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}?content=${encodeURIComponent(content)}`);

    expect(result).toBeTruthy();
  });

  test('returns null on error', async () => {
    const content = 'example';
    const errorMessage = 'Network error';

    fetchMock.mockRejectOnce(new Error(errorMessage));

    const result = await fetchQRBlob(content);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}?content=${encodeURIComponent(content)}`);

    expect(result).toBeNull();
  });
});