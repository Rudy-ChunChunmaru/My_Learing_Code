export type typeUniquePerDes = {
  destination: string;
  po: string[];
  size: string[];
};

export type typeUniquePerPoDes = {
  destination: string;
  po: string;
  size: string[];
  po_allocation: string[];
};

export type typeDataSC = {
  PO: string;
  PO_ALLOCATION: string;
  DESTINATION: string;
  STYLE: string;
  DESCRIPTION?: string;
  COLOR_CODE: string;
  SIZE: string;
  UNIT: string;
  PRICE: number;
  SURCHARGE?: number;
};
