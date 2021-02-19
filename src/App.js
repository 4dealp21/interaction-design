import React from "react";
import styled from "styled-components";
import ToggleSwitch from "./Components/toggle-switch/switch";
import LoginForm from "./Components/login-form/form";
import Button from "./Components/button/button"
import Loading from "./Components/loading/loading";
import ModalTab from "./Components/modal/modal";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledWrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => (

  <StyledWrapper>
  <nav>
    <h1>Welcome to Interaction Design</h1>
    <ul>
      <li>
        <Link to="/toggle-switch">Switch </Link>
      </li>
      <li>
        <Link to="/login-form">Login Form </Link>
      </li>
      <li>
        <Link to="/button">Button </Link>
      </li>
      <li>
        <Link to="/loading">Loading </Link>
      </li>
      <li>
        <Link to="/modal">Modal </Link>
      </li>
    </ul>
  </nav>
  </StyledWrapper>
);

const App = () => (
  <Router> 
    <Switch>
      <Route path="/toggle-switch">
        <ToggleSwitch />
      </Route>
      <Route path="/login-form">
        <LoginForm />
      </Route>
      <Route path="/button">
        <Button />
      </Route>
      <Route path="/loading">
        <Loading />
      </Route>
      <Route path="/modal">
        <ModalTab />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);


export default App;