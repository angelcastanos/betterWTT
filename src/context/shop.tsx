/**
*@fileoverview Shop context
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

import { createContext, useState, PropsWithChildren } from "react";

//third party libraries
import { v4 as uuidv4 } from "uuid";

//interfaces
import { Product, ProductCart } from "../interfaces/product";

//types
import { ShopContextType } from "../types/context";

export const ShopContext = createContext<ShopContextType | null>(null);

/**
 * Provides the shop context exposing the products and the cart methods
 * @param children React children
 * @returns {JSX.Element} JSX Element
 */
const ShopProvider = ({ children }: PropsWithChildren) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [itemsInCart, setItemsInCart] = useState<ProductCart[]>([]);

	const setInitialProducts = (products: Product[]) => {
		setProducts(products);
	};

	const saveProduct = (product: Product) => {
		const newId = Math.max(...products.map((product) => product.id)) + 1;
		product.id = newId;
		setProducts([...products, product]);
	};

	const addToCart = (id: number) => {
		const productToAdd = products.find((product) => product.id === id);
		if (!productToAdd) return;
		if (productToAdd.stock === 0) return;

		const quantity =
			itemsInCart.filter((item) => item.id === id).length + 1;
		
		const productInCart = itemsInCart.find((item) => item.id === id);
		productToAdd.stock--;
		if (productInCart) {
			productInCart.quantity++;
			setItemsInCart([...itemsInCart]);			
			return;
		}
		const newItem: ProductCart = {
			uuid: uuidv4(),
			...productToAdd,
			quantity,
		};
		setItemsInCart([...itemsInCart, newItem]);
		
	};

	const deleteFromCart = (id: number) => {
		const itemToDelete = itemsInCart.find((item) => item.id === id);
		if (!itemToDelete) return;
		
		const returnedProduct = products.find(
			(product) => product.id === id
		);
		if (returnedProduct) returnedProduct.stock++;

		if (itemToDelete.quantity > 1) {
			itemToDelete.quantity--;
			setItemsInCart([...itemsInCart]);
			return;
		}
		
		const newItemsInCart = itemsInCart.filter(
			(item) => item.id !== itemToDelete.id
		);
		setItemsInCart(newItemsInCart);
	};

  const clearCart = () => {
    const returnedProducts = products.map(product => {
      const returnedItem = itemsInCart.find(item => item.id === product.id)
      if (returnedItem) product.stock += returnedItem.quantity
      return product
    })
    setProducts(returnedProducts);
    setItemsInCart([]);
  }

	return (
		<ShopContext.Provider
			value={{
				products,
				setInitialProducts,
				itemsInCart,
				saveProduct,
				addToCart,
				deleteFromCart,
        		clearCart
			}}
		>
			{children}
		</ShopContext.Provider>
	);
};

export default ShopProvider;
