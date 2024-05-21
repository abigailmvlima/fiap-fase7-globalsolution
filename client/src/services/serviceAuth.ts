import { login } from 'api/auth';
import { ILoginResponse } from 'domains/interfaces/api';
import { ILogin } from 'domains/interfaces/login';

const onLogin = async (credentials: ILogin, navigate: any) => {
  const response: ILoginResponse | undefined = await login({ mail: credentials.mail, password: credentials.password});
  if (!response) {
    return;
  }
  navigate('/home')
};

export default { onLogin };
