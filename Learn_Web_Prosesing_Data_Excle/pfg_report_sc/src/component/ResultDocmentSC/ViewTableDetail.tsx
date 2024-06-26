import {
  cssBaseTabel,
  cssfonthead,
  cssfontbody,
  cssborderHead,
  cssborder,
} from "./indexCss";

import {
  typeDataSC,
  typeUniquePerDes,
  typeUniquePerPoDes,
} from "../UploadExcleSC/typeindex";

type Props = {
  dataAll?: typeDataSC[];
  dataDes: typeUniquePerDes;
  dataPoDes: typeUniquePerPoDes[];
  fullColSpan: number;
};

const ViewTableDetail = ({
  dataAll,
  dataDes,
  dataPoDes,
  fullColSpan,
}: Props) => {
  //   console.info(dataPoDes);
  //------------------------------------------------------------------------------------FUNC PROSES DATA
  const fullColSpanDes = 11 + dataDes.size.length;

  type typeDataSCView = {
    style: string;
    description: string;
    color_code: string;
    color_name: string;
    size_qty: { size: string; qty: number }[];
    qty_total: number;
    unit: string;
    base_price: number;
    upcharge: string;
    price: number;
    amount: number;
  };

  const dataDetail = (numberPo: string) => {
    const dataSCView = dataPoDes
      .filter((val: typeUniquePerPoDes) => val.po == numberPo)[0]
      .po_allocation.map((value) => {
        const datafiler = dataAll?.filter(
          (item) =>
            item.DESTINATION == dataDes.destination &&
            item.PO == numberPo &&
            item.PO_ALLOCATION == value
        );

        const dataSCViewProses = datafiler?.reduce(
          (det: typeDataSCView[], valdatafilter: typeDataSC) => {
            const detfilterdata = det.filter((detcek) => {
              detcek.style == valdatafilter.STYLE &&
                detcek.color_code == valdatafilter.COLOR_CODE;
            });

            if (detfilterdata == undefined) {
              return [...det];
            } else {
              return [...det];
            }
          },
          [] as typeDataSCView[]
        );

        return { PO_ALLOCATION: value, dataSCViewProses: dataSCViewProses };
      });
    console.info(dataSCView);
  };

  //------------------------------------------------------------------------------------ViewData
  const ViewData = ({ numberPo }: { numberPo: string }) => {
    dataDetail((numberPo = numberPo));
    return (
      <table
        style={{
          ...cssBaseTabel,
          width: "100%",
          height: "100%",
        }}
      >
        <tr>
          <td style={{ ...cssborder, ...cssfontbody }} colSpan={fullColSpanDes}>
            PO: {numberPo}
          </td>
        </tr>

        {}

        <tr>
          <td style={{ padding: "0", width: "8em" }}></td>
          <td style={{ padding: "0", width: "10em" }}></td>
          <td style={{ padding: "0", minWidth: "18em" }}></td>
          <td style={{ padding: "0", width: "5em" }}></td>
          <td style={{ padding: "0", width: "8em" }}></td>
          {dataDes.size.map(() => (
            <td style={{ padding: "0", width: "3em" }}></td>
          ))}
          <td style={{ padding: "0", width: "8em" }}></td>
          <td style={{ padding: "0", width: "3em" }}></td>
          <td style={{ padding: "0", width: "5em" }}></td>
          <td style={{ padding: "0", width: "5em" }}></td>
          <td style={{ padding: "0", width: "5em" }}></td>
          <td style={{ padding: "0", width: "12em" }}></td>
        </tr>
      </table>
    );
  };
  return (
    <table
      style={{ ...cssBaseTabel, width: "100%", height: "100%" }}
      id={dataDes.destination}
    >
      <tr>
        <td style={{ ...cssfonthead }} colSpan={fullColSpan}>
          <strong>{dataDes.destination}</strong>
        </td>
      </tr>
      <tr>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          ALLOCATION
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          STYLE
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          DESCRIPTION
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          COLOR CODE
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          COLOR NAME
        </th>
        <th
          style={{ ...cssborderHead, ...cssfonthead }}
          colSpan={dataDes.size.length}
          rowSpan={1}
        >
          SIZE / QTY
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          QTY TOTAL
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          UNIT
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          BASE PRICE
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          UPCHARGE
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          PRICE
        </th>
        <th style={{ ...cssborderHead, ...cssfonthead }} rowSpan={2}>
          AMOUNT
        </th>
      </tr>
      <tr>
        {dataDes.size.map((value) => (
          <th style={{ ...cssborderHead, ...cssfonthead }}>{value}</th>
        ))}
      </tr>

      <tr style={{ padding: "0" }}>
        <td
          style={{
            padding: "0",
            borderLeft: "0.1em solid black",
            borderRight: "0.1em solid black",
          }}
          colSpan={fullColSpanDes}
        >
          {dataDes.po.map((value) => (
            <ViewData numberPo={value} />
          ))}
        </td>
      </tr>

      <tr>
        <th style={{ width: "8em" }}>&nbsp;</th>
        <th style={{ width: "10em" }}>&nbsp;</th>
        <th style={{ minWidth: "18em" }}>&nbsp;</th>
        <th style={{ width: "5em" }}>&nbsp;</th>
        <th style={{ width: "8em" }}>&nbsp;</th>
        {dataDes.size.map(() => (
          <th style={{ width: "3em" }}>&nbsp;</th>
        ))}
        <th style={{ width: "8em" }}>&nbsp;</th>
        <th style={{ width: "3em" }}>&nbsp;</th>
        <th style={{ width: "5em" }}>&nbsp;</th>
        <th style={{ width: "5em" }}>&nbsp;</th>
        <th style={{ width: "5em" }}>&nbsp;</th>
        <th style={{ width: "12em" }}>&nbsp;</th>
      </tr>

      <tr>
        <td>
          <br></br>
        </td>
      </tr>
    </table>
  );
};

export default ViewTableDetail;
