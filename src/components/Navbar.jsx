import React from "react";
import logo from "../assets/logo.png";
import { Coins } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4">
      
      {/* START */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Team</a></li>
            <li><a>Schedules</a></li>
          </ul>
        </div>

        {/* Logo */}
        <img src={logo} alt="logo" className="h-15" />
      </div>

      {/* CENTER (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a>Home</a></li>
          <li><a>Fixture</a></li>
          <li><a>Team</a></li>
          <li><a>Schedules</a></li>
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end">
        <button className="btn btn-outline btn-success flex items-center gap-2">
          4300 Coins <Coins size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;