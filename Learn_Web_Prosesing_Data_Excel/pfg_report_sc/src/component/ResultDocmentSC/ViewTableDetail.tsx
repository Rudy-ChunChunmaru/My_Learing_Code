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
};

const ViewTableDetail = ({ dataAll, dataDes, dataPoDes }: Props) => {
  //   console.info(dataPoDes);
  //------------------------------------------------------------------------------------FUNC PROSES DATA
  const fullColSpanDes = 11 + dataDes.size.length;

  type typeDataSCView = {
    style: string;
    description?: string;
    color_code: string;
    color_name: string;
    size_qty: { size: string; qty: number }[];
    qty_total: number;
    unit: string;
    base_price: number;
    upcharge: number;
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

        const dataSCViewProses = datafiler?.reduce((det, valdatafilter) => {
          const base_price = isNaN(valdatafilter.PRICE)
            ? NaN
            : valdatafilter.PRICE;

          const upcharge = valdatafilter.SURCHARGE
            ? isNaN(valdatafilter.SURCHARGE)
              ? NaN
              : valdatafilter.SURCHARGE
            : 0;

          const detFindIndex = det.findIndex(
            (detcek) =>
              detcek.style == valdatafilter.STYLE &&
              detcek.color_code == valdatafilter.COLOR_CODE &&
              detcek.unit == valdatafilter.UNIT &&
              detcek.base_price == base_price &&
              detcek.upcharge == upcharge
          );

          // add new style
          if (detFindIndex == -1) {
            const setdatascview: typeDataSCView = {
              style: valdatafilter.STYLE,
              description: valdatafilter.DESCRIPTION,
              color_code: valdatafilter.COLOR_CODE,
              color_name: valdatafilter.COLOR_NAME,
              size_qty: [
                {
                  size: valdatafilter.SIZE,
                  qty: isNaN(valdatafilter.QTY) ? NaN : valdatafilter.QTY,
                },
              ],
              qty_total: isNaN(valdatafilter.QTY) ? NaN : valdatafilter.QTY,
              unit: valdatafilter.UNIT,
              base_price: base_price,
              upcharge: upcharge,
              price: Number(base_price) + Number(upcharge),
              amount:
                (Number(base_price) + Number(upcharge)) *
                Number(isNaN(valdatafilter.QTY) ? NaN : valdatafilter.QTY),
            };

            return [...det, { ...setdatascview }];
          }
          // tambahakan size atau buat size dengan style yang uda ada
          else {
            const chgdet = det;

            const chgdetFindSizeIndex = chgdet[detFindIndex].size_qty.findIndex(
              (itemSizeQty) => itemSizeQty.size == valdatafilter.SIZE
            );
            // add new size
            if (chgdetFindSizeIndex == -1)
              chgdet[detFindIndex].size_qty.push({
                size: valdatafilter.SIZE,
                qty: isNaN(valdatafilter.QTY) ? NaN : valdatafilter.QTY,
              });
            // tambah qty dengan size yang sama
            else
              chgdet[detFindIndex].size_qty[chgdetFindSizeIndex].qty =
                Number(chgdet[detFindIndex].size_qty[chgdetFindSizeIndex].qty) +
                Number(isNaN(valdatafilter.QTY) ? NaN : valdatafilter.QTY);

            chgdet[detFindIndex].qty_total =
              Number(chgdet[detFindIndex].qty_total) +
              Number(isNaN(valdatafilter.QTY) ? NaN : valdatafilter.QTY);

            chgdet[detFindIndex].amount =
              (Number(base_price) + Number(upcharge)) *
              Number(chgdet[detFindIndex].qty_total);

            return [...chgdet];
          }
        }, [] as typeDataSCView[]);

        return { PO_ALLOCATION: value, dataSCViewProses: dataSCViewProses };
      });
    // console.info(dataSCView);
    return dataSCView;
  };

  //------------------------------------------------------------------------------------ViewData
  const ViewData = ({ datapo }: { datapo: string[] }) => {
    const totalQty: { unit: string; qty: number }[] = [];
    const totalAmount: { price: number } = { price: 0 };

    return (
      <table
        style={{
          ...cssBaseTabel,
          width: "100%",
          height: "100%",
        }}
      >
        <thead>
          {TableHead}
          {TableHeadSize}
        </thead>

        {datapo.map((numberPo) => {
          const finalDataView = dataDetail((numberPo = numberPo));
          return (
            <tbody>
              <tr>
                <td
                  style={{ ...cssborder, ...cssfontbody }}
                  colSpan={fullColSpanDes}
                >
                  PO: {numberPo}
                </td>
              </tr>
              {finalDataView.map((item) => {
                const poallocationhead = (
                  <td
                    style={{
                      ...cssborder,
                      ...cssfontbody,
                      verticalAlign: "top",
                    }}
                    rowSpan={item.dataSCViewProses?.length}
                  >
                    <strong>{item.PO_ALLOCATION}</strong>
                  </td>
                );
                return item.dataSCViewProses?.map((itemview, indexitemview) => {
                  // add qty total per unit
                  const unitIndex = totalQty.findIndex(
                    (itemunit) => itemunit.unit == itemview.unit
                  );
                  if (unitIndex == -1)
                    totalQty.push({
                      unit: itemview.unit,
                      qty: itemview.qty_total,
                    });
                  else
                    totalQty[unitIndex].qty =
                      Number(totalQty[unitIndex].qty) +
                      Number(itemview.qty_total);

                  // // add price total
                  totalAmount.price =
                    Number(totalAmount.price) + Number(itemview.amount);

                  const trrow = (
                    <tr>
                      {indexitemview == 0 && poallocationhead}
                      <td style={{ ...cssborder, ...cssfontbody }}>
                        {itemview.style}
                      </td>
                      <td style={{ ...cssborder, ...cssfontbody }}>
                        {itemview.description}
                      </td>
                      <td
                        style={{
                          ...cssborder,
                          ...cssfontbody,
                          textAlign: "center",
                        }}
                      >
                        {itemview.color_code}
                      </td>
                      <td style={{ ...cssborder, ...cssfontbody }}>
                        {itemview.color_name}
                      </td>

                      {dataDes.size.map((value) => (
                        <td
                          style={{
                            ...cssborder,
                            ...cssfontbody,
                            textAlign: "center",
                          }}
                        >
                          {itemview.size_qty
                            .filter((itemsizeqty) => itemsizeqty.size == value)
                            .map((val) => val.qty)}
                        </td>
                      ))}

                      <td
                        style={{
                          ...cssborder,
                          ...cssfontbody,
                          textAlign: "right",
                        }}
                      >
                        {itemview.qty_total}
                      </td>
                      <td
                        style={{
                          ...cssborder,
                          ...cssfontbody,
                          textAlign: "center",
                        }}
                      >
                        {itemview.unit}
                      </td>
                      <td
                        style={{
                          ...cssborder,
                          ...cssfontbody,
                          textAlign: "right",
                        }}
                      >
                        {itemview.base_price}
                      </td>
                      <td
                        style={{
                          ...cssborder,
                          ...cssfontbody,
                          textAlign: "right",
                        }}
                      >
                        {itemview.upcharge != 0 || isNaN(itemview.upcharge)
                          ? itemview.upcharge
                          : ""}
                      </td>
                      <td
                        style={{
                          ...cssborder,
                          ...cssfontbody,
                          textAlign: "right",
                        }}
                      >
                        {itemview.price}
                      </td>
                      <td
                        style={{
                          ...cssborder,
                          ...cssfontbody,
                          textAlign: "right",
                        }}
                      >
                        {itemview.amount}
                      </td>
                    </tr>
                  );
                  return trrow;
                });
              })}
            </tbody>
          );
        })}
        <tr>
          <td
            style={{ ...cssborder, ...cssfontbody, textAlign: "right" }}
            colSpan={5 + dataDes.size.length}
          >
            TOTAL:
          </td>
          <td
            style={{ ...cssborder, ...cssfontbody, textAlign: "right" }}
            colSpan={2}
          >
            {totalQty.map((itemunit) => (
              <span>{itemunit.qty + " " + itemunit.unit}</span>
            ))}
          </td>
          <td
            style={{ ...cssborder, ...cssfontbody, textAlign: "right" }}
            colSpan={4}
          >
            {totalAmount.price}
          </td>
        </tr>

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

  const TableHead = (
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
  );

  const TableHeadSize = (
    <tr>
      {dataDes.size.map((value) => (
        <th style={{ ...cssborderHead, ...cssfonthead }}>{value}</th>
      ))}
    </tr>
  );

  return (
    <table
      style={{ ...cssBaseTabel, width: "100%", height: "100%" }}
      id={dataDes.destination}
    >
      <tr>
        <td style={{ ...cssfonthead }}>
          <strong>{dataDes.destination}</strong>
        </td>
      </tr>

      <tr style={{ padding: "0" }}>
        <td
          style={{
            padding: "0",
          }}
        >
          <ViewData datapo={dataDes.po} />
        </td>
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
