/**
*@fileoverview Products page
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

//hooks
import { useFetchProducts } from "../hooks/useFetchProducts";

//components
import { Card } from "../components/Card";
import { ShoppingCart } from "../components/ShoppingCart";
import { SkeletonLoad } from "../components/SkeletonLoad";

/**
 * Shows the available products
 * handles the loading and error states
 * @returns {JSX.Element} JSX Element
 */
export const Products = () => {
	const { products, isLoading, error } = useFetchProducts();	

	return (
		<>	
			{isLoading && (
				<div className="card-grid">
					<SkeletonLoad />
				</div>
			)}
			
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			
			<ShoppingCart />
			{products && (
				<div className="card-grid">
					{products.map((product) => (
						<Card key={product.id} {...product} />
					))}
				</div>
			)}
		</>
	);
};
