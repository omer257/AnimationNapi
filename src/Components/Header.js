import React from "react";
import { NavLink} from "react-router-dom"; 

export default function Header() {
  return (
    <nav>
          <ul>
            <li>
              <NavLink to="/">Animation</NavLink>
            </li>
            <li>
              <NavLink to="/api">Api</NavLink>
            </li> 
          </ul>
        </nav> 
  );
}