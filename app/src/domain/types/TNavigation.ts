import { INavigateRouteFunc } from "@domain/interfaces/INavigation";
import { THistory } from "@domain/types/THistory";
import { ERoute } from "@show/index";

export interface INavigate {
  (newRoute: ERoute, data?: any): void;
}

export interface IFunction {
  (): void;
}

export interface IFunctionAuthFace {
  (route: string): void;
}

export type TNavigateRoute = {
  home: INavigateRouteFunc;
  menu: INavigateRouteFunc;
  login: INavigateRouteFunc;
  reward: INavigateRouteFunc;
  chat: INavigateRouteFunc;
};

export type TNavigation = {
  goRoute: INavigate;
  goBack: IFunction;
  history: THistory;
  route: TNavigateRoute;
};
