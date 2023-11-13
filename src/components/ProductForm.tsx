/**
*@fileoverview Product form component
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

import { useContext } from "react";

// third party libraries
import { useForm } from "react-hook-form";

//context
import { ShopContext } from "../context/shop";

//helpers
import { fileToBase64 } from "../helpers/fileToBase64";

//interfaces
import { Product } from "../interfaces/product";

//types
import { ShopContextType } from "../types/context";

//constants
import Labels from "../constants/Labels";


/**
 * Product form component
 * Handles the creation of a new product
 * @returns {JSX.Element} JSX Element
 */
export const ProductForm = () => {
	const { saveProduct } = useContext(ShopContext) as ShopContextType;
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = handleSubmit(async(data) => {

		const base64Image = await fileToBase64(data.image[0]);
		console.log(base64Image);
		
		const productToCreate: Product = {
			...(data as Product),
			title: data.name,
			price: Number(data.price),
			stock: Number(data.stock),
			image: base64Image as string,
		};
		saveProduct(productToCreate);
		reset();
		alert("Producto creado");
	});
	return (
		<div className="product-form">
			<form onSubmit={onSubmit}>
				<div className="mb-3">
					<label
						htmlFor="name"
						className="form-label"
					>{`${Labels.forms.products.name}:`}</label>
					<input
						type="text"
						className="form-control"
						{...register("name", {
							required: {
								value: true,
								message: Labels.formErrors.required,
							},
							minLength: {
								value: 2,
								message: Labels.formErrors.minLength.replace(
									"{0}",
									"2"
								),
							},
							maxLength: {
								value: 100,
								message: Labels.formErrors.maxLength,
							},
						})}
					/>
					{errors.name && (
						<div className="alert alert-danger" role="alert">
							{errors.name?.message as string}
						</div>
					)}
				</div>

				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						{`${Labels.forms.products.description}:`}
					</label>
					<textarea
						id="description"
						className="form-control"
						{...register("description", {
							required: {
								value: true,
								message: Labels.formErrors.required,
							},
							minLength: {
								value: 2,
								message: Labels.formErrors.minLength.replace(
									"{0}",
									"2"
								),
							},
							maxLength: {
								value: 200,
								message: Labels.formErrors.maxLength.replace(
									"{0}",
									"200"
								),
							},
						})}
					/>
					{errors.description && (
						<div className="alert alert-danger" role="alert">
							{errors.description?.message as string}
						</div>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						{`${Labels.forms.products.price}:`}
					</label>
					<input
						type="number"
						className="form-control"
						step="0.01"
						{...register("price", {
							required: {
								value: true,
								message: Labels.formErrors.required,
							},
							min: {
								value: 0.01,
								message: Labels.formErrors.minNumber.replace(
									"{0}",
									"0.01"
								),
							},
						})}
					/>
					{errors.price && (
						<div className="alert alert-danger" role="alert">
							{errors.price?.message as string}
						</div>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="stock" className="form-label">
						{`${Labels.forms.products.stock}:`}
					</label>
					<input
						type="number"
						className="form-control"
						{...register("stock", {
							required: {
								value: true,
								message: Labels.formErrors.required,
							},
							min: {
								value: 1,
								message: Labels.formErrors.minNumber.replace(
									"{0}",
									"1"
								),
							},
						})}
					/>
					{errors.stock && (
						<div className="alert alert-danger" role="alert">
							{errors.stock?.message as string}
						</div>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="image" className="form-label">
						{`${Labels.forms.products.image}:`}
					</label>
					<input
						type="file"
						className="form-control"
						{...register("image", {
							required: {
								value: true,
								message: Labels.formErrors.required,
							},
							validate: {
								isImage: (value) => {
									const extension = value[0].name
										.split(".")
										.pop();
									return (
										["jpg", "jpeg", "png"].includes(
											extension
										) || Labels.formErrors.isImage
									);
								},
							},
						})}
					/>
					{errors.image && (
						<div className="alert alert-danger" role="alert">
							{errors.image?.message as string}
						</div>
					)}
				</div>
				<button
					type="submit"
					className="btn btn-primary"
				>{`${Labels.forms.products.submit}`}</button>
			</form>
		</div>
	);
};
