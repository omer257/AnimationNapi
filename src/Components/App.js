import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from '../Components/Header' 
import Routes from '../Routes/Index';

const App = ()=>{
  return (
    <BrowserRouter> 
       <Header></Header>
       <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;