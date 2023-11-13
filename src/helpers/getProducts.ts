/**
*@fileoverview Get products from fakeStoreAPI
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

import { Product } from '../interfaces/product';
import Endpoints from '../constants/Endpoints';
import { fetch } from './HTTPClient';

/**
 * Gets products from fakeStoreAPI
 * @returns {Promise} Promise object represents the array of products
 */
export const getProducts = async () => {
    const response = await fetch(Endpoints.fakeStoreAPI);        

        const products: Product[] = response.map(({
            id,
            title,
            price,
            description,
            image,
            
        }:Product) => {
            const randomStock = Math.floor(Math.random() * 10);
            return {
                id,
                title,
                price,
                description,
                image,
                stock: randomStock,
            };

        });
        return products;
};