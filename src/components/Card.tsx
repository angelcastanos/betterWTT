/**
*@fileoverview Card component that shows the product information
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

//interfaces
import { Product } from "../interfaces/product"

//components
import { Counter } from "./Counter"

/**
 * Shows the product information and the counter component
 * @param product Product to be displayed
 * @returns 
 */
export const Card = (product: Product) => {
  
  return (
    <div className="card">
      <div className="card-body">      
        <img src={product.thumbnail} alt={product.title} className="img-fluid" />
        <h3 className="card-title">{product.title}</h3>
        <h3 className="card-subtitle mb-2 text-body-secondary">{`$${product.price}`}</h3>
        <Counter {...product} />
        <p>{`Quedan: ${product.stock}`}</p>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  )
}
