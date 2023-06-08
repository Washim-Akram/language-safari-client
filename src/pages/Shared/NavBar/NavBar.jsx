import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          logOut();
          Swal.fire("Logout!", "Your are logout successfully.", "success");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

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
    <div className="navbar bg-neutral text-neutral-content md:py-6 md:px-16">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52"
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
      <div className="navbar-end">
        {user?.email ? (
          <>
            <div
              className="tooltip tooltip-bottom cursor-pointer"
              data-tip={user?.displayName}
            >
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </div>
            </div>
            <div className="tooltip ml-6" data-tip="Logout">
              <button onClick={handleLogOut}>
                <FaSignOutAlt size={40}></FaSignOutAlt>
              </button>
            </div>
          </>
        ) : (
          <div className="tooltip" data-tip="Login">
            <Link to="/login">
              <button className="btn btn-sm">LOGIN</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
