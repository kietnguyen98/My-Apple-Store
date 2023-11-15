import { GENDER_VALUES } from "@/app/share/constants";

export type TGender = (typeof GENDER_VALUES)[keyof typeof GENDER_VALUES];

export type TUser = {
  id: string;
  username: string;
  password: string;
  avatarUrl: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  address: string;
  gender: TGender;
  birthday: string;
};
