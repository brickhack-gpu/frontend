import React from "react";
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Sidebar from "./Dashboard/Sidebar";

function Sidebar() {
    return (
      <div className="sidebar">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
          <li>Link 6</li>
          <li>Link 7</li>

        </ul>
      </div>
    );
  }
  
  export default Sidebar;