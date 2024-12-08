import Item from "@/components/item";
import api, { accessKey } from "@/api/getToken";
import Bottombar from "./components/bottombar";
import { useEffect, useState } from "react";

function App() {
  const [numberOrder] = useState(Math.random() * 100);
  const [price, setPrice] = useState(0);
  const [pay, setPay] = useState(false);

  const getToken = async () => {
    try {
      const res = await api.post("", {
        access_key: accessKey,
        order_id: numberOrder,
        gross_amount: price,
      });
      return res;
    } catch (error: any) {
      const res = { error: "terjadi kesalahaan !!! (front)" };
      return res;
    }
  };

  useEffect(() => {
    if (pay) {
      getToken().then((data: any) => {
        if (data.data.data.redirect_url)
          window.location.href = data.data.data.redirect_url;
        else alert("terjadi kesalahaan !!!");
      });
      setPay(false);
    }
  }, [pay]);

  return (
    <div
      id="main"
      className="relative h-screen w-screen overflow-x-auto bg-orange-100
      py-14 text-xs"
    >
      <div id="items" className="w-full px-10">
        <Item setPrice={setPrice} />
      </div>
      <div id="barpayment" className="fixed bottom-0 w-full">
        <Bottombar setPay={setPay} price={price} />
      </div>
    </div>
  );
}

export default App;
