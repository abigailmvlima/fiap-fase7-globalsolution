import axios from 'axios';
import {
  ILoginData,
  ILoginResponse,
  IRegisterResponse,
  IRegsiterUserData,
} from '@domain/interfaces/api';
import { setItem, getItem } from '@utils/storage';

const API_BASE_URL = 'http://localhost:3526';

export const register = async (
  data: IRegsiterUserData,
): Promise<IRegisterResponse> => {
  try {
    const response: any = await axios.post(
      `${API_BASE_URL}/auth/register`,
      { ...data, phone: '1199558555' },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status !== 200) {
      return {
        status: response.status,
        message: '',
      };
    }

    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error: any) {
    return {
      status: 400,
      message: error.message,
    };
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

    const data: any = response.data;
    const token = data?.token;
    if (!token) {
      console.log('Token already exists');
      return undefined;
    }

    await setItem('token', response?.data?.token);
    return data;
  } catch (error) {
    console.log(error)
    return undefined;
  }
};
