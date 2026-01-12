import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar justify-center bg-base-300 shadow-sm">
      <Link to="/" className="btn btn-ghost text-xl">
        Home
      </Link>
      <Link to="/addCoffee" className="btn btn-ghost text-xl">
        Add Coffee
      </Link>
      <Link to="/updateCoffee" className="btn btn-ghost text-xl">
        Update Coffee
      </Link>
    </div>
  );
};

export default Navbar;
