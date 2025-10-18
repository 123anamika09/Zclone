import React from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import { GeneralContextProvider } from "./GeneralContext";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Positions from "./Positions";
import WatchList from "./WatchList";
import Orders from "./Orders";

const Dashboard = () => {
return (
  <div className="dashboard-container">
    <GeneralContextProvider>
      <WatchList/>
    </GeneralContextProvider>
    <div className="content">
      <Routes>
        <Route exact path ="/" element={<summary/>}/>
         <Route exact path ="/orders" element={<Orders/>}/>
          <Route exact path ="/holdings" element={<Holdings/>}/>
           <Route exact path ="/positions" element={<Positions/>}/>
            <Route exact path ="/funds" element={<Funds/>}/>
             <Route exact path ="/apps" element={<Apps/>}/>
      </Routes>
    </div>
  </div>
) 
};

export default Dashboard;