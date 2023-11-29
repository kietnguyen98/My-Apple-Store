import { TUser } from "@/app/features/auth/types";
import { GENDER_VALUES } from "@/app/share/constants";
import { v4 as uuidv4 } from "uuid";

export const defaultUser1: TUser = {
  id: uuidv4(),
  username: "songokussj3",
  password: "manhkiet1998",
  avatarUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRib1DxLrnne6zC0hUTCfb_dY0GyEXKmd75Og&usqp=CAU",
  fullName: {
    firstName: "Kiet",
    lastName: "Nguyen Han Manh",
  },
  gender: GENDER_VALUES.MALE,
  address:
    "293/23 Bach Dang Street, Ward 15, District Binh Thanh, Ho Chi Minh City",
  phone: "0766653542",
  birthday: "20/04/1998",
};

export const defaultUser2: TUser = {
  id: uuidv4(),
  username: "songohanssj2",
  password: "manhkiet1998",
  avatarUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pIcmOUFr4XUlWp4Apt6WV26jlo6Ag_bthw&usqp=CAU",
  fullName: {
    firstName: "Kiet",
    lastName: "Nguyen Han Manh",
  },
  gender: GENDER_VALUES.MALE,
  address:
    "293/23 Bach Dang Street, Ward 15, District Binh Thanh, Ho Chi Minh City",
  phone: "0766653542",
  birthday: "20/04/1998",
};

export const users: Array<TUser> = [defaultUser1, defaultUser2];
