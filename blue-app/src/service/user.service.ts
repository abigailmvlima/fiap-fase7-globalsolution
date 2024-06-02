import api from "@api/api";
import { IUserRegister } from "@domain/interfaces/IUser";
import { TReturnService } from "@domain/types/TReturnService";

const get = async (): Promise<TReturnService> => {
  try {
    const axios = await api();
    const response: any = await axios.get("/users");
    return {
      err: false,
      status: response.status,
      message: "success",
      data: response.data,
    };
  } catch (error: any) {
    return {
      err: true,
      status: error.response.status,
      message: error.message,
      data: error.response || error.response.data || error,
    };
  }
};

const register = async (request: IUserRegister): Promise<TReturnService> => {
  try {
    const axios = await api();
    const response = await axios.post("/users", request);
    console.log(response);
    return {
      err: false,
      status: response.status,
      message: "success",
      data: response.data,
    };
  } catch (error: any) {
    return {
      err: true,
      status: error.status,
      message: error.message,
      data: error.response,
    };
  }
};

const deleteUser = async (): Promise<TReturnService> => {
  try {
    const axios = await api();
    const response = await axios.delete("/users");
    return {
      err: false,
      status: response.status,
      message: "success",
      data: response.data,
    };
  } catch (error: any) {
    return {
      err: true,
      status: error.status,
      message: error.message,
      data: error.response,
    };
  }
};

export const userService = {
  get,
  register,
  delete: deleteUser,
};
