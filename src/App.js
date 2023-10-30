import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPassword from './Pages/ForgotPassword';
import ForgotUsername from './Pages/ForgotUsername';
import Home from "./Pages/Home";
import Examples from './Pages/Examples';
import Boards from './Pages/Boards';

import './blocks/customblocks';
import './generator/generator';
import Tutorials from './Pages/Tutorials';
import Extensions from './Pages/Extensions';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
      <Route exact path="/forgot-username" element={<ForgotUsername/>}/>
      <Route exact path="/tutorials" element={<Tutorials/>}/>
      <Route exact path="/examples" element={<Examples />}/>
      <Route exact path="/board" element={<Boards />}/>
      <Route exact path="/extension" element={<Extensions />}/>
    </Routes>
  </BrowserRouter>


  );
}

export default App;