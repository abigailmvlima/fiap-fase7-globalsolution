export type TFHIRPacientAdress = {
  postcode?: string;
  address?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
};

export type TMaritalStatus = {
  code: string;
  display: string;
};

export type TFHIRPacient = {
  id?: string | number;
  name: string;
  phone: string;
  mail: string;
  birthDate: string;
  address?: TFHIRPacientAdress;
  maritalStatus?: TMaritalStatus;

  document?: string;
  gender?: string;
};
