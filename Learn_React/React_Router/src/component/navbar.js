import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import RequierNavbar from "./RequierNavbar";
import { useEffect, useState } from "react";

function Navbar() {
  const [time, setTime] = useState(null);
  const updatetime = () => {
    fetch(`http://192.168.0.101:8080/api/time`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTime(Date(data.time).toString()))
      .catch((error) => console.log("Authorization failed : " + error.message));
  };

  useEffect(() => {
    updatetime();
  });

  const navlinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "Bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

  return (
    <div>
      <nav className="p-nav">
        <NavLink style={navlinkstyle} to="/" onClick={() => updatetime()}>
          Home
        </NavLink>
        <NavLink style={navlinkstyle} to="/about" onClick={() => updatetime()}>
          about
        </NavLink>
        <NavLink
          style={navlinkstyle}
          to="/products"
          onClick={() => updatetime()}
        >
          products
        </NavLink>
        <RequierNavbar>
          <NavLink
            style={navlinkstyle}
            to="/profile"
            onClick={() => updatetime()}
          >
            Profile
          </NavLink>
        </RequierNavbar>
        {!auth.getUserId() && (
          <NavLink
            style={navlinkstyle}
            to="/login"
            onClick={() => updatetime()}
          >
            login
          </NavLink>
        )}
      </nav>

      <p>conn to server at :{time}</p>
    </div>
  );
}

export default Navbar;
