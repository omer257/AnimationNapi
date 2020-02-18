import React from "react";
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import Header from '../Components/Header'
import Bounce from './Bounce';
import Fetch from './Fetch';

export default function App() {
  return (
    <BrowserRouter> 
       <Header></Header>
        <Switch>
          <Route path="/api">
            <Fetch />
          </Route> 
          <Route path="/">
            <Bounce />
          </Route>
        </Switch> 
    </BrowserRouter>
  );
}