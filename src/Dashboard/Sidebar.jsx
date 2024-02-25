import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  // No need for click handlers if you're using Link components
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <FontAwesomeIcon icon={faCheckSquare} /> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/launch" className="sidebar-link">
            <FontAwesomeIcon icon={faCoffee} /> Launch
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/billing" className="sidebar-link">
            <FontAwesomeIcon icon={faUser} /> Billing
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/" className="sidebar-signout sidebar-link">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
