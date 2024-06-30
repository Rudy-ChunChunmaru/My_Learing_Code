import Spreadsheet from "react-spreadsheet";

type Props = {};

const TamplateExcelSC = ({}: Props) => {
  const data = [
    [
      { value: "PO", readOnly: true },
      { value: "PO_ALLOCATION", readOnly: true },
      { value: "DESTINATION", readOnly: true },
      { value: "STYLE", readOnly: true },
      { value: "DESCRIPTION", readOnly: true },
      { value: "COLOR_CODE", readOnly: true },
      { value: "COLOR_NAME", readOnly: true },
      { value: "SIZE", readOnly: true },
      { value: "QTY", readOnly: true },
      { value: "UNIT", readOnly: true },
      { value: "PRICE", readOnly: true },
      { value: "SURCHARGE", readOnly: true },
    ],
  ];

  return (
    <div className="m-3 rounded-lg bg-slate-500 px-5 py-2 text-white">
      <Spreadsheet data={data}></Spreadsheet>
    </div>
  );
};

export default TamplateExcelSC;
