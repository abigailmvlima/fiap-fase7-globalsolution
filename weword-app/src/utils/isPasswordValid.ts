export const isPasswordValid = (password: string) => {
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d{6})(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{10}$/;
  return passwordPattern.test(password);
};
