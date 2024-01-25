export type TPaymentMethodCodes =
  | "cod"
  | "visa"
  | "mastercard"
  | "momo"
  | "vnpay";

export type TPaymentMethod = {
  code: string;
  name: string;
  imageUrl: string;
  discountValue: number;
};

export type TPaymentMethods = Array<TPaymentMethod>;
