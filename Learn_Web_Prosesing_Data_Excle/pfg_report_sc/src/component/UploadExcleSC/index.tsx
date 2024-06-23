import { ReactSpreadsheetImport } from "react-spreadsheet-import";
import { typeDataSC } from "../../AppType";
import { typeUniquePerDes, typeUniquePerPoDes } from "./typeindex";

type Props = {
  Windo?: Boolean;
  setWindo: (value: boolean | undefined) => void;
  setDataSC: (value: {
    DataUploadSC: any;
    DataProsesingPerDes: typeUniquePerDes[];
    DataProsesingPerPoDes: typeUniquePerPoDes[];
  }) => void;
};

const UploadExcleSC = ({ Windo, setWindo, setDataSC }: Props) => {
  //   const Windo = true;
  const onClose = () => {
    setWindo(false);
  };
  const onSubmit = async (data: any, file: any) => {
    // console.info(data.all);

    if (data.all.length) {
      const UniquePerDes = await [
        ...new Set<string>(
          data.all.map((item: typeDataSC): string => item.DESTINATION)
        ),
      ].reduce((det, value) => {
        return [
          ...det,
          {
            destination: value,
            po: [
              ...new Set<string>(
                data.all
                  .filter((item: typeDataSC) => item.DESTINATION == value)
                  .map((item: typeDataSC) => item.PO)
              ),
            ],
          },
        ];
      }, [] as typeUniquePerDes[]);

      const UniquePerPoDes = await UniquePerDes.reduce((det, val) => {
        const getUniqueSizePerPoDes = val.po.reduce(
          (detPo, valPo) => [
            ...detPo,
            {
              destination: val.destination,
              po: valPo,
              size: [
                ...new Set<string>(
                  data.all
                    .filter(
                      (item: typeDataSC) =>
                        item.DESTINATION == val.destination && item.PO == valPo
                    )
                    .map((item: typeDataSC) => item.SIZE)
                ),
              ],
            },
          ],
          [] as typeUniquePerPoDes[]
        );

        return [...det, ...getUniqueSizePerPoDes];
      }, [] as typeUniquePerPoDes[]);

      await setDataSC({
        DataUploadSC: data.all,
        DataProsesingPerDes: UniquePerDes,
        DataProsesingPerPoDes: UniquePerPoDes,
      });

      // console.info(UniquePerPoDes);
    } else throw console.error("data kosong !!!");
  };

  const fields = [
    {
      // Visible in table header and when matching columns.
      label: "PO",
      // This is the key used for this field when we call onSubmit.
      key: "PO",
      // Allows for better automatic column matching. Optional.
      alternateMatches: ["po"],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input",
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "PO Number",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: "required",
          errorMessage: "PO is required",
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: "error",
        },
      ],
    },
    {
      label: "PO_ALLOCATION",
      key: "PO_ALLOCATION",
      alternateMatches: ["po_allocation", "Portion"],
      fieldType: {
        type: "input",
      },
      example: "Shipment Parsial Number",
      validations: [
        {
          rule: "required",
          errorMessage: "po_allocation is required",
          level: "error",
        },
      ],
    },
    {
      label: "DESTINATION",
      key: "DESTINATION",
      alternateMatches: ["destination"],
      fieldType: {
        type: "input",
      },
      example: "Destination Code",
      validations: [
        {
          rule: "required",
          errorMessage: "destination is required",
          level: "error",
        },
      ],
    },
    {
      label: "UNIT",
      key: "UNIT",
      alternateMatches: ["unit"],
      fieldType: {
        type: "input",
      },
      example: "unit Code",
      validations: [
        {
          rule: "required",
          errorMessage: "unit is required",
          level: "error",
        },
      ],
    },
    {
      label: "STYLE",
      key: "STYLE",
      alternateMatches: ["style"],
      fieldType: {
        type: "input",
      },
      example: "style name",
      validations: [
        {
          rule: "required",
          errorMessage: "style is required",
          level: "error",
        },
      ],
    },
    {
      label: "COLOR_CODE",
      key: "COLOR_CODE",
      alternateMatches: ["color_code"],
      fieldType: {
        type: "input",
      },
      example: "color code",
      validations: [
        {
          rule: "required",
          errorMessage: "color_code is required",
          level: "error",
        },
      ],
    },
    {
      label: "SIZE",
      key: "SIZE",
      alternateMatches: ["size"],
      fieldType: {
        type: "input",
      },
      example: "size garment",
      validations: [
        {
          rule: "required",
          errorMessage: "size is required",
          level: "error",
        },
      ],
    },
    {
      label: "QTY",
      key: "QTY",
      alternateMatches: ["qty"],
      fieldType: {
        type: "input",
      },
      example: "qty garment",
      validations: [
        {
          rule: "required",
          errorMessage: "qty is required",
          level: "error",
        },
      ],
    },
    {
      label: "PRICE",
      key: "PRICE",
      alternateMatches: ["price"],
      fieldType: {
        type: "input",
      },
      example: "price garment",
      validations: [
        {
          rule: "required",
          errorMessage: "price is required",
          level: "error",
        },
      ],
    },
    {
      label: "SURCHARGE",
      key: "SURCHARGE",
      alternateMatches: ["surcharge"],
      fieldType: {
        type: "input",
      },
      example: "surcharge garment",
      validations: [],
    },
  ];

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
