import { cssBaseTabel } from "./indexCss";
import {
  typeDataSC,
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcelSC/typeindex";
import ViewTableDetail from "./ViewTableDetail";

type Props = {
  tableRef: React.MutableRefObject<null>;
  DataSC: {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
  };
};

const ViewTable = ({ tableRef, DataSC }: Props) => {
  // console.info(
  //   DataSC.DataUploadSC == undefined ? 0 : DataSC.DataUploadSC.length
  // );
  //------------------------------------------------------------------------------------Value style table

  return (
    <table className="w-full" ref={tableRef} style={cssBaseTabel}>
      <tr>
        <td
          style={{
            fontSize: "2.0em",
            fontFamily: "Cambria",
            textAlign: "center",
          }}
        >
          <strong>SALES CONFRMATION</strong>
        </td>
      </tr>

      <tr>
        <td>
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
            <td className="p-0">
              <ViewTableDetail
                dataAll={DataSC.DataUploadSC?.filter(
                  (item: typeDataSC) => value.destination == item.DESTINATION
                )}
                dataDes={value}
                dataPoDes={DataSC.DataProsesingPerPoDes.filter(
                  (item: typeUniquePerPoDes) =>
                    value.destination == item.destination
                )}
              />
            </td>
          </tr>
        ))
      )}
    </table>
  );
};

export default ViewTable;
