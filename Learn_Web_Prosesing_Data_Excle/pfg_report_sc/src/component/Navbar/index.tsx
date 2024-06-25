import {
  typeDataSC,
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcleSC/typeindex";

type Props = {
  setWindo: (value: boolean | undefined) => void;
  setDataSC: (value: {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
    DataCountSize: number;
  }) => void;
};

const Navbar = ({ setWindo, setDataSC }: Props) => {
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
              DataProsesingPerDes: [],
              DataProsesingPerPoDes: [],
              DataCountSize: 0,
            });
          }}
        >
          Clear Data
        </button>
      </div>
    </div>
  );
};

export default Navbar;
