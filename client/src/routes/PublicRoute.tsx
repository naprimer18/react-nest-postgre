import React, { ComponentType } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";

import urls from "./urls";
import { RootState } from "../store";

interface PublicRouteProps extends RouteProps {
  component: ComponentType;
}

export const PublicRoute = (props: PublicRouteProps) => {
  const { component: Component, ...rest } = props;
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={() =>
        !auth ? (
          <Component />
        ) : (
          <Redirect push to={urls.BASE_ROUTES.BASE_APP_PAGE} />
        )
      }
    />
  );
};
