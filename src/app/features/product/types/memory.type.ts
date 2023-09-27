type TMemoryCapacity = {
  id: string;
  name: string;
  plusPrice: number;
  value: number;
};

type TMemoryCapacities = Array<TMemoryCapacity>;

export { TMemoryCapacity, TMemoryCapacities };
