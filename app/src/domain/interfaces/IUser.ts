export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
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
  email: string;
  password: string;
  confirmPassword?: string;
  document: string;
  username?: string;
  category?: string;
}

export interface IUserAuth {
  email: string;
  password: string;
}
