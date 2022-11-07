// React
import React from "react";

// Redux
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

// Component
import { PageHeaderController } from "../components/PageHeaderConroller";
import { PrivateRoute } from "./PrivateRoute";
// import { Spinner } from '../components/Spinner';
import { ErrorInterceptorModal } from "../components/ErrorInterceptorModal";
import { PublicRoute } from "./PublicRoute";
import { AuthPage } from "../pages/AuthPage";

// helpers
import urls from "./urls";

export const Routes = () => {
  return (
    <Router>
      <ErrorInterceptorModal />
      <Switch>
        <PrivateRoute
          path={urls.BASE_ROUTES.BASE_APP_PAGE}
          component={PageHeaderController}
        />
        <PublicRoute
          path={urls.BASE_ROUTES.BASE_AUTH_PAGE}
          component={AuthPage}
        />
        <Redirect to={urls.BASE_ROUTES.BASE_APP_PAGE} />
      </Switch>
    </Router>
  );
};
