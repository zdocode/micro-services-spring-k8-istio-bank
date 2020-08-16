export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
}

export const defaultValue: Readonly<IProduct> = {};
