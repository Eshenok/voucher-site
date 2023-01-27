import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Sign from "./components/Sign/Sign";
import Main from "./components/Main/Main";

function App() {
  return (
    <Switch>
      <Route path="/sign-in">
        <Sign />
      </Route>
      <Route path="/vouchers">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
