import React from "react";
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Sidebar() {
    return (
      <div className="sidebar">
        <ul>
          <li className="link">Link 1</li>
          <li className="link">Link 2</li>
          <li className="link">Link 3</li>
          <li className="link">Link 4</li>
          <li className="link">Link 5</li>
          <li className="link">Link 6</li>

        </ul>
         </div>
    );
  }
  
  export default Sidebar;