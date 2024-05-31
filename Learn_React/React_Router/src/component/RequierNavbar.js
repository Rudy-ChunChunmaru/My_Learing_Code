import { useAuth } from "./auth";

const RequierNavbar = ({ children }) => {
  const auth = useAuth();

  if (auth.getUserId()) {
    console.log();
    return children;
  }
  return;
};

export default RequierNavbar;
