export type TFHIRPacientAdress = {
  postcode?: string;
  address?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
};

export type TFHIRPacient = {
  id?: string | number;
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  address?: TFHIRPacientAdress;
  maritalStatus?: {
    code: string;
    display: string;
  };

  document?: string;
  gender?: string;
};
