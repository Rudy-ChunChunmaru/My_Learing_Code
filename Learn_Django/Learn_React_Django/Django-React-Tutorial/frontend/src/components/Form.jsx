import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function From({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //

  const handleSubmit = async (e) => {
    console.info(method);
    setLoading(true);

    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method == "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        // console.info(res.data.access);

        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        // console.info(res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert(error.response.data.detail);
      }
      console.info(error);
    } finally {
      setLoading(false);
    }
  };

  const name = method == "login" ? "Login" : "Register";

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <button className="form-button" type="submit">
          {name}
        </button>
      )}
    </form>
  );
}

export default From;
