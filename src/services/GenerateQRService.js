const API_URL =
  "https://2i07qgrgpl.execute-api.us-east-1.amazonaws.com/default/qrcode";

export async function fetchQRBlob(content) {
  const encodedContent = encodeURIComponent(content);

  try {
    const response = await fetch(`${API_URL}?content=${encodedContent}`);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.log(error);
    return null;
  }
}
