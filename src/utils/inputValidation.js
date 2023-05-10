export const validate = (input) => {
  if (!input) {
    return false;
  }
  return true;
};

export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export const validatePhoneNumber = (phoneNumber) => {
  if (!validate(phoneNumber)) return false;

  return /^\d+$/.test(phoneNumber);
}

export const validateEmail = (email) => {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!validate(email)) return false;
  
  return emailPattern.test(email);
}