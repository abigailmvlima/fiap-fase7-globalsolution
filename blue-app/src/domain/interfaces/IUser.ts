export interface IUser {
  _id?: string;
  name?: string;
  mail?: string;
  document?: string;
  username?: string;
  active?: boolean;
  password: string;
  role: string;
  loginAttempts: string;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
  registeredFacialBiometricsDate: Date;
}

export interface IUserRegister {
  name: string;
  mail: string;
  password: string;
  confirmPassword?: string;
  document: string;
  username?: string;
  category?: string;
}

export interface IUserAuth {
  mail: string;
  password: string;
}
