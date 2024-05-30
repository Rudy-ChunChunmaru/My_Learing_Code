import { useNavigate } from "react-router";

function Ordersummary() {
  const navigate = useNavigate();

  return (
    <div>
      Order Confirmed !!!
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}

export default Ordersummary;
