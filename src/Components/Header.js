import React from "react";
import { NavLink} from "react-router-dom"; 

 const Header =()=> {
  return (
    <nav>
          <ul>
            <li>
              <NavLink exact to="/">Animation</NavLink>
            </li>
            <li>
              <NavLink to="/api">Api</NavLink>
            </li> 
          </ul>
        </nav> 
  );
}

export default Header;