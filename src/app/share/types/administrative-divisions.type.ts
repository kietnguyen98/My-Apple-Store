export type TAdministrativeUnit = {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
};

export type TWard = TAdministrativeUnit;

export type TWards = Array<TWard>;

export type TDistrict = TAdministrativeUnit & {
  wards: Array<TWard>;
};

export type TDistricts = Array<TDistrict>;

export type TProvince = Omit<TAdministrativeUnit, "short_codename"> & {
  districts: Array<TDistrict>;
};

export type TProvinces = Array<TProvince>;
