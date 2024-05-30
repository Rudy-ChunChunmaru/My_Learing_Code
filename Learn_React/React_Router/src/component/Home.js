import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("order-summary")}>order</button>
    </div>
  );
}

export default Home;
