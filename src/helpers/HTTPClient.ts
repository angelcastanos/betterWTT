/**
*@fileoverview HTTP Client to make requests
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

//interfaces
import { FetchOptions } from "../interfaces/HTTPClient";

/**
 * Makes a request to the given URL
 * @param {string} url - URL to make the request
 * @param {FetchOptions} options - Options for the request
 * @returns {Promise} Promise object represents the response
 */
export const fetch = async (url: string, options?: FetchOptions) => {
    if(!url.startsWith("http")){
        throw new Error("Invalid URL");
    }

    const response = await window.fetch(url, options);
    const data = await response.json();

    return data;
};