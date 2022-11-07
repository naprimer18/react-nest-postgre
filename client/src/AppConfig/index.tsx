// React
import React from "react";

//sentry
import { withProfiler } from "@sentry/react";

// Component
import { Routes } from "../routes";

//locale
import "../localization/i18n";

const App = () => {
  return <Routes />;
};

export default withProfiler(App);
