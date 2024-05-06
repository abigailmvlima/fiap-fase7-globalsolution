import { Route, Switch } from "react-router-native";

import show from "@show/index";
import ViewChat from "@view/viewChat";
import ViewHome from "@view/viewHome";
import ViewLogin from "@view/viewLogin";
import ViewMenu from "@view/viewMenu";
import ViewReward from "@view/viewReward";

const Routes = () => {
  return (
    <Switch>
      <Route path={show.route.home} component={ViewHome} />
      <Route path={show.route.menu} component={ViewMenu} />
      <Route path={show.route.reward} component={ViewReward} />
      <Route path={show.route.chat} component={ViewChat} />
      <Route path={show.route.login} component={ViewLogin} />
      <Route exact component={ViewLogin} />
    </Switch>
  );
};

export default Routes;
