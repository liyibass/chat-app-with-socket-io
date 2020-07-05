import React, { useEffect } from "react";
import { EventHandler } from "./scripts/EventHandler";

import "./styles/base/overall.scss";
import { Route, Router, Switch } from "react-router";
import Join from "./components/Join/Join.component";
import Chat from "./components/Chat/Chat.component";

function App() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
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
