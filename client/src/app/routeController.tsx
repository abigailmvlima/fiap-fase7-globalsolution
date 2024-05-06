import { EActiveView } from 'domains/enums/EActiveView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewChallenges from 'views/viewChallenges';
import ViewLogin from 'views/viewLogin';
import {
  default as ViewAbout,
  default as ViewRewards,
} from 'views/viewRewards';
import ViewHome from '../views/viewHome';
import ViewNotFound from '../views/viewNotFound';

const RouteController = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${EActiveView.about}`} Component={ViewAbout} />
        <Route path={`/${EActiveView.challenges}`} Component={ViewChallenges} />
        <Route path={`/${EActiveView.rewards}`} Component={ViewRewards} />
        <Route path="/home" Component={ViewHome} />
        <Route path="/" Component={ViewLogin} />
        <Route path="*" Component={ViewNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteController;
