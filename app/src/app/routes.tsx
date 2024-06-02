import { Route, Switch } from "react-router-native";

import show from "@show/index";
import ViewHome from "@view/viewHome";
import ViewLogin from "@view/viewLogin";
import ViewRegister from "@view/viewRegister";
import ViewSplash from "@view/viewSplash";
import ViewDetails from "@view/viewDetails";

const Routes = () => {
  return (
    <Switch>
      <Route path={show.route.home} component={ViewHome} />
      <Route path={show.route.login} component={ViewLogin} />
      <Route path={show.route.details} component={ViewDetails} />
      <Route path={show.route.register} component={ViewRegister} />
      <Route exact component={ViewSplash} />
    </Switch>
  );
};

export default Routes;
