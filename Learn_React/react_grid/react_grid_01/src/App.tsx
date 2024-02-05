import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

const App = () => {
  const [data, setData] = useState([
    [{ value: "Vanilla" }, { value: "Chocolate" }, { value: "" }],
    [{ value: "Strawberry" }, { value: "Cookies" }, { value: "" }],
  ]);
  return <Spreadsheet data={data} onChange={setData} />;
};

// const App = () => {
//   const columnLabels = ["Flavour", "Food"];
//   const rowLabels = ["Item 1", "Item 2", "Item 2", "Item 2", "Item 2"];
//   const data = [
//     [{ value: "Vanilla" }, { value: "Chocolate" }],
//     [{ value: "Strawberry" }, { value: "Cookies" }],
//     [{ value: "Vanilla" }, { value: "Chocolate" }],
//     [{ value: "Strawberry" }, { value: "Cookies" }],
//     [{ value: "Vanilla" }, { value: "Chocolate" }],
//     [{ value: "Strawberry" }, { value: "Cookies" }],
//   ];
//   return (
//     <Spreadsheet
//       data={data}
//       columnLabels={columnLabels}
//       rowLabels={rowLabels}
//     />
//   );
// };

export default App;
