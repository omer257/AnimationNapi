import React from "react";
import {Switch, Route  } from "react-router-dom";
import AnimationComponent from '../Components/AnimationComponent';
import Fetch from '../Components/Fetch';

export default function App() {
  return ( 
        <Switch>
          <Route path="/api">
            <Fetch />
          </Route> 
          <Route path="/">
            <AnimationComponent />
          </Route>
        </Switch>  
  );
}