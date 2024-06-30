import {
  typeDataSC,
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcelSC/typeindex";

type Props = {
  setWindo: (value: boolean | undefined) => void;
  setShowTampte: (value: boolean) => void;
  showTampte: boolean;
  setDataSC: (value: {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingUniqueSize: string[];
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
  }) => void;
};

const Navbar = ({ setWindo, setDataSC, setShowTampte, showTampte }: Props) => {
  return (
    <div className="flex justify-start gap-5 rounded-lg bg-slate-500 px-5 py-2 text-white">
      <div className="my-auto ">REPOT SALES CONFRMATION</div>
      <div className="flex justify-start gap-2">
        <button
          className="rounded-lg border-2 border-orange-50 px-3 py-2 hover:bg-slate-400"
          onClick={() => {
            setWindo(true);
          }}
        >
          Upload Excle
        </button>
        <button
          className="rounded-lg border-2 border-orange-50 px-3 py-2 hover:bg-slate-400"
          onClick={() => {
            setDataSC({
              DataUploadSC: undefined,
              DataProsesingUniqueSize: [],
              DataProsesingPerDes: [],
              DataProsesingPerPoDes: [],
            });
          }}
        >
          Clear Data
        </button>

        <button
          className="rounded-lg border-2 border-orange-50 px-3 py-2 hover:bg-slate-400"
          onClick={() => setShowTampte(!showTampte)}
        >
          Template
        </button>
      </div>
    </div>
  );
};

export default Navbar;
