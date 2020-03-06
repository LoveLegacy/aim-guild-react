import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import Colors from "../styles/colors";
import normalize from "../styles/normalize";
import Header from "../components/Header/Header";
import Home from "../views/Home";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${Colors.rose};
    padding: 1rem;
  }
  ${normalize}
`;

export default function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}