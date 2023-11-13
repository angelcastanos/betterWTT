/**
*@fileoverview Counter component adds or removes products from the cart
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

import { useContext, useEffect, useState } from "react";

//context
import { ShopContext } from "../context/shop";

//types
import { ShopContextType } from "../types/context";

//interfaces
import { Product, ProductCart } from "../interfaces/product";


/**
 * Adds or removes products from the cart
 * @param id Product id
 * @returns 
 */
export const Counter = ({ id }: Product | ProductCart) => {
	const { addToCart, deleteFromCart, itemsInCart, products } = useContext(
		ShopContext
	) as ShopContextType;

	const [cartQuantity, setCartQuantity] = useState(0);

	useEffect(() => {
		setCartQuantity(
			itemsInCart.filter((item) => item.id === id)[0]?.quantity || 0
		);
	}, [itemsInCart]);

	return (
		<div className="cart-counter">
			<button type="button"
			className="btn btn-light"
			disabled={cartQuantity === 0}
				onClick={() => deleteFromCart(id)}
			>
				-
			</button>
			<p>{cartQuantity}</p>
			<button type="button"
			className="btn btn-light"
			disabled={products.find((product) => product.id === id)?.stock === 0}
				onClick={() => addToCart(id)}
			>
				+
			</button>
		</div>
	);
};
