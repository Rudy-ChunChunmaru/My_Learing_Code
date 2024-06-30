import { useState } from "react";
import Navbar from "./component/Navbar";
import UploadExcleSC from "./component/UploadExcelSC";
import ResultDocmentSC from "./component/ResultDocmentSC";
import TemplateExcelSC from "./component/TemplateExcelSC";

import {
  typeDataSC,
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "./component/UploadExcelSC/typeindex";

function App() {
  const [Windo, setWindo] = useState<boolean>();
  const [showTampte, setShowTampte] = useState<boolean>(false);
  const [DataSC, setDataSC] = useState({
    DataUploadSC: undefined,
    DataProsesingUniqueSize: [],
    DataProsesingPerDes: [],
    DataProsesingPerPoDes: [],
  } as {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingUniqueSize: string[];
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
  });

  return (
    <>
      <UploadExcleSC Windo={Windo} setWindo={setWindo} setDataSC={setDataSC} />

      <div className="App block h-full w-full px-3 pt-1">
        <Navbar
          setWindo={setWindo}
          setDataSC={setDataSC}
          setShowTampte={setShowTampte}
          showTampte={showTampte}
        />
        {showTampte && <TemplateExcelSC />}
        <ResultDocmentSC DataSC={DataSC} />
      </div>
    </>
  );
}

export default App;
