type TCategory = {
  id: string;
  name: "iPhone" | "iPad" | "iWatch";
};

type TCategories = Array<TCategory>;

export { TCategory, TCategories };
