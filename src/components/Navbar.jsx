import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar justify-center bg-base-300 shadow-sm">
      <NavLink to="/" className="btn btn-ghost text-md">
        Home
      </NavLink>
      <NavLink to="/addCoffee" className="btn btn-ghost text-md">
        Add Coffee
      </NavLink>
      <NavLink to="/signin" className="btn btn-ghost text-md">
        Sign In
      </NavLink>
      <NavLink to="/register" className="btn btn-ghost text-md">
        Register
      </NavLink>
    </div>
  );
};

export default Navbar;
