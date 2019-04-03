import React from "react";
import { Route } from "react-router-dom";

export default function ChildRoute({ path, component, routes }) {
  return (
    <Route
      path={path}
      render={props => <component {...props} routes={routes} />}
    />
  );
}
