export interface IRegsiterUserData {
  name: string;
  mail: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IRegisterResponse {
  status: number;
  message: string;
}

export interface ILoginData {
  mail: string;
  password: string;
}

export interface IMovie {
  title: string;
  category: {
    title: string;
    id: string;
  };
  note: string;
  duration: string;
  sinopsis: string;
  _id: string;
}
