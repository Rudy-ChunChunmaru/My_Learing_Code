import { useState } from "react";
import { useNavigate } from "react-router-dom";

function From({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <from onSubmit={handleSubmit} className="form-container">
      <h1></h1>
    </from>
  );
}
