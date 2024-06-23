import {
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcleSC/typeindex";

type Props = {
  setWindo: (value: boolean | undefined) => void;
  setDataSC: (value: {
    DataUploadSC: any;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
  }) => void;
};

const Navbar = ({ setWindo, setDataSC }: Props) => {
  return (
    <div className="flex justify-start gap-5 rounded-lg bg-slate-500 px-5 py-2 text-white">
      <div className="my-auto ">Repot Salas Confirm</div>
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
