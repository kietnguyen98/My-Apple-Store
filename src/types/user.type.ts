export type TUser = {
  id: string;
  userName: string;
  password: string;
  avatarUrl: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  address: string;
  birthday: string;
};
