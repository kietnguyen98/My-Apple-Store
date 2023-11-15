import { TPayments } from "../types";
import {
  CodPaymentImageUrl,
  masterCardPaymentImageUrl,
  momoWalletPaymentImageUrl,
  visaCardImageUrl,
  vnpayPaymentImageUrl,
} from "./images";

export const payments: TPayments = [
  { name: "COD", imageUrl: CodPaymentImageUrl },
  { name: "Visa Card", imageUrl: visaCardImageUrl },
  { name: "Master Card", imageUrl: masterCardPaymentImageUrl },
  { name: "Momo Wallet", imageUrl: momoWalletPaymentImageUrl },
  { name: "Vnpay", imageUrl: vnpayPaymentImageUrl },
];
