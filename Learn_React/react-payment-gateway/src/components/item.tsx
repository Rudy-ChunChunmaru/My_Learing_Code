import { dataItem,dataItemType } from "@/data/dataItem"
import { useEffect, useState } from "react"

const Item = ({setPrice}:{setPrice:React.Dispatch<React.SetStateAction<number>>}) => {
    const ItemBar = ({qty,setQty,valItem,keyItem}:{qty:{id: number;qty: number; tprice:number}[],setQty:React.Dispatch<React.SetStateAction<{id: number;qty: number; tprice:number}[]>>,valItem:dataItemType,keyItem:number}) =>{

        const nt = () =>{
            let qtynew = qty
            if(qty[keyItem].qty > 0){
                qtynew[keyItem].qty = qty[keyItem].qty - 1
                qtynew[keyItem].tprice = qtynew[keyItem].qty * valItem.price
            }
            else {
                qtynew[keyItem].qty  = 0
                qtynew[keyItem].tprice = 0
            }
            setQty([...qtynew])
        }

        const pl = () =>{
            let qtynew = qty
            qtynew[keyItem].qty = qty[keyItem].qty + 1
            qtynew[keyItem].tprice = qtynew[keyItem].qty * valItem.price
            setQty([...qtynew])
        }
    
        return <div className="bg-white rounded-lg flex flex-col md:flex-row gap-1 md:gap-4">
            <div className="w-64">
                <img className="rounded-l-lg" alt="png" src={valItem.photo} />
            </div>
            <div className="py-5 h-fit flex flex-col gap-2 w-[100%] px-5 md:w-[70%] md:px-0">
                <div>
                    <strong>{valItem.name}</strong>
                </div>
                <div>
                    {valItem.desc}
                </div>
                <div className="w-full flex">
                    <div className="bg-slate-200 w-fit h-full rounded-l-xl pl-2 py-2 pr-2"><strong>Price</strong></div>
                    <div className="bg-slate-100 w-full h-full rounded-r-xl py-2 pl-2"><strong>{Intl.NumberFormat("id-ID",{style: "currency",currency: "IDR"}).format(valItem.price)}</strong></div>
                    
                </div>
            </div>
            <div className="flex justify-between  py-1 h-fit my-auto w-[100%] px-5 md:w-[15%] md:px-0">
                <div className="w-full rounded-xl text-center bg-red-300 hover:bg-red-500 h-20 text-lg place-content-center" onClick={()=>nt()}>
                    -
                </div>
                <div className="w-full rounded-xl text-center bg-gray-300 h-20 text-lg place-content-center"><strong>{qty[keyItem].qty}</strong></div>
                <div className="w-full rounded-xl text-center bg-green-300 hover:bg-green-500 h-20 text-lg place-content-center" onClick={()=>pl()}>+</div>
            </div>
        </div>
    }

    const [qty,setQty] = useState<{id:number,qty:number;tprice:number}[]>([...dataItem.map((val)=>{return {id:val.id,qty:0,tprice:0}})])

    useEffect(()=>{
        let totalprice:number = 0
        qty.forEach( num => {
            totalprice += num.tprice;
        })
        setPrice(totalprice)
    },[qty])

    return <div className="flex flex-col gap-3 h-fit w-full">
        {dataItem.map((val,key)=><ItemBar qty={qty} setQty={setQty} valItem={val} keyItem={key}/>)}
    </div>
}

export default Item