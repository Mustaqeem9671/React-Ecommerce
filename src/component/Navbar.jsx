import React from "react";
// import Home from "./Home";
// import Cart from "./Cart";

import '../Styles/NavbarStyle.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h2>navbar</h2>
      <div className="nav-link">
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
