import { useAuth } from "./auth";

const RequierNavbar = ({ children }) => {
  const auth = useAuth();

  if (auth.user) {
    console.log();
    return children;
  } else {
    return <></>;
  }
};

export default RequierNavbar;
