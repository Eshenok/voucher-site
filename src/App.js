import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Sign from "./components/Sign/Sign";
import Main from "./components/Main/Main";

function App() {

  const history = useHistory();

  function handleLogIn() {
    history.push('/vouchers');
  }

  return (
    <Switch>
      <Route path="/sign-in">
        <Sign onSubmit={handleLogIn} />
      </Route>
      <Route path="/vouchers">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
