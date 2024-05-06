import { TAxioOptions } from "@domain/types/TAxio";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

export default async (options?: TAxioOptions): Promise<AxiosInstance> => {
  const token = await AsyncStorage.getItem("token");
  const headers = {
    timeout: 10000,
    "Content-Type": "application/json",
    "cache-control": "no-store Pragma: no-cache",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  const instance = await axios.create({
    baseURL: `https://unadu84xt5.execute-api.us-east-1.amazonaws.com/dev`,
    headers,
  });

  if (token && token.length)
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  return instance;
};
