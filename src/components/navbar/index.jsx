import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./index.css";
import Logo from "../../images/logo.png";
import { links } from "../../data";
import { GoThreeBars } from "react-icons/go";
import {MdOutlineClose} from "react-icons/md"

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/home" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className= {`nav-links ${isNavOpen ? 'show-nav' : "hide-nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active-nav" : undefined
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav-toggle-btn" onClick={() => {
           setIsNavOpen(!isNavOpen);
        }}>
          {isNavOpen? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
