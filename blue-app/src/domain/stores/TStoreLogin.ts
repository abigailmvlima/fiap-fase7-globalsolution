const name = "ACCESS";

export enum EStoreActionTypeLogin {
  login = `${name}_LOGIN`,
  refresh = `${name}_REFRESH`,
  checkout = `${name}_CHECKOUT`,
  logout = `${name}_LOGOUT`,
  success = `${name}_SUCCESS`,
  error = `${name}_ERROR`,
}

export type TStoreLoginRequest = {
  mail: string;
  pass: string;
  rememberLogin: boolean;
};

export type TStoreLoginResponse = {
  rememberLogin?: boolean;
  mail?: string;
  pass?: string;
};

export type TStoreLoginState =
  | {
      type: EStoreActionTypeLogin.login;
      logged?: boolean;
      request?: TStoreLoginRequest;
      response?: TStoreLoginResponse;
      message?: string;
      error?: boolean;
      routeRedirect?: string;
      routeCurrent?: string;
    }
  | {
      type: EStoreActionTypeLogin.logout;
      logged?: boolean;
      request?: TStoreLoginRequest;
      response?: TStoreLoginResponse;
      message?: string;
      error?: boolean;
      routeRedirect?: string;
      routeCurrent?: string;
    }
  | {
      type: EStoreActionTypeLogin.refresh;
      logged?: boolean;
      request?: TStoreLoginRequest;
      response?: TStoreLoginResponse;
      message?: string;
      error?: boolean;
      routeRedirect?: string;
      routeCurrent?: string;
    }
  | {
      type: EStoreActionTypeLogin.checkout;
      logged?: boolean;
      request?: TStoreLoginRequest;
      response?: TStoreLoginResponse;
      message?: string;
      error?: boolean;
      routeRedirect?: string;
      routeCurrent?: string;
    }
  | {
      type: EStoreActionTypeLogin.success;
      logged?: boolean;
      request?: TStoreLoginRequest;
      response?: TStoreLoginResponse;
      message?: string;
      error?: boolean;
      routeRedirect?: string;
      routeCurrent?: string;
    }
  | {
      type: EStoreActionTypeLogin.error;
      logged?: boolean;
      request?: TStoreLoginRequest;
      response?: TStoreLoginResponse;
      message?: string;
      error?: boolean;
      routeRedirect?: string;
      routeCurrent?: string;
    };

export const initialLoginState: TStoreLoginState = {
  type: EStoreActionTypeLogin.login,
  logged: false,
  message: undefined,
  error: false,
};
