import { useState } from "react";
import Navbar from "./component/Navbar";
import UploadExcleSC from "./component/UploadExcleSC";
import ResultDocmentSC from "./component/ResultDocmentSC";

import {
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "./component/UploadExcleSC/typeindex";

function App() {
  const [Windo, setWindo] = useState<boolean>();
  const [DataSC, setDataSC] = useState({
    DataUploadSC: undefined,
    DataProsesingPerDes: [],
    DataProsesingPerPoDes: [],
    DataCountSize: 0,
  } as {
    DataUploadSC: any;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
    DataCountSize: number;
  });

  return (
    <>
      <UploadExcleSC Windo={Windo} setWindo={setWindo} setDataSC={setDataSC} />

      <div className="App block h-full w-full px-3 pt-1">
        <Navbar setWindo={setWindo} setDataSC={setDataSC} />
        <ResultDocmentSC DataSC={DataSC} />
      </div>
    </>
  );
}

export default App;
