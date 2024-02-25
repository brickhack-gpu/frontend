import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../public/fiunainfainfnajfnaifnaskofbafbosfbkfsablkfbaslkf.png';

function Sidebar() {
  // No need for click handlers if you're using Link components
  return (
    <div className="sidebar">
      <img src={logo} />
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
             Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/spin" className="sidebar-link">
             Spin
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/billing" className="sidebar-link">
             Billing
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/" className="signout">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
