/**
*@fileoverview Contains the shopping cart of the application
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/
import { useContext } from "react";

//context
import { ShopContext } from "../context/shop";

//types
import { ShopContextType } from "../types/context";

//components
import CartIcon from "./CartIcon";
import { Counter } from "./Counter";

//interfaces
import { ProductCart } from "../interfaces/product";

//assets
import closeIcon from "../assets/closeIcon.svg";

/**
 * Manages the shopping cart of the application
 * @returns {JSX.Element} JSX Element
 */
export const ShoppingCart = () => {
	const { itemsInCart, clearCart } = useContext(
		ShopContext
	) as ShopContextType;

	return (
		<>
			<label className="cart-button" htmlFor="cart-icon">
				<CartIcon />
			</label>
			<input id="cart-icon" type="checkbox" hidden />
			<aside className="cart">
				<div className="cart-header">
					<label className="cart-header-icon">
						<CartIcon />
					</label>
					<h2>Mi Carrito</h2>
					<label htmlFor="cart-icon">
						<img src={closeIcon} alt="close" />
					</label>
				</div>

				<div className="cart-container">
					{itemsInCart.length === 0 && (
						<div className="empty-cart-message">
							<p>No hay productos en el carrito</p>
							<p>
								Explora todos los productos que tenemos para ti!
							</p>
						</div>
					)}
					<ul>{itemsInCart.map((item) => CartItem(item))}</ul>
					<div className="cart-total">
						<p>
							Total:{" $"}
							{itemsInCart
								.reduce(
									(acc, item) =>
										acc + item.price * item.quantity,
									0
								)
								.toFixed(2)}{" "}
							USD
						</p>
					</div>
					<button
						className="btn btn-outline-danger"
						onClick={clearCart}
					>
						Vaciar carrito
					</button>
				</div>
			</aside>
		</>
	);
};

const CartItem = (item: ProductCart) => {
	return (
		<li key={item.id}>
			<div className="cart-item-header">
				<img src={item.image} alt={item.title} className="img-fluid" />
        <div className="row">
          <p>{item.title}</p>
          <p>{`$${item.price} USD`}</p>
        </div>				
			</div>			
			<Counter {...item} />
		</li>
	);
};
