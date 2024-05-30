import { useParams } from "react-router";

function UserDetail() {
  const { userid } = useParams();

  return <div>user detail {userid}</div>;
}

export default UserDetail;
