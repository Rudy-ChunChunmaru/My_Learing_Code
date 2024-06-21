import { useState } from "react";
import UploadExcleSC from "./component/UploadExcleSC";
import { typeDataSC } from "./AppType";

function App() {
  const [Windo, setWindo] = useState<boolean>();
  const [DataSC, setDataSC] = useState(new Array<typeDataSC>());

  return (
    <>
      <div className="App fixed h-full w-full px-3 pt-1">
        <div className="flex justify-start gap-5 rounded-lg bg-slate-500 px-5 py-2 text-white">
          <div className="my-auto ">Repot Salas Confirm</div>
          <div className="flex justify-start gap-2">
            <button
              className="rounded-lg border-2 border-orange-50 px-3 py-2 hover:bg-slate-400"
              onClick={() => {
                setWindo(true);
              }}
            >
              Upload Excle
            </button>
            <button className="rounded-lg border-2 border-orange-50 px-3 py-2 hover:bg-slate-400">
              Clear Data
            </button>
          </div>
        </div>
      </div>

      <UploadExcleSC Windo={Windo} setWindo={setWindo} setDataSC={setDataSC} />
    </>
  );
}

export default App;
