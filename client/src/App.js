import React from "react";

import "./styles/base/overall.scss";
import { Route, Switch } from "react-router";
import Join from "./components/Join/Join.component";
import Chat from "./components/Chat/Chat.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Join}></Route>
        <Route path="/chat" component={Chat}></Route>
      </Switch>
    </div>
  );
}

export default App;
