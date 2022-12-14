import React from "react";
import { Login } from "./Login";
import { Registration } from "./Registration";
import { Button } from "../../commonComponents/Button";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import urls from "../../routes/urls";

export const AuthPage = () => {
  return (
    <>
      <Router>
        <Button
          type={"link"}
          path={urls.AUTH_ROUTES.LOGIN_PAGE}
          title={"Login"}
        />
        <Button
          type={"link"}
          path={urls.AUTH_ROUTES.REGISTRATION_PAGE}
          title={"Register"}
        />
        <Switch>
          <Route exact path={urls.AUTH_ROUTES.LOGIN_PAGE} component={Login} />
          <Route
            exact
            path={urls.AUTH_ROUTES.REGISTRATION_PAGE}
            component={Registration}
          />
          <Redirect to={urls.BASE_ROUTES.BASE_AUTH_PAGE} />
        </Switch>
      </Router>
    </>
  );
};
