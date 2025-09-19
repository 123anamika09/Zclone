import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
// import { GeneralContextProvider } from "./GeneralContext";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Positions from "./Positions";
import WatchList from "./WatchList";
import Orders from "./Orders";

const Dashboard = () => {
  const location = useLocation(); //I modified it to use the useLocation hook to determine which component to render based on the current URL path:
  const path = location.pathname;
  
  // Determine which component to render based on the current path
  const renderContent = () => {
    switch(path) {
      case "/orders":
        return <Orders />;
      case "/holdings":
        return <Holdings />;
      case "/positions":
        return <Positions />;
      case "/funds":
        return <Funds />;
      case "/apps":
        return <Apps />;
      default:
        return null; // Default dashboard view or empty
    }
  };

  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
        <WatchList />
      {/* </GeneralContextProvider> */}
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;