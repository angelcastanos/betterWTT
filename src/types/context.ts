import { Product, ProductCart } from '../interfaces/product';

export type ShopContextType = {
	products: Product[];
	setInitialProducts: (products: Product[]) => void;
	itemsInCart: ProductCart[];
	saveProduct: (product: Product) => void;
	addToCart: (id: number) => void;
	deleteFromCart: (id: number) => void;
  clearCart: () => void;
};