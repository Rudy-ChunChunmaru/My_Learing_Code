const Bottombar = ({setPay,price}:{price:number;setPay:React.Dispatch<React.SetStateAction<boolean>>}) =>{
    return <div className="bg-white w-full py-5 px-5 flex border-t-4 border-black  justify-between">
        <div className="text-lg">TOTAL : {Intl.NumberFormat("id-ID",{style: "currency",currency: "IDR"}).format(price)}</div>
        <div className="text-lg border-2 px-2 rounded-lg bg-blue-200 hover:bg-blue-400" onClick={()=>{
            if(price == 0)
                alert('add item plz !!!')
            else
                setPay(true)
        }}><strong>PAY NOW</strong></div>
    </div>
}

export default Bottombar