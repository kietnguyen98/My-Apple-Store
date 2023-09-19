import { TUser } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const defaultUser: TUser = {
  id: uuidv4(),
  userName: "conchimxanhx",
  password: "1234",
  avatarUrl:
    "https://i.pinimg.com/564x/05/45/8c/05458cc5c8c2aebd232ff79fca3f429d.jpg",
  fullName: {
    firstName: "Kiet",
    lastName: "Nguyen Han Manh",
  },
  address:
    "293/23 Bach Dang Street, Ward 15, District Binh Thanh, Ho Chi Minh City",
  phone: "0766653542",
  birthday: "20/04/1998",
};
