import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cliente from "./Pages/CreateCliente/";
import Main from "../src/Pages/Main";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/clientecadastro/" component={Cliente} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
