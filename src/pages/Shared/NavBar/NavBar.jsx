import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navItems = (
    <>
      <li className="tooltip" data-tip="Home">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          HOME
        </NavLink>
      </li>

      <li className="tooltip" data-tip="Instructors">
        <NavLink
          to="/instructors"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          INSTRUCTORS
        </NavLink>
      </li>

      <li className="tooltip" data-tip="Classes">
        <NavLink
          to="/classes"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          CLASSES
        </NavLink>
      </li>

      <li className="tooltip" data-tip="Dashboard">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          DASHBOARD
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black bg-opacity-50 text-white fixed z-30 px-14 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl uppercase">
            LANGUAGE
            <br />
            SAFARI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
