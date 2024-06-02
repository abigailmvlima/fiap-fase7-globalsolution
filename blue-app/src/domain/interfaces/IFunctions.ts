export interface functionBoolean {
  (active: boolean): void;
}

export interface functionVoid {
  (): void;
}

export interface IOnFunctionAny {
  (data: any): void | undefined | any;
}
