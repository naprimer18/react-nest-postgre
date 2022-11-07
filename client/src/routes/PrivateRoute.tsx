import React, { ComponentType } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import urls from "./urls";

interface PrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={() =>
        auth ? (
          <Component />
        ) : (
          <Redirect push to={urls.BASE_ROUTES.BASE_AUTH_PAGE} />
        )
      }
    />
  );
};
