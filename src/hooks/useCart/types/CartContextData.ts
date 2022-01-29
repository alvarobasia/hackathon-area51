import { CartData } from './CartData';

import { UpdateProductAmount } from './UpdateProductAmount';

export type CartContextData = {
  cart: CartData[];
  addProduct: (product_id: string, _product_sku?: string) => Promise<void>;
  removeProduct: (product_id: string) => void;
  updateProductAmount: ({ product_id, amount }: UpdateProductAmount) => void;
};
