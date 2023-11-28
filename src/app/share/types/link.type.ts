export type TLink = {
  name: string;
  to: string;
};

export type TBreadcrumbLink = TLink & {
  iconName?: string;
  isActive: boolean;
};
