import { INavigateRouteFunc } from '@domain/interfaces/INavigation';
import { THistory } from '@domain/types/THistory';
import { ERoute } from '@show/index';

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
  register: INavigateRouteFunc;
  details: INavigateRouteFunc;
};

export type TNavigation = {
  goRoute: INavigate;
  goBack: IFunction;
  history: THistory;
  route: TNavigateRoute;
};
