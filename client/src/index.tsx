// React
import React from "react";
import ReactDOM from "react-dom";

import { init } from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

//graphql
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

// Component
import App from "./AppConfig";

// styles
import "./commonStyles/_fonts.module.scss";
import "./commonStyles/_reset.module.scss";
import "./commonStyles/_common.module.scss";
import "./commonStyles/main.module.scss";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});
const rootElement = document.getElementById("root");

init({
  dsn: process.env.REACT_APP_SENTRY_DNS,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  debug: false,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  rootElement
);
