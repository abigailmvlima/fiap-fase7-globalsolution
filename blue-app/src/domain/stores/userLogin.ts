import { IUser } from "@domain/interfaces/IUser";

const name = "USER_LOGIN";

export enum EStoreUserLogin {
  field = `${name}_EXEC`,
  clear = `${name}_CLEAR`,
}

export type TStoreUserLoginData = {
  token?: string;
  user?: IUser;
  logeed?: boolean;
  dateLoged?: Date;
};

export type TStoreUserLoginResponse = IUser;

export type TStoreUserLoginState =
  | {
      type: EStoreUserLogin.field;
      finished: boolean;
      error?: boolean;
      message?: string;
      data?: TStoreUserLoginData;
    }
  | {
      type: EStoreUserLogin.clear;
      finished: boolean;
      error?: boolean;
      message?: string;
      data?: TStoreUserLoginData;
    };

export const initialStoreUserLoginState: TStoreUserLoginState = {
  type: EStoreUserLogin.field,
  finished: false,
  message: undefined,
  error: false,
  data: undefined,
};
