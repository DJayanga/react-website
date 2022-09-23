import { Link, NavLink } from "react-router-dom";

import "./index.css";
import Logo from "../../images/logo.png";
import { links } from "../../data";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav-links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active-nav" : ""
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav-toggle-btn">
          <GoThreeBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
