import React from "react";
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Sidebar() {
  const handleClickDashboard = () => {
    window.location.href = "/dashboard"; 
  };

  const handleClickBilling = () => {
    window.location.href = "/billing"; 
  };

    return (
      <div className="sidebar">
        <ul>
          <li className="link"><button class="sidebutton"onClick={handleClickDashboard}>Dashboard</button></li>
          <li className="link">Launch</li>
          <li className="link"><button class="sidebutton"onClick={handleClickDashboard}>Billing</button></li>
          <li className="link">Link 4</li>
          <li className="link">Link 5</li>
          <li className="link">Link 6</li>

        </ul>
         </div>
    );
  }
  
  export default Sidebar;