// React
import React from "react";
import { Route, Switch } from "react-router-dom";

// Component
import { Header } from "../Header";
import { AboutPage } from "../../pages/AboutPage";
import { BasePage } from "../../pages/BasePage";

// helpers
import urls from "../../routes/urls";

export const PageHeaderController = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path={urls.HEADER_ROUTES.BASE_ABOUT_PAGE}
          component={AboutPage}
        />
        <Route path={urls.HEADER_ROUTES.BASE_APP_PAGE} component={BasePage} />
      </Switch>
    </>
  );
};
