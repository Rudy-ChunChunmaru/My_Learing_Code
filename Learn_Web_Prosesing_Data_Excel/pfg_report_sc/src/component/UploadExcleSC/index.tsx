import { ReactSpreadsheetImport } from "react-spreadsheet-import";
import { typeDataSC, typeUniquePerDes, typeUniquePerPoDes } from "./typeindex";
import { fields } from "./indexFields";

type Props = {
  Windo?: Boolean;
  setWindo: (value: boolean | undefined) => void;
  setDataSC: (value: {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
    DataCountSize: number;
  }) => void;
};

const UploadExcleSC = ({ Windo, setWindo, setDataSC }: Props) => {
  //   const Windo = true;
  const onClose = () => {
    setWindo(false);
  };
  const onSubmit = async (data: any, file: any) => {
    console.info(data.all);
    if (data.all.length) {
      const dataAll: typeDataSC[] = data.all;
      let countSizeOnDes: number = 0;
      const UniquePerDes = await [
        ...new Set<string>(
          dataAll.map((item: typeDataSC): string => item.DESTINATION)
        ),
      ].reduce((det, value) => {
        const getDataFilerSize = () => {
          const datafiltersize = [
            ...new Set<string>(
              dataAll
                .filter((item: typeDataSC) => item.DESTINATION == value)
                .map((item: typeDataSC) => item.SIZE)
            ),
          ];

          if (countSizeOnDes < datafiltersize.length)
            countSizeOnDes = datafiltersize.length;

          return datafiltersize;
        };

        return [
          ...det,
          {
            destination: value,
            po: [
              ...new Set<string>(
                dataAll
                  .filter((item: typeDataSC) => item.DESTINATION == value)
                  .map((item: typeDataSC) => item.PO)
              ),
            ],
            size: getDataFilerSize(),
          },
        ];
      }, [] as typeUniquePerDes[]);

      let countSizeOnPoDes: number = 0;
      const UniquePerPoDes = await UniquePerDes.reduce((det, val) => {
        const getUniqueSizePerPoDes = val.po.reduce((detPo, valPo) => {
          const getDataFilerSize = () => {
            const datafiltersize = [
              ...new Set<string>(
                dataAll
                  .filter(
                    (item: typeDataSC) =>
                      item.DESTINATION == val.destination && item.PO == valPo
                  )
                  .map((item: typeDataSC) => item.SIZE)
              ),
            ];

            if (countSizeOnPoDes < datafiltersize.length)
              countSizeOnPoDes = datafiltersize.length;

            return datafiltersize;
          };

          const getDataFilerPoAllocation = () => {
            const datafilterpoallocation = dataAll
              .filter(
                (item: typeDataSC) =>
                  item.DESTINATION == val.destination && item.PO == valPo
              )
              .map((item: typeDataSC) => item.PO_ALLOCATION);

            return [...new Set<string>(datafilterpoallocation)];
          };

          return [
            ...detPo,
            {
              destination: val.destination,
              po: valPo,
              po_allocation: getDataFilerPoAllocation(),
              size: getDataFilerSize(),
            },
          ];
        }, [] as typeUniquePerPoDes[]);

        return [...det, ...getUniqueSizePerPoDes];
      }, [] as typeUniquePerPoDes[]);

      await setDataSC({
        DataUploadSC: dataAll,
        DataProsesingPerDes: UniquePerDes,
        DataProsesingPerPoDes: UniquePerPoDes,
        DataCountSize: countSizeOnDes,
      });
    } else throw console.error("data kosong !!!");
  };

  return (
    <div className="App">
      <ReactSpreadsheetImport
        isOpen={Windo == undefined ? false : Windo}
        onClose={onClose}
        onSubmit={onSubmit}
        fields={fields}
        customTheme={{
          components: {
            UploadStep: {
              baseStyle: {
                tableWrapper: {
                  h: "90px",
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default UploadExcleSC;
