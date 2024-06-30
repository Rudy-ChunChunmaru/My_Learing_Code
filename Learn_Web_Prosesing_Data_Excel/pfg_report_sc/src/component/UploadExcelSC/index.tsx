import { ReactSpreadsheetImport } from "react-spreadsheet-import";
import { typeDataSC, typeUniquePerDes, typeUniquePerPoDes } from "./typeindex";
import { fields } from "./indexFields";

type Props = {
  Windo?: boolean;
  setWindo: (value: boolean | undefined) => void;
  setDataSC: (value: {
    DataUploadSC: typeDataSC[] | undefined;
    DataProsesingUniqueSize: string[];
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
  }) => void;
};

const UploadExcleSC = ({ Windo, setWindo, setDataSC }: Props) => {
  //   const Windo = true;
  const onClose = () => {
    setWindo(undefined);
  };
  const onSubmit = async (data: any) => {
    console.info(data.all);
    if (data.all.length) {
      const dataAll: typeDataSC[] = data.all;

      const dataSizeAll: string[] = [
        ...new Set<string>(dataAll.map((item) => item.SIZE)),
      ]
        .sort()
        .reverse();

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
        DataProsesingUniqueSize: dataSizeAll,
        DataProsesingPerDes: UniquePerDes,
        DataProsesingPerPoDes: UniquePerPoDes,
      });

      console.info(dataSizeAll);
    } else throw console.error("data kosong !!!");
  };

  return (
    <div className="App">
      <ReactSpreadsheetImport
        isOpen={Windo}
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
