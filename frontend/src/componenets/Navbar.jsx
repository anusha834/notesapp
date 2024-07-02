import { Link } from "react-router-dom";
 import "../styles/Navbar.css";
 import { SearchBar } from '../componenets/SearchBar';
import { SearchResultsList } from '../componenets/SearchResultList';
import { useState,useEffect} from "react";
import api from "../api";
function Navbar() {

  return (
    <nav className="navbar">
      <h1 className="navbar-logo"> <Link to="/">MyApp</Link></h1>
      <ul className="navbar-links">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        
        <li>
          <Link to="/logout">Logout</Link>
        </li>
       
      </ul>
      

    </nav>
  );
}

export default Navbar;
