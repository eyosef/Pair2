import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import WineHome from "./components/wine/WineHome";

// import Cheese from '../components/Cheese';
// import Wine from '../components/Wine';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/wine" component={WineHome} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
