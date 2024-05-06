import { persistor, store } from "@app/store";
import { Provider } from "react-redux";

import ContextGlobalIntance from "@context/contextGlobalIntance";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "@app/routes";
import ControllerApp from "@components/controllerApp";
import { NativeRouter } from "react-router-native";
import * as St from "./styles";

const AppStart = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NativeRouter>
        <St.Container>
          <St.Content>
            <ContextGlobalIntance>
              <ControllerApp>
                <Routes />
              </ControllerApp>
            </ContextGlobalIntance>
          </St.Content>
        </St.Container>
      </NativeRouter>
    </PersistGate>
  </Provider>
);

export default AppStart;
