import { login, register } from '@api/auth';
import { ILoginResponse, IRegisterResponse } from '@domain/interfaces/api';
import { ILogin } from '@domain/interfaces/login';
import { IRegister } from '@domain/interfaces/register';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

const onLogin = async (credentials: ILogin, navigate: any) => {

  if (!isValidEmail(credentials.mail)) {
    console.error("Invalid email format");
    return;
  }

  if (!isValidPassword(credentials.password)) {
    console.error("Password must be at least 8 characters long");
    return;
  }

  const response: ILoginResponse | undefined = await login({
    mail: credentials.mail,
    password: credentials.password,
  });

  if (!response) {
    return;
  }

  console.log("Login successful");
  await navigate()
};

const onRegister = async (credentials: IRegister, navigate: any) => {
  const response: IRegisterResponse | undefined = await register({
    name: credentials.name,
    mail: credentials.mail,
    password: credentials.password,
  });

  if (!response) {
    return;
  }

  await onLogin(
    {
      mail: credentials.mail,
      password: credentials.password,
    },
    navigate,
  );
};

export default { onLogin, onRegister };

