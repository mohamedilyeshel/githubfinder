// Hooks and libraries
import { AiFillGithub } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-neutral shadow-lg mb-3">
      <div className="container flex flex-row justify-between">
        <div className="leftSide text-xl flex flex-row items-center">
          <AiFillGithub className="mr-1" />
          <h1 className="font-bold">Github Finder</h1>
        </div>
        <div className="rightSide">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return "mr-2 btn btn-md " + (isActive ? "btn-active" : "");
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return "btn btn-md " + (isActive ? "btn-active" : "");
            }}
          >
            About Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
