import axios from 'axios';
import { TFHIRPacient } from 'domains/types/TFHIR';
import { TResponseReturn } from 'domains/types/TResponseReturn';
const baseURL = 'http://localhost:3525';

export const findPatient = async (
  id?: string,
): Promise<TFHIRPacient[] | TFHIRPacient | TResponseReturn> => {
  try {
    const url = `${baseURL}/patients${id ? `/${id}` : ''}`;
    console.log(url);
    const response = await axios.get(url);
    console.log(response);
    const result = response.data;
    if (Array.isArray(result)) {
      return result as TFHIRPacient[];
    }

    return result as TFHIRPacient;
  } catch (error: any) {
    console.log(error.message);
    return {
      err: true,
      message: error.message,
    };
  }
};

export const createPatient = async (
  data: TFHIRPacient,
): Promise<TFHIRPacient | TResponseReturn> => {
  try {
    delete data.id;
    const response = await axios.post(`/patients`, data);
    if (!response.data?.patientId) {
      return {
        err: true,
        message: 'Ops, unexpected error',
      };
    }
    return { ...data, id: response.data?.patientId };
  } catch (error: any) {
    return {
      err: true,
      message: error.message,
    };
  }
};

export const updatePatient = async (
  data: TFHIRPacient,
): Promise<TFHIRPacient | TResponseReturn> => {
  try {
    console.log(11111, data);
    const url = `${baseURL}/patients/${data.id}`;
    const response = await axios.put(url, data);
    if (!response.data?.patientId) {
      return {
        err: true,
        message: 'Ops, unexpected error',
      };
    }
    return { ...data, id: response.data?.patientId };
  } catch (error: any) {
    return {
      err: true,
      message: error.message,
    };
  }
};

export const deletePatient = async (id: string): Promise<TResponseReturn> => {
  try {
    const url = `${baseURL}/patients/${id}`;
    const response = await axios.delete(url);
    if (![200].includes(response.status)) {
      return {
        err: true,
        message: 'Ops, unexpected error',
      };
    }

    return {
      err: false,
      success: true,
    };
  } catch (error: any) {
    return {
      err: true,
      message: error.message,
    };
  }
};
