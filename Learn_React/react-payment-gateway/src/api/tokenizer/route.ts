import Midtrans from "midtrans-client";
import { NextRequest } from "next/server";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: import.meta.env.SERVER_KEY,
  ClientKey: import.meta.env.CLIENT_KEY,
});

export async function POST(request: any) {
  const reqData: any = await request.json();

  let paramenter = {
    item_details: {
      name: reqData.productName,
      price: reqData.price,
    },
    transaction_details: {
      order_id: reqData.id,
      gross_amount: reqData.price,
    },
  };

  const token = await snap.createTransactionToken(paramenter);
  console.log(token);
  return NextRequest.json({ token });
}
