import { EActiveView } from 'domains/enums/EActiveView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewLogin from 'views/viewLogin';


import ViewHome from '../views/viewHome';
import ViewNotFound from '../views/viewNotFound';

const RouteController = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${EActiveView.home}`} Component={ViewHome} />
        <Route path={`/`} Component={ViewLogin} />
        <Route path="*" Component={ViewNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteController;
