/**
*@fileoverview Contains the navigation bar of the application
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

/**
 * Navigation bar of the application
 * @returns {JSX.Element} JSX Element
 */
export const Navbar = () => {
	
  return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand">My Shop</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item">
							<a className="nav-link active">Productos</a>
						</li>
					</ul>
					<button
						type="button"
						className="btn btn-outline-primary"
						data-bs-toggle="modal"
						data-bs-target="#productForm"
					>
						Nuevo producto
					</button>
				
				</div>
			</div>
		</nav>
	);
};
