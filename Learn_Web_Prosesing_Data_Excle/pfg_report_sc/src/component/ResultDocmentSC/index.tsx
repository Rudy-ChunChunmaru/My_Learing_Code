import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

import {
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcleSC/typeindex";

type Props = {
  DataSC: {
    DataUploadSC: any;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
    DataCountSize: number;
  };
};

const ResultDocmentSC = ({ DataSC }: Props) => {
  console.info(
    DataSC.DataUploadSC == undefined ? 0 : DataSC.DataUploadSC.length
  );
  //------------------------------------------------------------------------------------FUNC BUTTON
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "SC",
    sheet: "sheet1",
  });
  //------------------------------------------------------------------------------------Value style table
  const cssBaseTabel = {
    fontSize: "10px",
  };

  const cssborder = {
    padding: "0.1em",
    border: "0.1em solid black",
  };

  const cssfonthead = {
    // fontSize: "18px",
    fontSize: "1.2em",
    fontFamily: "Cambria",
  };

  const cssfontbody = {
    // fontSize: "14px",
    fontSize: "1.0em",
    fontFamily: "Cambria",
  };

  const fullColSpan = 10 + DataSC.DataCountSize;
  //------------------------------------------------------------------------------------VIEW
  const ViewDataResultSC = ({ data }: { data: typeUniquePerDes }) => {
    return (
      <table className="w-full" id={data.destination}>
        <thead>
          <tr>
            <td style={{ ...cssfonthead }} colSpan={fullColSpan}>
              <strong>{data.destination}</strong>
            </td>
          </tr>
          <tr>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              PO ALLOCATION
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              STYLE
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              DESCRIPTION
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              COLOR CODE
            </th>
            <th
              style={{ ...cssborder, ...cssfonthead }}
              colSpan={data.size.length}
              rowSpan={1}
            >
              SIZE / QTY
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              QTY TOTAL
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              UNIT
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              PRICE
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              SURCHARGE
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              FINAL PRICE
            </th>
            <th style={{ ...cssborder, ...cssfonthead }} rowSpan={2}>
              AMOUNT
            </th>
          </tr>
          <tr>
            {data.size.map((value) => (
              <th style={{ ...cssborder, ...cssfonthead }}>{value}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr></tr>
        </tbody>

        <tr>
          <th style={{ width: "10em" }}>&nbsp;</th>
          <th style={{ width: "10em" }}>&nbsp;</th>
          <th style={{}}>&nbsp;</th>
          <th style={{ width: "6em" }}>&nbsp;</th>
          {data.size.map(() => (
            <th style={{ width: "3em" }}>&nbsp;</th>
          ))}
          <th style={{ width: "8em" }}>&nbsp;</th>
          <th style={{ width: "4em" }}>&nbsp;</th>
          <th style={{ width: "8em" }}>&nbsp;</th>
          <th style={{ width: "8em" }}>&nbsp;</th>
          <th style={{ width: "8em" }}>&nbsp;</th>
          <th style={{ width: "12em" }}>&nbsp;</th>
        </tr>

        <tr>
          <td>
            <br></br>
          </td>
        </tr>
      </table>
    );
  };

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

          <button
            className="w-fit rounded-xl border-2  px-3 py-1 text-white hover:bg-slate-200 hover:text-black"
            onClick={onDownload}
          >
            Export excel
          </button>
        </div>
      </div>

      <div
        id="ResultDocument"
        className="my-5 h-full min-h-[1754px] w-[1240px] rounded-lg bg-white"
      >
        <div className="mx-auto h-full w-[86%] pt-20">
          <table className="w-full" ref={tableRef} style={cssBaseTabel}>
            <tr>
              <td
                style={{
                  fontSize: "2.6em",
                  fontFamily: "Cambria",
                  textAlign: "center",
                }}
                colSpan={fullColSpan}
              >
                <strong>SALES CONFRMATION</strong>
              </td>
            </tr>

            <tr>
              <td colSpan={fullColSpan}>
                <br></br>
                <br></br>
              </td>
            </tr>

            {DataSC.DataUploadSC == undefined ? (
              <tr>
                <td></td>
              </tr>
            ) : (
              DataSC.DataProsesingPerDes.map((value) => (
                <tr>
                  <td colSpan={fullColSpan}>
                    <ViewDataResultSC data={value} />
                  </td>
                </tr>
              ))
            )}
          </table>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ResultDocmentSC;
