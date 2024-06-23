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
  const [DataSC, setDataSC] = useState(
    {} as {
      DataUploadSC: any;
      DataProsesingPerDes: typeUniquePerDes[];
      DataProsesingPerPoDes: typeUniquePerPoDes[];
    }
  );

  return (
    <>
      <UploadExcleSC Windo={Windo} setWindo={setWindo} setDataSC={setDataSC} />

      <div className="App block h-full w-full px-3 pt-1">
        <Navbar setWindo={setWindo} setDataSC={setDataSC} />

        <ResultDocmentSC />
      </div>
    </>
  );
}

export default App;
