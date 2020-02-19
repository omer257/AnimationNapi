import React from "react";
import {Switch, Route  } from "react-router-dom";
import AnimationComponent from '../Components/Animation/AnimationComponent';
import Fetch from '../Components/Fetch';

export default function App() {
  return ( 
        <Switch>
          <Route path="/api">
            <Fetch once />
          </Route> 
          <Route path="/">
            <AnimationComponent />
          </Route>
        </Switch>  
  );
}