import { INavigateRouteFunc } from "@domain/interfaces/INavigation";

export type TNotificationData = {
  label: string;
  description: string;
  route: INavigateRouteFunc;
};
