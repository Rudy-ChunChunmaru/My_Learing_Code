import ReactToPrint from "react-to-print";

type Props = {};

const ResultDocmentSC = ({}: Props) => {
  return (
    <div className="mt-3 h-full w-fit flex-row rounded-lg bg-slate-400 px-5 py-1">
      <div className="my-5 rounded-lg bg-slate-600 px-3 py-1">
        <div className="my-2">
          <ReactToPrint
            trigger={() => {
              return (
                <a
                  className="w-fit rounded-xl border-2  px-3 py-1 text-white hover:bg-slate-200 hover:text-black"
                  href="#"
                >
                  Print
                </a>
              );
            }}
            content={() => document.getElementById("ResultDocument")}
          />
        </div>
      </div>

      <div
        id="ResultDocument"
        className="my-5 h-full w-[1280px] rounded-lg bg-white"
      >
        <div className="mx-auto h-full w-[80%] pt-20">
          <table className="w-full border-2 border-black">
            <tr>
              <th className="border-2 border-black text-[20px]">
                PO ALLOCATION
              </th>
              <th className="border-2 border-black text-[20px]">STYLE</th>
              <th className="border-2 border-black text-[20px]">UNIT</th>
              <th className="border-2 border-black text-[20px]">SIZE / QTY</th>
              <th className="border-2 border-black text-[20px]">QTY TOTAL</th>
              <th className="border-2 border-black text-[20px]">PRICE</th>
              <th className="border-2 border-black text-[20px]">SURCHARGE</th>
              <th className="border-2 border-black text-[20px]">FINAL PRICE</th>
              <th className="border-2 border-black text-[20px]">AMOUNT</th>
            </tr>
          </table>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ResultDocmentSC;
