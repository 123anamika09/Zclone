import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './index.css';
import Home from "./components/Home";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/orders" element={<Home/>} />
      <Route path="/holdings" element={<Home/>} />
      <Route path="/positions" element={<Home/>} />
      <Route path="/funds" element={<Home/>} />
      <Route path="/apps" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);