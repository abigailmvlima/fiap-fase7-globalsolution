import { RuleSet } from "styled-components";

export type TListPacient = {
  name: {
    title: string;
  };
  phone: {
    title: string;
  };
  mail: {
    title: string;
  };
  birthDate: {
    title: string;
  };
  city: {
    title: string;
  };
  actions: {
    title?: string;
  };
  [key: string]: any;
};

export enum EPacientTitles {
  id = "id",
  name = "name",
  phone = "phone",
  mail = "mail",
  birthDate = "birthDate",
  city = "city",
  actions = "actions",
}

export type TTitles = {
  name: string;
  label?: string;
  icon?: any;
  css?: RuleSet<object>;
  ccsTitle?: RuleSet<object>;
};

export type TOnchangeData = { name: string; value: string };
