import { THistory } from "@domain/types/THistory";

const name = "HISTORY";

export enum EActionTypeLogin {
  execute = `${name}_EXECUTE`,
  clear = `${name}_CLEAR`,
}

export type THistoryAction =
  | { type: EActionTypeLogin.execute; history: THistory }
  | { type: EActionTypeLogin.clear; history: THistory };

export const pushHistory = (history: THistory) => {
  return {
    type: EActionTypeLogin.execute,
    history,
  };
};

export const clearHistory = () => ({
  type: EActionTypeLogin.clear,
});

const initialState: THistory = {
  route: "",
  data: undefined,
  routeOld: undefined,
};

const history = (state = initialState, payload: THistoryAction) => {
  switch (payload.type) {
    case EActionTypeLogin.execute:
      return {
        ...state,
        routeOld: state?.data?.route,
        route: payload.history.route,
        data: payload.history.data,
      };
    case EActionTypeLogin.clear:
      return { ...state, data: undefined, routeOld: undefined };
    default:
      return state;
  }
};

export const historyRootReducers = { history };
