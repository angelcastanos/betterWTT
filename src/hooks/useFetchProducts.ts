/**
*@fileoverview Custom hook to fetch products
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

import { 
    useEffect, 
    useState, 
    useContext, 
    Context 
} from "react";

//context
import { ShopContext } from "../context/shop";

//helpers
import { getProducts } from "../helpers/getProducts";

//types
import { ShopContextType } from "../types/context";

/**
 * Custom hook to fetch products
 * @returns {Object} Object with the products, isLoading and error
 */
export const useFetchProducts = () => {

    const {  products, setInitialProducts } = useContext<ShopContextType>(
		ShopContext as Context<ShopContextType>
	);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);   

    const loadProducts = async () => {
        try {
            const products = await getProducts();
            setInitialProducts(products);
            setIsLoading(false);
        } catch (error) {
            setError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return {
        products,
        isLoading,
        error,
    };
};