import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";

function User() {
  const [searchParams, setSerachParam] = useSearchParams();
  const showActivUser = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
      </div>
      <Outlet />
      <div>
        <button onClick={() => setSerachParam({ filter: "active" })}>
          active user
        </button>
        <button onClick={() => setSerachParam({})}>reset filter</button>
      </div>

      {showActivUser ? <h2>showing active user</h2> : <h2>showing all user</h2>}
    </>
  );
}

export default User;
