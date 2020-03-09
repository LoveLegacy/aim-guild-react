import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import Colors from "../styles/colors";
import normalize from "../styles/normalize";
import Header from "../components/Header/Header";
import Home from "../views/Home/Home";
import Dashboard from "../views/Dashboard/Dashboard";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${Colors.darkGray};
    padding: 1rem;
  }
  ${normalize}
`;

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/aim-guild-react">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
