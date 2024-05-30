import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Navbar() {
  const navlinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "Bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

  return (
    <nav className="p-nav">
      <NavLink style={navlinkstyle} to="/">
        Home
      </NavLink>
      <NavLink style={navlinkstyle} to="/about">
        about
      </NavLink>
      <NavLink style={navlinkstyle} to="/products">
        products
      </NavLink>
      <NavLink style={navlinkstyle} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navlinkstyle} to="/login">
          login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
