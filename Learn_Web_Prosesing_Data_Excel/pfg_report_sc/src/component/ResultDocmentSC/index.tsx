import { useEffect, useRef, useState } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import ReactToPrint from "react-to-print";

import {
  typeDataSC,
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcelSC/typeindex";
import ViewTable from "./ViewTable";
import { typeCurrency, typeSize } from "./indexType";
import ViewSetting from "./ViewSetting";

type Props = {
  DataSC: {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingUniqueSize: string[];
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
  };
};

const ResultDocmentSC = ({ DataSC }: Props) => {
  //------------------------------------------------------------------------------------FUNC BUTTON
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "SC",
    sheet: "sheet1",
  });

  //======================================================================================FUNC SETTING
  useEffect(() => {
    setWindoSeting(false);
  }, [DataSC]);
  const [windoSetting, setWindoSeting] = useState<boolean>(false);
  const [windoDataSetting, setWindoDataSetting] = useState<{
    matauang: typeCurrency;
    size: typeSize[];
  }>();

  return (
    <>
      <div className="mt-3 h-full w-fit flex-row rounded-lg bg-slate-400 px-5 py-1">
        <div className="my-5 flex justify-between rounded-lg bg-slate-600 px-3 py-1">
          <div className="my-2">
            <button
              className="w-fit rounded-xl border-2  px-3 py-1 text-white hover:bg-slate-200 hover:text-black"
              onClick={() => setWindoSeting(!windoSetting)}
            >
              SETTING
            </button>
          </div>
          <div className="my-2 flex gap-3">
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

            <button
              className="w-fit rounded-xl border-2  px-3 py-1 text-white hover:bg-slate-200 hover:text-black"
              onClick={onDownload}
            >
              Export excel
            </button>
          </div>
        </div>

        {windoSetting && (
          <ViewSetting
            setWindoSeting={setWindoSeting}
            windoDataSetting={windoDataSetting}
            setWindoDataSetting={setWindoDataSetting}
          />
        )}

        <div
          id="ResultDocument"
          className="my-5 h-full min-h-[1754px] w-[1240px] rounded-lg bg-white"
        >
          <div className="mx-auto h-full w-[86%] pt-20">
            <ViewTable tableRef={tableRef} DataSC={DataSC} />
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultDocmentSC;
