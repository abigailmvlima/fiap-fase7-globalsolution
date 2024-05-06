import { TAppState } from "@app/store";
import { THistory } from "@domain/types/THistory";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-native";

import * as St from "./styles";

const ControllerApp = ({ children }: any) => {
  const history = useHistory();

  const stateHistory: THistory = useSelector(
    (state: TAppState) => state.history
  );

  useEffect(() => {
    if (!stateHistory?.route) {
      if (stateHistory.route == "" || Object.keys(stateHistory).length == 0) {
        // history.push(show.route.login);
      }
      return;
    }
    history.push(stateHistory.route || "", stateHistory.data);
  }, [stateHistory]);

  return <St.Container>{children}</St.Container>;
};

export default ControllerApp;
