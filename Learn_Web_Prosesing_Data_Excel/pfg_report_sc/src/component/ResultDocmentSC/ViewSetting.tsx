import { typeCurrency, typeSize } from "./indexType";

type Props = {
  setWindoSeting: (value: boolean) => void;
  windoDataSetting?: {
    matauang: typeCurrency;
    size: typeSize[];
  };
  setWindoDataSetting: (value: {
    matauang: typeCurrency;
    size: typeSize[];
  }) => void;
};

const ViewSetting = ({
  setWindoSeting,
  windoDataSetting,
  setWindoDataSetting,
}: Props) => {
  return (
    <div className="rounded-lg bg-slate-600 px-3 py-1">
      <div className=""></div>
    </div>
  );
};

export default ViewSetting;
