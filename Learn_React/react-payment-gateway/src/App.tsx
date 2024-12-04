import Item from "@/components/item";
import Bottombar from "./components/bottombar";
import { useEffect, useState } from "react";

function App() {
  const [numberOrder] = useState(Math.random()*100)
  const [price,setPrice] = useState(0)
  const [pay,setPay] = useState(false)

  useEffect(()=>{
    if(pay){
      alert('payyy !!!!')
      setPay(false)
    }
  },[pay])

  return (
    <div className="bg-orange-100 h-screen w-screen relative overflow-x-auto
    text-xs py-14"
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
