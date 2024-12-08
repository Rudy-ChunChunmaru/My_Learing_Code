import { dataItem, dataItemType } from "@/data/dataItem";
import { useEffect, useState } from "react";

const Item = ({
  setPrice,
}: {
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const ItemBar = ({
    qty,
    setQty,
    valItem,
    keyItem,
  }: {
    qty: { id: number; qty: number; tprice: number }[];
    setQty: React.Dispatch<
      React.SetStateAction<{ id: number; qty: number; tprice: number }[]>
    >;
    valItem: dataItemType;
    keyItem: number;
  }) => {
    const nt = () => {
      let qtynew = qty;
      if (qty[keyItem].qty > 0) {
        qtynew[keyItem].qty = qty[keyItem].qty - 1;
        qtynew[keyItem].tprice = qtynew[keyItem].qty * valItem.price;
      } else {
        qtynew[keyItem].qty = 0;
        qtynew[keyItem].tprice = 0;
      }
      setQty([...qtynew]);
    };

    const pl = () => {
      let qtynew = qty;
      qtynew[keyItem].qty = qty[keyItem].qty + 1;
      qtynew[keyItem].tprice = qtynew[keyItem].qty * valItem.price;
      setQty([...qtynew]);
    };

    return (
      <div
        id={"item" + keyItem}
        className="flex flex-col gap-1 rounded-lg bg-white md:flex-row md:gap-4"
      >
        <div id={"img-" + keyItem} className="w-64">
          <img className="rounded-l-lg" alt="png" src={valItem.photo} />
        </div>
        <div
          id={"info-" + keyItem}
          className="flex h-fit w-[100%] flex-col gap-2 px-5 py-5 md:w-[70%] md:px-0"
        >
          <div id={"name-" + keyItem}>
            <strong>{valItem.name}</strong>
          </div>
          <div id={"des-" + keyItem}>{valItem.desc}</div>
          <div id={"price-" + keyItem} className="flex w-full">
            <div
              id={"price-name" + keyItem}
              className="h-full w-fit rounded-l-xl bg-slate-200 py-2 pl-2 pr-2"
            >
              <strong>Price</strong>
            </div>
            <div
              id={"price-currency" + keyItem}
              className="h-full w-full rounded-r-xl bg-slate-100 py-2 pl-2"
            >
              <strong>
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(valItem.price)}
              </strong>
            </div>
          </div>
        </div>
        <div
          id={"button-rm" + keyItem}
          className="my-auto flex  h-fit w-[100%] justify-between px-5 py-1 md:w-[15%] md:px-0"
        >
          <div
            className="h-20 w-full place-content-center rounded-xl bg-red-300 text-center text-lg hover:bg-red-500"
            onClick={() => nt()}
          >
            -
          </div>
          <div
            id={"value-qty" + keyItem}
            className="h-20 w-full place-content-center rounded-xl bg-gray-300 text-center text-lg"
          >
            <strong>{qty[keyItem].qty}</strong>
          </div>
          <div
            id={"button-add" + keyItem}
            className="h-20 w-full place-content-center rounded-xl bg-green-300 text-center text-lg hover:bg-green-500"
            onClick={() => pl()}
          >
            +
          </div>
        </div>
      </div>
    );
  };

  const [qty, setQty] = useState<{ id: number; qty: number; tprice: number }[]>(
    [
      ...dataItem.map((val) => {
        return { id: val.id, qty: 0, tprice: 0 };
      }),
    ]
  );

  useEffect(() => {
    let totalprice: number = 0;
    qty.forEach((num) => {
      totalprice += num.tprice;
    });
    setPrice(totalprice);
  }, [qty]);

  return (
    <div id="01" className="flex h-fit w-full flex-col gap-3">
      {dataItem.map((val, key) => (
        <ItemBar qty={qty} setQty={setQty} valItem={val} keyItem={key} />
      ))}
    </div>
  );
};

export default Item;
