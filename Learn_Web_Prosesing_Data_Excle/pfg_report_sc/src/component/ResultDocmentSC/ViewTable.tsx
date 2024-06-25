import { cssBaseTabel } from "./indexCss";
import {
  typeDataSC,
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcleSC/typeindex";
import ViewTableDetail from "./ViewTableDetail";

type Props = {
  tableRef: React.MutableRefObject<null>;
  DataSC: {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
    DataCountSize: number;
  };
};

const ViewTable = ({ tableRef, DataSC }: Props) => {
  // console.info(
  //   DataSC.DataUploadSC == undefined ? 0 : DataSC.DataUploadSC.length
  // );
  //------------------------------------------------------------------------------------Value style table
  const fullColSpan = 10 + DataSC.DataCountSize;

  return (
    <table className="w-full" ref={tableRef} style={cssBaseTabel}>
      <tr>
        <td
          style={{
            fontSize: "2.0em",
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
            <td colSpan={fullColSpan} className="p-0">
              <ViewTableDetail
                dataAll={DataSC.DataUploadSC?.filter(
                  (item: typeDataSC) => value.destination == item.DESTINATION
                )}
                dataDes={value}
                dataPoDes={DataSC.DataProsesingPerPoDes.filter(
                  (item: typeUniquePerPoDes) =>
                    value.destination == item.destination
                )}
                fullColSpan={fullColSpan}
              />
            </td>
          </tr>
        ))
      )}
    </table>
  );
};

export default ViewTable;
