/**
*@fileoverview Product modal component
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

//components
import { ProductForm } from "./ProductForm";

/**
 * Product modal component
 * @returns {JSX.Element} JSX Element
 */
export const ProductModal = () => {

	return (
		<div className="modal" id="productForm">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							Registro de nuevo producto
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<ProductForm />
					</div>
				</div>
			</div>
		</div>
	);
};
