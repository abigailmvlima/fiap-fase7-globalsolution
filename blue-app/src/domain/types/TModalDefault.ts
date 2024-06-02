const name = "MODAL-DEFAULT";

export enum EActionTypeModalDefault {
  show = `${name}_SHOW`,
  close = `${name}_CLOSE`,
}

export type TModalDefaultData = {
  title?: string;
  description?: string;
};

export type TModalDefault = {
  show?: boolean;
  data?: TModalDefaultData;
};

export type TModalDefaultState =
  | {
      type: EActionTypeModalDefault.show;
      data?: TModalDefaultData;
      show: boolean;
    }
  | {
      type: EActionTypeModalDefault.close;
      data?: TModalDefaultData;
      show: boolean;
    };

export const modalDefaultInitialState: TModalDefaultState = {
  type: EActionTypeModalDefault.close,
  show: false,
};
