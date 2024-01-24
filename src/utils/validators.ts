// We can add more complex validation logic if needed

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    return "Email is required";
  }

  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  return null;
};
export const validateFirstName = (firstName: string): string | null => {
  if (!firstName.trim()) {
    return "First name is required";
  }

  return null;
};

export const validateLastName = (lastName: string): string | null => {
  if (!lastName.trim()) {
    return "Last name is required";
  }

  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password.trim()) {
    return "Password is required";
  } else if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }

  return null;
};
