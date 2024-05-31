import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const heanderLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <>
      <div>wellcome {auth.getUserId()}</div>
      <button onClick={heanderLogout}>logout</button>
    </>
  );
};

export default Profile;
