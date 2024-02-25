import React from "react";
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Sidebar() {
  const handleClickDashboard = () => {
    window.location.href = "/dashboard"; 
  };

  const handleClickLaunch = () => {
    window.location.href = "/spin"; 
  };

  const handleClickBilling = () => {
    window.location.href = "/billing"; 
  };

  const handleClickHome = () => {
    window.location.href = "/"; 
  };

    return (
      <div className="sidebar">
        <ul>
          <li className="link"><button class="sidebutton"onClick={handleClickDashboard}>Dashboard</button></li>
          <li className="link"><button class="sidebutton"onClick={handleClickLaunch}>Launch</button></li>
          <li className="link"><button class="sidebutton"onClick={handleClickBilling}>Billing</button></li>
          <li className="link"><button class="sidebutton"onClick={handleClickBilling}>Button</button></li>
          <li className="link"><button class="sidebutton"onClick={handleClickBilling}>Button</button></li>
          <li className="link"><button class="sidebutton"onClick={handleClickHome}>Sign out</button></li>

        </ul>
         </div>
    );
  }
  
  export default Sidebar;