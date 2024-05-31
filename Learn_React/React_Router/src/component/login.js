import { useState } from "react";
import { useAuth } from "./auth";
import md5 from "md5";
import { useNavigate, useLocation } from "react-router";

const Login = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectpath = location.state?.path || "/";

  const heanderLogin = async () => {
    await auth.login(user, pass);
    navigate(redirectpath, { replace: true });
  };
  return (
    <div>
      <h1>login</h1>
      <br></br>
      <div>
        username :
        <input type="text" onChange={(e) => setuser(e.target.value)} />
      </div>
      <div>
        password :
        <input type="password" onChange={(e) => setpass(md5(e.target.value))} />
      </div>
      <br></br>
      <button onClick={heanderLogin}>Login</button>
    </div>
  );
};

export default Login;
