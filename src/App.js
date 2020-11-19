import React from 'react';
import styled from "styled-components";
import Week1 from "./Components/week-1";
import Week2 from "./Components/week-2";
import Week3 from "./Components/week-3";
import Week4 from "./Components/week-4";
import Week5 from "./Components/week-5";
import Week6 from "./Components/week-6";
import Week7 from "./Components/week-7";

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
        <Link to="/week-1">Week 1 </Link>
      </li>
      <li>
        <Link to="/week-2">Week 2</Link>
      </li>
      <li>
        <Link to="/week-3">Week 3</Link>
      </li>
      <li>
        <Link to="/week-4">Week 4</Link>
      </li> 
      <li>
        <Link to="/week-5">Week 5</Link>
      </li>
      <li>
        <Link to="/week-6">Week 6</Link>
      </li>
      <li>
        <Link to="/week-7">Week 7</Link>
      </li>
    </ul>
  </nav>
  </StyledWrapper>
);

const App = () => (
  <Router> 
    <Switch>
      <Route path="/week-1">
        <Week1 />
      </Route>
      <Route path="/week-2">
        <Week2 />
      </Route>
      <Route path="/week-3">
        <Week3 />
      </Route>
      <Route path="/week-4">
        <Week4 />
      </Route>
      <Route path="/week-5">
        <Week5 />
      </Route>
      <Route path="/week-6">
        <Week6 />
      </Route>
      <Route path="/week-7">
        <Week7 />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);


export default App;