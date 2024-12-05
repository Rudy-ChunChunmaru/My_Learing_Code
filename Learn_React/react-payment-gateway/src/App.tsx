import Item from "@/components/item";
import Bottombar from "./components/bottombar";
import { useEffect, useState } from "react";

function App() {
  const [numberOrder] = useState(Math.random() * 100);
  const [price, setPrice] = useState(0);
  const [pay, setPay] = useState(false);

  let paramenter = {
    item_details: {
      name: "book",
      price: price,
    },
    transaction_details: {
      order_id: numberOrder,
      gross_amount: price,
    },
  };

  useEffect(() => {
    if (pay) {
      alert("pay");
      setPay(false);
    }
  }, [pay]);

  return (
    <div
      className="relative h-screen w-screen overflow-x-auto bg-orange-100
    py-14 text-xs"
    >
      <div className="w-full px-10">
        <Item setPrice={setPrice} />
      </div>
      <div className="fixed bottom-0 w-full">
        <Bottombar setPay={setPay} price={price} />
      </div>
    </div>
  );
}

export default App;
