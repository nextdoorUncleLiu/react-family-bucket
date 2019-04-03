import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import basicConfig from "./basicConfig";
import { notPath } from "./accidentConfig";
const router = (
  <Router>
    <Switch>
      {basicConfig.map(({ path, component }, key) => (
        <Route path={path} key={key} component={component} />
      ))}
      <Route component={notPath.component} />
    </Switch>
  </Router>
);
export default router;
