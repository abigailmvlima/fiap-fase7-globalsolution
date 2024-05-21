import axios from 'axios';
import {
  ILoginData,
  ILoginResponse,
  IRegsiterUserData,
} from 'domains/interfaces/api';
import serviceMovies from 'services/serviceMovies';

const API_BASE_URL = 'http://localhost:3526';

export const register = async (data: IRegsiterUserData): Promise<void> => {
  const response = await axios.post(`${API_BASE_URL}/register`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error('Registration failed');
  }
};

export const login = async (
  credentials: ILoginData,
): Promise<ILoginResponse | undefined> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status !== 200) {
      throw new Error('Login failed');
    }

    const data = response.data;
    await localStorage.setItem('token', data.token);
    await serviceMovies.onMovies()
    return data;
  } catch (error) {
    return undefined;
  }
};
