import Spreadsheet from "react-spreadsheet";
import UploadWindo from "./component/UploadWindo";

function App() {
  const data = [
    [
      { value: "a", readOnly: true },
      { value: "c", readOnly: true },
      { value: "c", readOnly: true },
    ],
    [
      { value: "b", readOnly: true },
      { value: "d", readOnly: true },
    ],
  ];
  return (
    <div className="App">
      <button>Upload</button>
      <Spreadsheet data={data} />;
      <UploadWindo />
    </div>
  );
}

export default App;
