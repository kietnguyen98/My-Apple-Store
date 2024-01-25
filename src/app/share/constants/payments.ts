import { TPaymentMethods, TPaymentMethodCodes } from "../types";
import {
  CodPaymentImageUrl,
  masterCardPaymentImageUrl,
  momoWalletPaymentImageUrl,
  visaCardImageUrl,
  vnpayPaymentImageUrl,
} from "./images";

export const PAYMENT_METHOD_CODES: { [key: string]: TPaymentMethodCodes } = {
  COD: "cod",
  VISA: "visa",
  MASTER_CARD: "mastercard",
  MOMO: "momo",
  VNPAY: "vnpay",
} as const;

export const PAYMENT_METHODS: TPaymentMethods = [
  {
    code: PAYMENT_METHOD_CODES.COD,
    name: "COD",
    imageUrl: CodPaymentImageUrl,
    discountValue: 0,
  },
  {
    code: PAYMENT_METHOD_CODES.VISA,
    name: "Visa Card",
    imageUrl: visaCardImageUrl,
    discountValue: 5,
  },
  {
    code: PAYMENT_METHOD_CODES.MASTER_CARD,
    name: "Master Card",
    imageUrl: masterCardPaymentImageUrl,
    discountValue: 5,
  },
  {
    code: PAYMENT_METHOD_CODES.MOMO,
    name: "Momo Wallet",
    imageUrl: momoWalletPaymentImageUrl,
    discountValue: 2,
  },
  {
    code: PAYMENT_METHOD_CODES.VNPAY,
    name: "Vnpay",
    imageUrl: vnpayPaymentImageUrl,
    discountValue: 2,
  },
];
