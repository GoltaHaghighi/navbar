import { useState } from "react";
import Logo from "../img/ozzylogo.png";
import "./navbar.css";

let Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <nav>
      <div className="navbar-container">
        <img className="navbar-brand" src={Logo} alt="mypic" />

        <ul className="nav_links">
          <li className="nav_item">
            <a href="/" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Comp1
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Comp2
            </a>
          </li>
        </ul>

        <button
          onClick={toggleHamburger}
          className={hamburger ? "hamburger" : "hamburger is-active"}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
