import React from "react";
import { menuArray } from "../constants/itemsMenu";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Educación IT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
          
            {
                menuArray.map((item, index) => (
                    <li className="nav-item" key={item.nombre+index}>
                       {/*  <NavLink className="nav-link" to="/">
                            {item.nombre}
                        </NavLink> */}
                    </li>
                ))
            }
          
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
