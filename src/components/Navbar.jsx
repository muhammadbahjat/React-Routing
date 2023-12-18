import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
     

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/delivery" exact>
              Delivery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/order-summary" exact>
              Order Summary
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/payment-details" exact>
              Payment Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/payment-method" exact>
              Payment Method
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
